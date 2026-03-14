import { cn } from "@/lib/utils";
import { Bell, Globe, Monitor } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Add your monitors",
    description:
      "Connect your websites and APIs in seconds. Set your check frequency and regions.",
    icon: Monitor,
  },
  {
    number: 2,
    title: "Get notified instantly",
    description:
      "Receive alerts via email, Slack, or SMS the moment downtime is detected.",
    icon: Bell,
  },
  {
    number: 3,
    title: "Share your status",
    description:
      "Publish a beautiful public status page to keep your users informed.",
    icon: Globe,
  },
];

export function HowItWorks({ className }: { className?: string }) {
  return (
    <section className={cn("bg-muted/50 py-16 md:py-24", className)}>
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-cal text-3xl tracking-tight text-foreground md:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-muted-foreground">
            Get started with uptime monitoring in three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-8 md:grid-cols-3 md:gap-4">
          {/* Connecting lines (desktop only) */}
          <div
            className="absolute left-0 right-0 top-12 hidden h-px border-t border-dashed border-border md:block"
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.number} className="relative flex flex-col">
                {/* Card */}
                <div className="group relative flex flex-1 flex-col border border-border bg-background p-6 transition-colors hover:bg-muted/30">
                  {/* Step number badge */}
                  <span className="absolute -top-3 left-4 flex h-6 w-6 items-center justify-center bg-foreground text-xs font-medium text-background">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="mb-4 flex h-10 w-10 items-center justify-center border border-border bg-muted/50">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 font-medium text-foreground">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (desktop) */}
                {!isLast && (
                  <div
                    className="absolute -right-2 top-12 z-10 hidden -translate-y-1/2 text-muted-foreground md:block"
                    aria-hidden="true"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-border"
                    >
                      <path
                        d="M6 4L10 8L6 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

                {/* Arrow connector (mobile) */}
                {!isLast && (
                  <div
                    className="flex justify-center py-4 md:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-90 text-border"
                    >
                      <path
                        d="M6 4L10 8L6 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
