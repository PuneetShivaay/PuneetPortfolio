"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Trophy, Users } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function LeadershipAndAwardsSection() {
  return (
    <div className="flex flex-col gap-12">
      {/* Leadership Experience */}
      {DATA.leadership && DATA.leadership.length > 0 && (
        <section id="leadership" className="flex flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="flex items-center gap-2">
              <Users className="size-5 text-muted-foreground" />
              <h2 className="text-xl font-bold">Leadership & Mentorship</h2>
            </div>
          </BlurFade>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {DATA.leadership.map((item, id) => (
              <BlurFade key={`${item.organization}-${id}`} delay={BLUR_FADE_DELAY * 16 + id * 0.05}>
                <div className="flex flex-col gap-1 p-3.5 rounded-xl border border-border/40 bg-secondary/20 h-full">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-sm text-foreground">{item.organization}</h3>
                    <span className="text-[10px] tabular-nums text-muted-foreground">{item.dates}</span>
                  </div>
                  <p className="text-xs font-medium text-emerald-500">{item.role}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>
      )}

      {/* Awards & Recognition
      {DATA.awards && DATA.awards.length > 0 && (
        <section id="awards" className="flex flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="flex items-center gap-2">
              <Trophy className="size-5 text-amber-500" />
              <h2 className="text-xl font-bold">Awards & Honors</h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {DATA.awards.map((award, id) => (
              <BlurFade key={`${award.title}-${id}`} delay={BLUR_FADE_DELAY * 18 + id * 0.05}>
                <div className="flex flex-col gap-1 p-3.5 rounded-xl border border-border/40 bg-secondary/20 hover:border-amber-500/30 transition-colors h-full">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-xs sm:text-sm text-foreground line-clamp-1">{award.title}</h3>
                    <span className="text-[10px] font-bold text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded">{award.year}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground font-medium">{award.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{award.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>
      )} */}
    </div>
  );
}