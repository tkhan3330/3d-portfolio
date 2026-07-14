"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowUpRight, ArrowRight, PenLine } from "lucide-react";

export type BlogPreview = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    author?: string;
    tags?: string[];
  };
  wordCount: number;
};

function readTime(wordCount: number) {
  return Math.max(1, Math.ceil(wordCount / 200));
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const fallbackImage = "/blog-thumbnails/ai-mathematics.svg";

const BlogsSection = ({ posts }: { posts: BlogPreview[] }) => {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <SectionWrapper id="blogs" className="flex flex-col items-center md:justify-center md:min-h-screen py-14 md:py-24 bg-secondary/5">
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="blogs"
          title="From the Blog"
          desc="Notes on teaching mathematics, classroom technology, and building tools for the modern classroom."
          className="mb-8 md:mb-14 mt-0"
        />

        {/* Featured post */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-6 md:mb-8"
          >
            <Link href={`/blogs/${featured.slug}`} className="group block">
              <div className="grid md:grid-cols-2 overflow-hidden rounded-3xl border border-border/60 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] md:aspect-auto md:h-full overflow-hidden">
                  <img
                    src={featured.metadata.image || fallbackImage}
                    alt={featured.metadata.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg">
                    <PenLine className="w-3 h-3" /> Featured
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-6 md:p-9">
                  <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground font-mono">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {formatDate(featured.metadata.publishedAt)}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {readTime(featured.wordCount)} min read
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
                    {featured.metadata.title}
                  </h3>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                    {featured.metadata.summary}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5 flex-wrap">
                      {featured.metadata.tags?.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-primary/20 bg-primary/5 text-primary text-[10px] rounded-full px-2.5 py-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Read
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Remaining posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {rest.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4), ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Link href={`/blogs/${post.slug}`} className="group block h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.metadata.image || fallbackImage}
                      alt={post.metadata.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent opacity-70" />
                    {post.metadata.tags?.[0] && (
                      <span className="absolute top-3 left-3 rounded-full bg-black/55 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white border border-white/10">
                        {post.metadata.tags[0]}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2.5 mb-2.5 text-[11px] text-muted-foreground font-mono">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="w-3 h-3" />
                        {formatDate(post.metadata.publishedAt)}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {readTime(post.wordCount)} min
                      </span>
                    </div>

                    <h3 className="text-base md:text-lg font-bold tracking-tight leading-snug mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.metadata.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                      {post.metadata.summary}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                      Read article
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-secondary/40"
          >
            View all posts
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BlogsSection;
