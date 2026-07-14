import { cn } from "@/lib/utils"
import Link from "next/link"
import { BoxReveal } from "../reveal-animations"
import { ReactNode } from "react"

export const SectionHeader = ({ 
  id, 
  title, 
  desc, 
  className,
  sticky = false
}: { 
  id: string, 
  title: string | ReactNode, 
  desc?: string, 
  className?: string,
  sticky?: boolean 
}) => {
  return (

    <div className={cn(sticky ? "top-[70px] sticky mb-96" : "relative mb-8 md:mb-16", className)}>
      <Link href={`#${id}`}>
        <BoxReveal width="100%">
          <h2
            className={cn(
              "text-3xl text-center sm:text-4xl md:text-7xl font-bold tracking-tight",
              "text-foreground"
            )}
          >
            {title}
          </h2>
        </BoxReveal>
      </Link>
      <p className="mx-auto mt-3 line-clamp-4 max-w-3xl font-normal text-sm md:text-base text-center text-muted-foreground">
        {desc}
      </p>
    </div>
  )
}
