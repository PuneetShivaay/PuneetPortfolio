/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import CertificationsSection from "@/components/section/certifications-section";
import LeadershipAndAwardsSection from "@/components/section/leadership-awards-section";
import { ArrowUpRight, Download, FileText } from "lucide-react";
import { GoogleText, DirecTVText } from "@/components/brand-text";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">

      {/* =========================================================================
          HERO / PROFILE SECTION
          Displays intro greeting, summary tagline, avatar, and resume CTA buttons
         ========================================================================= */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              {/* <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              /> */}

              <BlurFade delay={BLUR_FADE_DELAY}>
                <p className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl leading-relaxed">
                  Frontend Software Engineer with 5+ years of experience building enterprise
                  applications for <GoogleText /> and <DirecTVText /> using React.js and Next.js.
                </p>
              </BlurFade>

              {/* Resume Download & View Action Buttons */}
              <BlurFade delay={BLUR_FADE_DELAY * 2} className="pt-3">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="/docs/resume/PuneetKumarResume.pdf"
                    download="Puneet_Kumar_Resume.pdf"
                    className="inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-4 py-2 text-sm font-medium transition hover:opacity-90 active:scale-95 shadow-sm"
                  >
                    <Download className="size-4" />
                    Download Resume
                  </a>
                  <a
                    href="/docs/resume/PuneetKumarResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/30 text-foreground px-4 py-2 text-sm font-medium transition hover:bg-secondary/60 active:scale-95"
                  >
                    <FileText className="size-4" />
                    View PDF
                  </a>
                </div>
              </BlurFade>
            </div>

            {/* Avatar Profile Picture */}
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT SECTION
          Parses and renders markdown bio from DATA.summary
         ========================================================================= */}
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* =========================================================================
          WORK EXPERIENCE SECTION
          Renders employment history cards from work-section component
         ========================================================================= */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      {/* =========================================================================
          FEATURED PROJECTS SECTION
          Renders highlighted web/cloud projects with live demo and GitHub links
         ========================================================================= */}
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <ProjectsSection />
        </BlurFade>
      </section>

      {/* =========================================================================
          SKILLS SECTION
          Renders technical skill badges and framework chips
         ========================================================================= */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>

          {/* All skill groups (including Core Stack) share one uniform card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[{ category: "Core Stack", items: DATA.skills.core }, ...DATA.skills.groups].map((group, groupId) => (
              <BlurFade key={group.category} delay={BLUR_FADE_DELAY * 9 + groupId * 0.05}>
                <div className="flex flex-col gap-y-2 p-3.5 rounded-xl border border-border/40 bg-secondary/20 h-full">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <Badge
                        key={skill}
                        className="text-xs font-medium border border-foreground/25 hover:border-foreground/50 transition-colors bg-background/50 h-6 px-2.5"
                        variant="outline"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          COURSES & CERTIFICATIONS SECTION
          Renders verified credentials, badges, and verification links
         ========================================================================= */}
      <section id="certifications">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <CertificationsSection />
        </BlurFade>
      </section>

      {/* =========================================================================
          LEADERSHIP & AWARDS SECTION
          Renders community contributions, mentorship roles, and honors
         ========================================================================= */}
      <LeadershipAndAwardsSection />

      {/* =========================================================================
          HACKATHONS SECTION
          Renders hackathon submissions, awards, and project timelines
         ========================================================================= */}
      <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <HackathonsSection />
        </BlurFade>
      </section>

      {/* =========================================================================
          EDUCATION SECTION
          Renders degrees, university logos, and graduation timeframes
         ========================================================================= */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={`${education.school}-${index}`}
                delay={BLUR_FADE_DELAY * 15 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          aria-hidden
                        />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTACT SECTION
          Renders call-to-action for reaching out via email and social channels
         ========================================================================= */}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>

    </main>
  );
}