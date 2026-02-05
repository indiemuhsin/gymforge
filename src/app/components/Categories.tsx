import Image from "next/image";
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
  image: string;
}

const categories: Category[] = [
  {
    icon: Dumbbell,
    title: "Strength Equipment",
    description:
      "Smith machines, cable stations, leg presses, and complete multi-gym systems built for heavy commercial use.",
    image: "/images/categories/strength.jpg",
  },
  {
    icon: HeartPulse,
    title: "Cardio Machines",
    description:
      "Treadmills, ellipticals, rowers, and exercise bikes from industry-leading manufacturers with commercial warranties.",
    image: "/images/categories/cardio.jpg",
  },
  {
    icon: Weight,
    title: "Free Weights",
    description:
      "Dumbbells, barbells, kettlebells, and weight plates in rubber-coated and competition-grade options.",
    image: "/images/categories/weights.jpg",
  },
  {
    icon: Columns3,
    title: "Benches & Racks",
    description:
      "Adjustable benches, power racks, squat racks, and storage systems designed for high-traffic environments.",
    image: "/images/categories/benches.jpg",
  },
  {
    icon: Target,
    title: "Functional Training",
    description:
      "Battle ropes, plyometric boxes, resistance bands, TRX systems, and functional training rigs.",
    image: "/images/categories/functional.jpg",
  },
  {
    icon: Wrench,
    title: "Accessories",
    description:
      "Flooring, mirrors, foam rollers, gym mats, chalk, and everything else to complete your facility.",
    image: "/images/categories/accessories.jpg",
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
                className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4 inline-flex rounded-lg bg-primary/90 p-3 shadow-lg backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-text">
                    {category.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-text-muted">
                    {category.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
