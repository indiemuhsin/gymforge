import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Professional gym equipment"
          fill
          className="object-cover"
          priority
          quality={85}
        />
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 -z-10 bg-black/60" />
      
      {/* Additional gradient overlays for depth */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.15),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/20 px-4 py-2 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Trusted B2B Partner Since 2010
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Equip Your Gym
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              for Greatness
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-200 sm:text-xl">
            Professional-grade gym equipment at wholesale prices. From strength
            systems to cardio machines — everything your gym, studio, or
            fitness center needs, delivered with white-glove service.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-lg bg-cta px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-cta-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cta/30"
            >
              Request Wholesale Pricing
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#products"
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border-2 border-white/80 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-white hover:text-gray-900"
            >
              Browse Equipment
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cta" />
              <span className="text-sm font-medium">Free Shipping 50+ Units</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cta" />
              <span className="text-sm font-medium">5-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cta" />
              <span className="text-sm font-medium">Net-30 Payment Terms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}
