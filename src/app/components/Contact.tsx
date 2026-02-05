"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Client-side only — no backend
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-surface" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Get Started
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-text sm:text-5xl">
            Ready to Equip Your Gym?
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Fill out the form below and our team will get back to you within 24
            hours with a custom wholesale quote.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-cta/30 bg-cta/10 p-12 text-center">
                <CheckCircle className="mb-4 h-16 w-16 text-cta" />
                <h3 className="font-heading text-2xl font-bold text-text">
                  Thank You!
                </h3>
                <p className="mt-2 text-text-muted">
                  We&apos;ve received your inquiry. Our team will reach out
                  within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 cursor-pointer rounded-lg border border-border px-6 py-2.5 font-medium text-text-muted transition-colors duration-200 hover:border-primary hover:text-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-border bg-background p-8"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-text"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      minLength={2}
                      placeholder="John Smith"
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-text placeholder-text-muted transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-text"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@yourgym.com"
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-text placeholder-text-muted transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Phone */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-text"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-text placeholder-text-muted transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-text"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={10}
                      rows={5}
                      placeholder="Tell us about your gym, facility size, and equipment needs..."
                      className="w-full resize-y rounded-lg border border-border bg-surface px-4 py-3 text-text placeholder-text-muted transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-cta px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-cta-hover hover:-translate-y-0.5 sm:w-auto"
                >
                  <Send className="h-5 w-5" />
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <aside className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-background p-8">
              <h3 className="font-heading text-xl font-bold text-text">
                Contact Information
              </h3>
              <p className="mt-2 text-text-muted">
                Prefer to reach out directly? We&apos;re here to help.
              </p>

              <div className="mt-8 space-y-6">
                {/* Phone */}
                <a
                  href="tel:+18005551234"
                  className="flex cursor-pointer items-start gap-4 group"
                >
                  <div className="rounded-lg bg-primary/10 p-3 transition-colors duration-200 group-hover:bg-primary/20">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted">Phone</p>
                    <p className="font-semibold text-text transition-colors duration-200 group-hover:text-primary">
                      +1 (800) 555-1234
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:sales@gymforge.com"
                  className="flex cursor-pointer items-start gap-4 group"
                >
                  <div className="rounded-lg bg-primary/10 p-3 transition-colors duration-200 group-hover:bg-primary/20">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted">Email</p>
                    <p className="font-semibold text-text transition-colors duration-200 group-hover:text-primary">
                      sales@gymforge.com
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/18005551234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-start gap-4 group"
                >
                  <div className="rounded-lg bg-cta/10 p-3 transition-colors duration-200 group-hover:bg-cta/20">
                    <MessageCircle className="h-5 w-5 text-cta" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted">
                      WhatsApp
                    </p>
                    <p className="font-semibold text-text transition-colors duration-200 group-hover:text-cta">
                      +1 (800) 555-1234
                    </p>
                  </div>
                </a>

                {/* Address */}
                <a
                  href="https://maps.google.com/?q=123+Industrial+Blvd,+Dallas,+TX+75201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-start gap-4 group"
                >
                  <div className="rounded-lg bg-primary/10 p-3 transition-colors duration-200 group-hover:bg-primary/20">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted">
                      Headquarters
                    </p>
                    <p className="font-semibold text-text transition-colors duration-200 group-hover:text-primary">
                      123 Industrial Blvd
                      <br />
                      Dallas, TX 75201
                    </p>
                  </div>
                </a>
              </div>

              {/* Business Hours */}
              <div className="mt-8 rounded-lg bg-surface p-4">
                <p className="text-sm font-medium text-text-muted">
                  Business Hours
                </p>
                <p className="mt-1 text-sm text-text">
                  Mon – Fri: 8:00 AM – 6:00 PM CST
                </p>
                <p className="text-sm text-text">
                  Sat: 9:00 AM – 2:00 PM CST
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
