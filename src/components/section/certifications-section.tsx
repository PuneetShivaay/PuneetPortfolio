"use client";

/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ExternalLink, Award } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function CertificationsSection() {
  if (!DATA.certifications || DATA.certifications.length === 0) return null;

  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <BlurFade delay={BLUR_FADE_DELAY * 14}>
        <h2 className="text-xl font-bold">Courses & Certificates</h2>
      </BlurFade>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {DATA.certifications.map((cert, id) => (
          <BlurFade key={`${cert.title}-${id}`} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
            <div className="flex items-center gap-3 p-3 rounded-xl border border-border/40 bg-secondary/20 hover:bg-secondary/40 transition-colors h-full">
              {cert.logoUrl ? (
                <img
                  src={cert.logoUrl}
                  alt={cert.issuer}
                  className="size-9 object-contain flex-none rounded-md p-0.5 bg-background border"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <div className="size-9 rounded-md bg-muted flex items-center justify-center flex-none">
                  <Award className="size-4 text-muted-foreground" />
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h3 className="font-semibold text-xs sm:text-sm text-foreground leading-snug line-clamp-1">
                    {cert.title}
                  </h3>
                  {cert.credentialUrl && cert.credentialUrl !== "#" && (
                    <Link
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors flex-none"
                    >
                      <ExternalLink className="size-3.5" />
                    </Link>
                  )}
                </div>
                <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}