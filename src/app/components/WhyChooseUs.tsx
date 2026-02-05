import { BadgeDollarSign, Shield, Truck, Headphones } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface USP {
  icon: LucideIcon;
  title: string;
  description: string;
}

const usps: USP[] = [
  {
    icon: BadgeDollarSign,
    title: "Wholesale Pricing",
    description:
      "Direct-from-manufacturer pricing with volume discounts that scale. Save 30-60% compared to retail on every order.",
  },
  {
    icon: Shield,
    title: "Professional Grade",
    description:
      "Every product meets commercial-grade standards with rigorous quality testing. Built to withstand 24/7 gym usage.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Nationwide logistics network with white-glove delivery and professional installation available within 5-7 business days.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description:
      "Dedicated account managers, free gym layout planning, and lifetime technical support from certified fitness professionals.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32">
      {/* Background with gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full bg-gradient-to-b from-surface via-background to-surface" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Why GymForge
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-text sm:text-5xl">
            The Partner Your Gym Deserves
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            We don&apos;t just sell equipment — we build lasting partnerships
            with gym owners, operators, and fitness entrepreneurs.
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp) => {
            const Icon = usp.icon;
            return (
              <article
                key={usp.title}
                className="group relative rounded-xl border border-border bg-surface-light p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div className="mx-auto mb-5 inline-flex rounded-full bg-primary/10 p-4 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                  <Icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-text">
                  {usp.title}
                </h3>
                <p className="mt-3 leading-relaxed text-text-muted">
                  {usp.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
