/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  ArrowUpRight, 
  FolderGit2, 
  Smartphone, 
  Bot, 
  ShieldCheck 
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectLogo({ src, alt }: { src?: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  // Dynamic contextual fallback icon based on title keywords
  const getFallbackIcon = () => {
    const lower = alt.toLowerCase();
    if (lower.includes("app") || lower.includes("mobile") || lower.includes("converter")) {
      return <Smartphone className="size-4 text-muted-foreground" />;
    }
    if (lower.includes("medical") || lower.includes("chatbot") || lower.includes("learning")) {
      return <Bot className="size-4 text-muted-foreground" />;
    }
    if (lower.includes("secure") || lower.includes("cloud") || lower.includes("file")) {
      return <ShieldCheck className="size-4 text-muted-foreground" />;
    }
    return <FolderGit2 className="size-4 text-muted-foreground" />;
  };

  if (!src || imageError) {
    return (
      <div className="size-9 p-2 border rounded-full shadow-sm ring-2 ring-border bg-muted flex items-center justify-center flex-none">
        {getFallbackIcon()}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-9 p-1 border rounded-full shadow-sm ring-2 ring-border overflow-hidden object-contain bg-background flex-none"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl p-5 hover:ring-2 hover:ring-border transition-all duration-200 bg-card",
        className
      )}
    >
      {/* Header: Logo, Multi-line Title, Dates & Top-right Arrow */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <ProjectLogo src={image} alt={title} />
          <div className="flex flex-col min-w-0">
            <h3 className="font-semibold text-base leading-snug text-foreground line-clamp-2">
              {title}
            </h3>
            <time className="text-xs text-muted-foreground tabular-nums mt-1">
              {dates}
            </time>
          </div>
        </div>

        <Link
          href={href || link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors p-1 flex-none"
          aria-label={`Open ${title}`}
        >
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      {/* Description */}
      <div className="text-xs sm:text-sm flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert my-4">
        <Markdown>{description}</Markdown>
      </div>

      {/* External Badges / Links (Source, Website, etc.) */}
      <div className="flex flex-wrap items-center gap-2 mb-3 min-h-[26px]">
        {links && links.length > 0 &&
          links.map((item, idx) => (
            <Link
              href={item.href ?? "#"}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Badge
                className="flex items-center gap-1.5 text-[10px] sm:text-xs bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border/50 px-2.5 py-0.5"
                variant="secondary"
              >
                {item.icon}
                {item.type}
              </Badge>
            </Link>
          ))}
      </div>

      {/* Tech Stack Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-border/30">
          {tags.map((tag) => (
            <Badge
              key={tag}
              className="text-[10px] font-medium border border-border/60 bg-background/50 h-5 px-2"
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}