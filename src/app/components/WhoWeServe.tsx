import { Dumbbell, Building2, Briefcase, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Audience {
  icon: LucideIcon;
  title: string;
  description: string;
}

const audiences: Audience[] = [
  {
    icon: Dumbbell,
    title: "Commercial Gyms",
    description:
      "From local fitness centers to national chains, we provide complete equipment solutions with volume pricing and installation services.",
  },
  {
    icon: Building2,
    title: "Hotels & Resorts",
    description:
      "Elevate your guest experience with premium fitness centers designed to match your brand's luxury standards.",
  },
  {
    icon: Briefcase,
    title: "Corporate Wellness",
    description:
      "Keep employees healthy and productive with on-site fitness facilities. We handle design, equipment, and ongoing support.",
  },
  {
    icon: Users,
    title: "Boutique Studios",
    description:
      "Specialized equipment for yoga, CrossFit, cycling, and specialty training studios. Curated packages for every niche.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-background" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Our Clients
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-text sm:text-5xl">
            Who We Serve
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Trusted by fitness businesses of all sizes — from boutique studios to
            enterprise facilities across the country.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <article
                key={audience.title}
                className="group relative rounded-xl border border-border bg-surface p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mx-auto mb-5 inline-flex rounded-full bg-primary/10 p-4 transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg font-bold text-text">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {audience.description}
                </p>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors duration-200 hover:text-primary-dark"
                >
                  <span>Learn More</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
