import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  gym: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Marcus Chen",
    role: "Owner",
    gym: "IronHouse Fitness",
    quote:
      "GymForge transformed our 15,000 sq ft facility in under two weeks. The equipment quality is exceptional, and the wholesale pricing saved us over $40,000 compared to other suppliers.",
  },
  {
    name: "Sarah Williams",
    role: "Operations Director",
    gym: "Peak Performance Studios",
    quote:
      "We've outfitted three locations with GymForge and the consistency is unmatched. Their account manager helped us design the perfect layout for each space. True partners, not just vendors.",
  },
  {
    name: "David Okonkwo",
    role: "Founder",
    gym: "Atlas Athletic Club",
    quote:
      "From the initial consultation to the white-glove delivery, GymForge made opening our gym stress-free. Five years in and the equipment still looks and performs like new.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface via-background to-surface" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-text sm:text-5xl">
            Trusted by Gym Owners Nationwide
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Hear from the professionals who built their gyms with GymForge
            equipment.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group relative rounded-xl border border-border bg-surface-light p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              {/* Quote icon */}
              <Quote className="mb-4 h-8 w-8 text-primary/30" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-6 leading-relaxed text-text-muted">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-border pt-6">
                {/* Avatar placeholder */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 font-heading text-lg font-bold text-primary">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-heading font-bold text-text">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-text-muted">
                    {testimonial.role}, {testimonial.gym}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
