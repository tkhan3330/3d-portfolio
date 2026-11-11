import React, { Suspense } from "react";
import Link from "next/link";
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function CopyrightYear() {
  const year = new Date().getFullYear();
  return <>{year}</>;
}

function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-4 border-t border-border px-4 py-6 md:px-6 lg:flex-row lg:justify-between">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-gray-500 dark:text-gray-400">
        <p>
          ©{" "}
          <Suspense fallback={null}>
            <CopyrightYear />
          </Suspense>{" "}
          {config.author}. All rights reserved.
        </p>
        <span className="hidden sm:inline opacity-40">•</span>
        <p>
          Designed, Built &amp; Maintained with precision by{" "}
          <a
            href="https://zoeftech.in?ref=portfolio_footer"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            ZoefTech.in
          </a>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <SocialMediaButtons />
        <nav className="flex gap-4 sm:gap-6 z-10">
          {footer.map((link, index) => {
            const { title, href } = link;

            return (
              <Link
                className="text-xs underline-offset-4 hover:underline"
                href={href}
                key={`l_${index}`}
              >
                <Button variant={"link"}>{title}</Button>
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
