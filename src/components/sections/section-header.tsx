import { cn } from "@/lib/utils"
import Link from "next/link"
import { BoxReveal } from "../reveal-animations"
import { ReactNode } from "react"

export const SectionHeader = ({ 
  id, 
  title, 
  desc, 
  className
}: { 
  id: string, 
  title: string | ReactNode, 
  desc?: string, 
  className?: string,
  sticky?: boolean
}) => {
  return (
    <div className={cn("relative mb-8 md:mb-16 w-full flex flex-col items-center", className)}>
      <Link href={`#${id}`}>
        <BoxReveal width="100%">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-foreground text-center">
            {title}
          </h2>
        </BoxReveal>
      </Link>
      {desc && (
        <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base text-center text-muted-foreground leading-relaxed">
          {desc}
        </p>
      )}
    </div>
  )
}
