import {
  Dumbbell,
  HeartPulse,
  Weight,
  Columns3,
  Target,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Category {
  icon: LucideIcon;
  title: string;
  description: string;
}

const categories: Category[] = [
  {
    icon: Dumbbell,
    title: "Strength Equipment",
    description:
      "Smith machines, cable stations, leg presses, and complete multi-gym systems built for heavy commercial use.",
  },
  {
    icon: HeartPulse,
    title: "Cardio Machines",
    description:
      "Treadmills, ellipticals, rowers, and exercise bikes from industry-leading manufacturers with commercial warranties.",
  },
  {
    icon: Weight,
    title: "Free Weights",
    description:
      "Dumbbells, barbells, kettlebells, and weight plates in rubber-coated and competition-grade options.",
  },
  {
    icon: Columns3,
    title: "Benches & Racks",
    description:
      "Adjustable benches, power racks, squat racks, and storage systems designed for high-traffic environments.",
  },
  {
    icon: Target,
    title: "Functional Training",
    description:
      "Battle ropes, plyometric boxes, resistance bands, TRX systems, and functional training rigs.",
  },
  {
    icon: Wrench,
    title: "Accessories",
    description:
      "Flooring, mirrors, foam rollers, gym mats, chalk, and everything else to complete your facility.",
  },
];

export default function Categories() {
  return (
    <section id="products" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-surface" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Our Equipment
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-text sm:text-5xl">
            Everything Your Gym Needs
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            From boutique studios to mega gyms — we supply complete facility
            outfitting with professional-grade equipment.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <article
                key={category.title}
                className="group cursor-pointer rounded-xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-text">
                  {category.title}
                </h3>
                <p className="mt-2 leading-relaxed text-text-muted">
                  {category.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>View catalog</span>
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
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
