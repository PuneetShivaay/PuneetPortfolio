"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { ArrowUpRight, Award, ExternalLink, Users, Youtube } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function LeadershipSection() {
  return (
    <div className="flex flex-col gap-12">
      {DATA.leadership && DATA.leadership.length > 0 && (
        <section id="leadership" className="flex flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="flex items-center gap-2">
              <Users className="size-5 text-muted-foreground" />
              <h2 className="text-xl font-bold">Leadership & Mentorship</h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {DATA.leadership.map((item, id) => (
              <BlurFade
                key={`${item.organization}-${id}`}
                delay={BLUR_FADE_DELAY * 16 + id * 0.05}
              >
                <div className="flex flex-col justify-between p-4 rounded-xl border border-border/50 bg-secondary/15 hover:border-border hover:bg-secondary/25 transition-all duration-200 h-full">
                  <div>
                    {/* Header: Organization Name & Website Link */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-sm text-foreground">
                        {item.organization}
                      </h3>
                      {item.websiteUrl && (
                        <Link
                          href={item.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors p-0.5 flex-none"
                          aria-label={`Visit ${item.organization}`}
                        >
                          <ArrowUpRight className="size-3.5" />
                        </Link>
                      )}
                    </div>

                    {/* Role & Date Subheader */}
                    <div className="mt-1 flex flex-col gap-0.5">
                      <span className="text-xs font-medium text-emerald-400">
                        {item.role}
                      </span>
                      <time className="text-[11px] tabular-nums text-muted-foreground">
                        {item.dates}
                      </time>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Action (PDF Credential or YouTube Channel) */}
                  {item.credentialUrl && (
                    <div className="pt-3 mt-4 border-t border-border/30">
                      <Link
                        href={item.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground hover:text-emerald-400 transition-colors"
                      >
                        {item.type === "youtube" ? (
                          <Youtube className="size-3.5 text-red-500" />
                        ) : (
                          <Award className="size-3.5" />
                        )}
                        <span>{item.credentialLabel || "View Credential"}</span>
                        <ExternalLink className="size-2.5 opacity-60" />
                      </Link>
                    </div>
                  )}
                </div>
              </BlurFade>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}