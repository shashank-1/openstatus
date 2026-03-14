import { HowItWorks } from "@/components/marketing/how-it-works";
import { Button } from "@openstatus/ui/components/ui/button";
import { Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-cal text-balance text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Ship your status page before your SOC 2 auditor asks for it
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            The open-source status page trusted by growing teams. Communicate
            incidents, prove compliance readiness, and monitor uptime from 28
            global regions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <Link href="https://app.openstatus.dev">
                Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://openstatus.dev/github">
                <Github className="mr-2 h-4 w-4" />
                GitHub 8k+
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 border border-border">
          <Image
            src="/assets/landing/statuspage-meow.png"
            alt="OpenStatus status page preview"
            width={1200}
            height={675}
            className="w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "Beautiful Status Pages",
      description:
        "Customizable with themes, custom domains, and branding. Share publicly or password protect for internal teams.",
    },
    {
      title: "28 Global Regions",
      description:
        "Monitor from 28 regions across multiple clouds. Know about issues before your customers do.",
    },
    {
      title: "Instant Alerts",
      description:
        "Get alerted on Slack, Discord, PagerDuty, or email the moment something breaks.",
    },
    {
      title: "SOC 2 Ready",
      description:
        "Every status report is timestamped and documented automatically, giving you an audit-ready trail.",
    },
    {
      title: "Open Source",
      description:
        "Fully open source and can be self-hosted using an 8.5MB Docker image.",
    },
    {
      title: "Easy Integration",
      description:
        "Version your monitors with YAML and CI/CD. Monitor behind firewalls with a single Docker container.",
    },
  ];

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-cal text-3xl tracking-tight text-foreground md:text-4xl">
            Everything you need for uptime monitoring
          </h2>
          <p className="mt-3 text-muted-foreground">
            Trusted by teams like Cal.com, WhiteBIT, and Documenso
          </p>
        </div>
        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-background p-6 transition-colors hover:bg-muted/30"
            >
              <h3 className="mb-2 font-medium text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MarketingPage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Features />
    </main>
  );
}
