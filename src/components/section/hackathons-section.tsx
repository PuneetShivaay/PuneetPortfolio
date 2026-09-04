"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Award, ExternalLink, Trophy } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function AwardsSection() {
  if (!DATA.awards?.length) return null;

  return (
    <div className="space-y-12 w-full py-12">
      <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-medium">
              Recognition
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Awards & Achievements
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px] mx-auto">
              Honors, enterprise accolades, and achievements earned throughout my engineering career.
            </p>
          </div>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 gap-4 max-w-[800px] mx-auto">
        {DATA.awards.map((award, id) => (
          <BlurFade key={`${award.title}-${id}`} delay={BLUR_FADE_DELAY * 14 + id * 0.05}>
            <div className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card hover:border-amber-500/40 transition-all duration-300">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500 flex-none mt-0.5">
                <Trophy className="size-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-base text-foreground">
                    {award.title}
                  </h3>
                  <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full flex-none">
                    {award.year}
                  </span>
                </div>
                <p className="text-xs font-medium text-muted-foreground mt-0.5">{award.issuer}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                  {award.description}
                </p>

                {award.certificateUrl && (
                  <div className="pt-2.5 mt-2.5 border-t border-border/30">
                    <Link
                      href={award.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-500/90 hover:text-amber-400 transition-colors"
                    >
                      <Award className="size-3.5" />
                      <span>
                        {award.certificateUrl.includes("sankalptaru")
                          ? "View Live Tree Tracker"
                          : "View Credential"}
                      </span>
                      <ExternalLink className="size-2.5 opacity-70" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}