import { motion } from "motion/react";
import Link from "next/link";
import styles from "./style.module.scss";
import { blur, translate } from "../../anim";
import { Link as LinkType } from "@/types";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import FunnyThemeToggle from "@/components/theme/funny-theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";

/** Map a nav href to the id of the section it points to on the home page. */
function hrefToSectionId(href: string): string | null {
  if (href === "/") return "hero";
  if (href.startsWith("/#")) return href.slice(2);
  return null;
}

interface SelectedLink {
  isActive: boolean;
  index: number;
}

interface BodyProps {
  links: LinkType[];
  selectedLink: SelectedLink;
  setSelectedLink: (selectedLink: SelectedLink) => void;
  setIsActive: (isActive: boolean) => void;
}

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  setIsActive,
}: BodyProps) {
  const params = useParams();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [currentHref, setCurrentHref] = useState("/");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const { pathname, hash } = window.location;
    setCurrentHref(pathname + hash);
  }, [params]);

  // Scroll-spy: on the home page, highlight the link whose section is in view.
  const sectionIds = useMemo(
    () =>
      isHome
        ? Array.from(
            new Set(
              links
                .map((l) => hrefToSectionId(l.href))
                .filter((id): id is string => id !== null)
            )
          )
        : [],
    [isHome, links]
  );
  const activeSection = useActiveSection(sectionIds);

  const getChars = (word: string) => {
    let chars: React.JSX.Element[] = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          className="pointer-events-none"
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className={cn(styles.body, "flex flex-col items-end md:flex-row")}>
      <FunnyThemeToggle className="w-6 h-6 mr-6 flex md:hidden" />
      {links.map((link, index) => {
        const { title, href, target } = link;
        const sectionId = hrefToSectionId(href);
        const isActive =
          isHome && activeSection
            ? sectionId === activeSection
            : currentHref === href;

        return (
          <Link
            key={`l_${index}`}
            href={href}
            target={target}
            className="cursor-can-hover rounded-lg"
          >
            <motion.p
              className={cn(
                "font-display rounded-lg transition-colors",
                isActive ? "text-foreground underline" : "text-muted-foreground"
              )}
              onClick={() => setIsActive(false)}
              onMouseOver={() => setSelectedLink({ isActive: true, index })}
              onMouseLeave={() => setSelectedLink({ isActive: false, index })}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index !== index
                  ? "open"
                  : "closed"
              }
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
