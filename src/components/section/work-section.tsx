/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt, size = "md" }: { src?: string; alt: string; size?: "sm" | "md" }) {
  const [imageError, setImageError] = useState(false);
  const dimensions = size === "sm" ? "size-6 md:size-8" : "size-8 md:size-10";

  if (!src || imageError) {
    return (
      <div className={cn(dimensions, "p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none")} />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn(dimensions, "p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none")}
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <div className="w-full flex flex-col gap-8">
      {DATA.work.map((companyGroup, cIdx) => (
        <div key={`${companyGroup.company}-${cIdx}`} className="flex flex-col gap-4 border-l-2 border-border/60 pl-4 ml-2">
          
          {/* PARENT COMPANY HEADER */}
          <div className="flex items-center gap-x-3">
            <LogoImage src={companyGroup.logoUrl} alt={companyGroup.company} size="md" />
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-base md:text-lg text-foreground leading-tight">
                {companyGroup.company}
              </h3>
              <p className="text-xs text-muted-foreground tabular-nums">
                {companyGroup.start} - {companyGroup.end}
              </p>
            </div>
          </div>

          {/* NESTED CLIENT ROLES */}
          <div className="flex flex-col gap-5 mt-1 ml-2 md:ml-4">
            {companyGroup.clients.map((clientRole, rIdx) => (
              <div key={`${clientRole.clientName}-${rIdx}`} className="flex flex-col gap-1.5 bg-secondary/30 p-3.5 rounded-xl border border-border/40">
                
                {/* Client Header & Sub-Logo */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {clientRole.clientLogo && (
                      <LogoImage src={clientRole.clientLogo} alt={clientRole.clientName} size="sm" />
                    )}
                    <div>
                      {clientRole.clientName && (
                        <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider block">
                          Client: {clientRole.clientName}
                        </span>
                      )}
                      <h4 className="font-semibold text-sm text-foreground">
                        {clientRole.title}
                      </h4>
                    </div>
                  </div>

                  <span className="text-xs tabular-nums text-muted-foreground whitespace-nowrap self-start">
                    {clientRole.start} - {clientRole.end}
                  </span>
                </div>

                {/* Client Description */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                  {clientRole.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}