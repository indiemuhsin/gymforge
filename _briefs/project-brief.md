# GymForge — Project Brief

> **Version:** 1.0
> **Date:** 2026-02-05
> **Status:** Active

---

## 1. Project Overview

**GymForge** is a B2B gym equipment wholesale retailer landing page designed to generate qualified leads from gym owners, fitness center operators, and commercial facility managers. The site serves as the company's primary digital storefront — establishing credibility, showcasing product categories, and driving contact form submissions and quote requests.

This is a **single-page marketing site** (with potential for multi-page expansion), not an e-commerce platform. The focus is on conversion, trust signals, and a premium brand experience that communicates "serious equipment for serious businesses."

---

## 2. Problem Statement

### The Problem
Gym owners and commercial fitness facility operators need a **reliable wholesale equipment supplier** with competitive pricing, but the existing landscape is fragmented. Most wholesale gym equipment websites suffer from:

- Outdated, cluttered designs that erode trust
- Poor mobile experiences despite buyers increasingly browsing on-the-go
- Confusing navigation buried under thousands of SKUs
- Slow load times from unoptimized images and legacy tech stacks
- No clear path from "browsing" to "requesting a quote"

### The Opportunity
GymForge can differentiate by offering a **modern, fast, mobile-first experience** that treats B2B buyers like premium customers. A clean, high-performance landing page that communicates value within seconds and provides a frictionless path to contact.

---

## 3. Target Audience

### Primary Personas

| Persona | Description | Key Needs |
|---------|-------------|-----------|
| **Gym Owner / Operator** | Owns or manages a commercial gym (5K–50K sqft) | Bulk pricing, equipment variety, financing, reliable delivery |
| **Fitness Center Director** | Manages fitness facilities for chains or franchises | Brand consistency, volume discounts, account management |
| **Hotel / Resort Fitness Manager** | Outfits hotel fitness centers | Space-efficient equipment, premium brands, turnkey solutions |
| **CrossFit / Boutique Studio Owner** | Runs specialty fitness studios | Niche equipment, competitive pricing, fast turnaround |
| **Facility Procurement Manager** | Corporate/university/government buyer | Compliance, bulk quotes, warranty documentation |

### Audience Characteristics
- **B2B decision-makers** (not casual consumers)
- Research-heavy: compare 3–5 suppliers before deciding
- Value trust signals: testimonials, brand logos, certifications
- Prefer phone/email quotes over online checkout for large orders
- Mobile research → desktop purchase pattern
- Budget-conscious but quality-aware

---

## 4. Feature Prioritization (MoSCoW)

### ✅ Must Have (v1 Launch)

| Feature | Priority | Rationale |
|---------|----------|-----------|
| Hero section with primary CTA | P0 | First impression, immediate conversion path |
| Product category showcase | P0 | Show breadth of inventory at a glance |
| Contact / Quote request form | P0 | Primary conversion mechanism |
| Responsive design (mobile-first) | P0 | 60%+ of B2B research starts on mobile |
| SEO-optimized metadata & structure | P0 | Organic discovery is key acquisition channel |
| Navigation header with logo | P0 | Brand identity and section navigation |
| Footer with contact info & legal | P0 | Trust, accessibility, compliance |
| "Why Choose Us" value propositions | P0 | Differentiation from competitors |

### 🟡 Should Have (v1 Stretch)

| Feature | Priority | Rationale |
|---------|----------|-----------|
| Animated stats / counters | P1 | Social proof ("10,000+ pieces sold") |
| Client testimonials section | P1 | Trust building for B2B decisions |
| Brand/partner logo carousel | P1 | Credibility through association |
| Smooth scroll navigation | P1 | Single-page UX polish |
| Scroll-triggered animations | P1 | Modern feel, engagement |

### 🔵 Could Have (v1.x)

| Feature | Priority | Rationale |
|---------|----------|-----------|
| Live chat widget (Intercom/Crisp) | P2 | Instant support for hot leads |
| Product configurator / builder | P2 | Interactive engagement, upselling |
| Blog / Resources section | P2 | SEO long-tail, thought leadership |
| Video background / product demos | P2 | Emotional engagement |
| Multi-language support | P2 | International B2B expansion |

### ❌ Won't Have (v1)

| Feature | Rationale |
|---------|-----------|
| E-commerce / shopping cart | B2B wholesale requires custom quotes, not cart checkout |
| User accounts / login | No self-service portal needed for landing page |
| Payment processing | Invoicing handled offline |
| Inventory management | Backend system, not landing page scope |
| Order tracking | Future portal feature, out of scope |

---

## 5. Success Metrics

### Performance KPIs

| Metric | Target | Tool |
|--------|--------|------|
| Lighthouse Performance Score | ≥ 90 | Chrome DevTools |
| Lighthouse Accessibility Score | ≥ 90 | Chrome DevTools |
| Lighthouse SEO Score | ≥ 95 | Chrome DevTools |
| First Contentful Paint (FCP) | < 1.5s | Web Vitals |
| Largest Contentful Paint (LCP) | < 2.5s | Web Vitals |
| Total Page Load Time | < 3s | WebPageTest |
| Cumulative Layout Shift (CLS) | < 0.1 | Web Vitals |
| Total JS Bundle Size | < 100KB | Build output |

### Business KPIs

| Metric | Target | Tool |
|--------|--------|------|
| Form submission rate | > 3% of visitors | Analytics |
| Mobile bounce rate | < 50% | Google Analytics |
| Average session duration | > 45s | Google Analytics |
| Contact form completions/month | Baseline + track | Form provider |
| Organic search traffic growth | Month-over-month increase | Search Console |

---

## 6. Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 15.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Icons | Lucide React | Latest |
| Fonts | Barlow Condensed + Barlow | Google Fonts |
| Deployment | Static Export (`next export`) | — |
| Hosting | Vercel / Netlify / Cloudflare Pages | — |
| Form Handling | Formspree / Netlify Forms | — |
| Analytics | Google Analytics 4 / Plausible | — |

---

## 7. Timeline & Milestones

| Phase | Milestone | Duration | Deliverables |
|-------|-----------|----------|-------------|
| **Phase 0** | Research & Planning | 1–2 days | Project brief, competitor analysis, tech decisions, design system |
| **Phase 1** | Design System & Setup | 1 day | MASTER.md, component specs, project scaffold |
| **Phase 2** | Core Layout | 2–3 days | Header, Hero, Footer, responsive grid |
| **Phase 3** | Content Sections | 2–3 days | Product categories, Why Choose Us, Stats |
| **Phase 4** | Conversion Elements | 1–2 days | Contact form, CTAs, testimonials |
| **Phase 5** | Polish & Optimization | 1–2 days | Animations, SEO, Lighthouse audit, accessibility |
| **Phase 6** | Launch | 1 day | Deploy, verify, monitor |

**Total estimated timeline:** 8–13 days

---

## 8. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Scope creep toward e-commerce | High | Strict MoSCoW boundaries, "Won't Have" documented |
| Image-heavy design hurting performance | Medium | Next/Image optimization, WebP, lazy loading |
| Low form submission rate | Medium | A/B test CTAs, minimize form fields, add trust signals |
| SEO competition from established players | Medium | Focus on long-tail keywords, local SEO, content quality |
| Design system drift during implementation | Low | MASTER.md as single source of truth, pre-delivery checklist |

---

## 9. Out of Scope (Explicitly)

- Backend API development
- Database design or implementation
- User authentication or authorization
- Payment gateway integration
- CMS integration (content is static)
- Native mobile app
- Email marketing automation (can integrate later via form webhooks)

---

## 10. References

- Design System: `_briefs/MASTER.md`
- Competitor Analysis: `_briefs/competitor-analysis.md`
- Technical Decisions: `_briefs/tech-decisions.md`
