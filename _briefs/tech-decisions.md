# GymForge — Technical Decisions

> **Date:** 2026-02-05
> **Document Type:** Architecture Decision Record (ADR) Collection
> **Status:** Approved

---

## Overview

This document captures all major technical decisions for the GymForge landing page, including rationale, alternatives considered, and tradeoffs. Decisions are organized by category.

---

## 1. Framework: Next.js 15 (App Router)

### Decision
Use **Next.js 15** with the App Router for the landing page framework.

### Rationale

| Factor | Next.js Advantage |
|--------|------------------|
| **Static Export** | `output: 'export'` generates pure static HTML — no server required |
| **SEO** | Built-in metadata API, automatic sitemap generation, proper HTML semantics |
| **React Ecosystem** | Access to vast component libraries, hooks, and community resources |
| **Image Optimization** | `next/image` provides automatic WebP conversion, lazy loading, responsive srcsets |
| **Developer Experience** | Fast Refresh, TypeScript support, file-based routing |
| **Performance** | Automatic code splitting, prefetching, optimized bundling |
| **Industry Standard** | Most popular React meta-framework, easy to find developers |

### Alternatives Considered

| Alternative | Why Not |
|-------------|---------|
| **Astro** | Better for content-heavy sites, but less mature React integration and smaller ecosystem |
| **Vite + React** | No built-in SSG/SSR, would need manual optimization for SEO |
| **Remix** | Requires server runtime, overkill for static landing page |
| **Gatsby** | GraphQL complexity overhead, slower builds, declining community momentum |
| **Plain HTML/CSS** | No component reusability, harder to maintain, no optimization pipeline |

### Configuration
```js
// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // For static export
  },
};
```

---

## 2. Styling: Tailwind CSS v4

### Decision
Use **Tailwind CSS v4** for all styling.

### Rationale

| Factor | Tailwind Advantage |
|--------|-------------------|
| **Utility-First** | Rapid iteration without CSS file switching, styles co-located with markup |
| **Design System Tokens** | CSS custom properties align with MASTER.md design tokens |
| **No CSS Bloat** | PurgeCSS built-in, only ships used classes (typically <10KB) |
| **Responsive by Default** | `sm:`, `md:`, `lg:` breakpoints are intuitive and consistent |
| **Dark Mode Ready** | `dark:` variants for future theming |
| **Component Libraries** | Compatible with shadcn/ui, Headless UI, Radix for complex interactions |
| **v4 Improvements** | Lightning CSS engine, faster builds, native CSS cascade layers |

### Alternatives Considered

| Alternative | Why Not |
|-------------|---------|
| **CSS Modules** | Slower iteration, separate files, no design token system |
| **Styled Components** | Runtime CSS-in-JS overhead, larger bundle |
| **Emotion** | Same issues as Styled Components |
| **Vanilla CSS** | No design tokens, harder to maintain consistency, no responsive utilities |
| **Sass/SCSS** | No utility system, requires custom design token implementation |

### Design Token Integration
```css
/* tailwind.config.ts maps to MASTER.md */
theme: {
  extend: {
    colors: {
      primary: '#F97316',    // --color-primary
      secondary: '#FB923C',  // --color-secondary
      cta: '#22C55E',        // --color-cta
      background: '#1F2937', // --color-background
      text: '#F8FAFC',       // --color-text
    },
    fontFamily: {
      heading: ['Barlow Condensed', 'sans-serif'],
      body: ['Barlow', 'sans-serif'],
    },
  },
}
```

---

## 3. Language: TypeScript

### Decision
Use **TypeScript** for all code.

### Rationale

| Factor | TypeScript Advantage |
|--------|---------------------|
| **Type Safety** | Catch errors at compile time, not runtime |
| **IDE Support** | Superior autocomplete, refactoring, and navigation |
| **Documentation** | Types serve as inline documentation |
| **Maintainability** | Easier to onboard new developers, safer refactoring |
| **Ecosystem** | All modern React libraries ship with types |
| **Industry Standard** | Expected in professional codebases |

### Configuration
```json
// tsconfig.json (strict mode)
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true
  }
}
```

### Alternatives Considered

| Alternative | Why Not |
|-------------|---------|
| **JavaScript** | No type safety, harder to maintain, worse IDE experience |
| **JSDoc Types** | Verbose, less powerful, inconsistent tooling support |

---

## 4. Icons: Lucide React

### Decision
Use **Lucide React** for all iconography.

### Rationale

| Factor | Lucide Advantage |
|--------|-----------------|
| **Tree-Shakeable** | Only imports icons actually used, minimal bundle impact |
| **Consistent Style** | 1,000+ icons with unified stroke width and sizing |
| **Accessible** | Built-in `aria-label` support, role="img" defaults |
| **Customizable** | Props for size, color, strokeWidth |
| **Active Development** | Fork of Feather Icons with continued updates |
| **MIT License** | No licensing concerns for commercial use |

### Usage
```tsx
import { Phone, Mail, MapPin } from 'lucide-react';

<Phone className="w-5 h-5 text-primary" />
```

### Alternatives Considered

| Alternative | Why Not |
|-------------|---------|
| **Heroicons** | Solid style doesn't match MASTER.md design aesthetic |
| **Font Awesome** | Larger bundle, licensing complexity for full set |
| **Phosphor Icons** | Good alternative, but Lucide is more established in React ecosystem |
| **Custom SVGs** | Time-consuming, inconsistent, maintenance burden |
| **Emoji** | MASTER.md explicitly forbids: "❌ Emojis as icons — Use SVG icons" |

---

## 5. Typography: Barlow Condensed + Barlow

### Decision
Use **Barlow Condensed** for headings and **Barlow** for body text.

### Rationale

| Factor | Font Choice Advantage |
|--------|-----------------------|
| **Sports/Fitness Mood** | Condensed headings convey energy, action, and athleticism |
| **Readability** | Barlow (non-condensed) provides excellent body text legibility |
| **Variable Weights** | 400-700 weights available for hierarchy without extra font loads |
| **Google Fonts** | Free, fast CDN, GDPR-compliant hosting option |
| **Brand Alignment** | Matches MASTER.md design system specification |

### Implementation
```css
/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Barlow:wght@300;400;500;600;700&display=swap');
```

### Font Scale
| Level | Font | Weight | Size | Usage |
|-------|------|--------|------|-------|
| H1 | Barlow Condensed | 700 | 48-64px | Hero headline |
| H2 | Barlow Condensed | 600 | 36-48px | Section titles |
| H3 | Barlow Condensed | 600 | 24-32px | Card headings |
| Body | Barlow | 400 | 16-18px | Paragraphs |
| Small | Barlow | 400 | 14px | Captions, labels |

### Performance Optimization
- Use `display=swap` for FOUT prevention
- Preconnect to fonts.googleapis.com and fonts.gstatic.com
- Consider self-hosting for production (reduces external dependencies)

---

## 6. Hosting: Platform Comparison

### Decision
Deploy as static export. **Primary recommendation: Vercel** (with alternatives below).

### Platform Comparison

| Feature | Vercel | Netlify | Cloudflare Pages | GitHub Pages |
|---------|--------|---------|------------------|--------------|
| **Static Hosting** | ✅ Excellent | ✅ Excellent | ✅ Excellent | ✅ Basic |
| **Next.js Support** | ✅ Native (creators) | ✅ Good | ✅ Good | ⚠️ Manual setup |
| **Global CDN** | ✅ | ✅ | ✅ Best-in-class | ✅ |
| **Custom Domain** | ✅ Free | ✅ Free | ✅ Free | ✅ Free |
| **SSL** | ✅ Auto | ✅ Auto | ✅ Auto | ✅ Auto |
| **Forms** | ⚠️ Need 3rd party | ✅ Netlify Forms | ⚠️ Need 3rd party | ⚠️ Need 3rd party |
| **Analytics** | ✅ Built-in | ✅ Built-in | ✅ Built-in | ❌ None |
| **Preview Deploys** | ✅ | ✅ | ✅ | ❌ |
| **Free Tier** | Generous | Generous | Very generous | Unlimited |
| **DDoS Protection** | ✅ | ✅ | ✅ Best-in-class | ⚠️ Basic |

### Recommendation
1. **Vercel** — Best Next.js integration, excellent DX, instant rollbacks
2. **Cloudflare Pages** — Best performance and security, great for cost-conscious
3. **Netlify** — Best if using Netlify Forms for contact form

### Deployment Command
```bash
# Build static export
npm run build

# Output in ./out directory, deploy to any static host
```

---

## 7. Backend: None (Static Site)

### Decision
**No backend.** The site is purely static HTML/CSS/JS.

### Rationale
- Landing page has no dynamic data requirements
- Contact form submissions can be handled by third-party services
- Static sites are faster, more secure, and cheaper to host
- No server maintenance, scaling concerns, or database costs

### Form Handling Options

| Service | Pros | Cons |
|---------|------|------|
| **Formspree** | Simple setup, generous free tier, spam filtering | 50 submissions/month on free tier |
| **Netlify Forms** | Zero config if hosting on Netlify, built-in | Only works on Netlify |
| **Getform** | Zapier integrations, file uploads | Paid plans get expensive |
| **Web3Forms** | Free, no signup required, privacy-focused | Less established |
| **Basin** | Good free tier, integrations | Extra service to manage |

### Recommended Approach
```tsx
// Contact form with Formspree
<form action="https://formspree.io/f/{form_id}" method="POST">
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Request Quote</button>
</form>
```

For production, the form endpoint can be configured via environment variable.

---

## 8. Performance Budget

### Decision
Enforce strict performance budgets aligned with Web Vitals.

### Budgets

| Metric | Budget | Rationale |
|--------|--------|-----------|
| **Total JS Bundle** | < 100KB (gzipped) | Keep main thread unblocked |
| **Total CSS** | < 20KB (gzipped) | Tailwind purges unused styles |
| **Largest Image** | < 200KB | Optimize with WebP/AVIF |
| **First Contentful Paint** | < 1.5s | User perceives "fast" |
| **Largest Contentful Paint** | < 2.5s | Core Web Vital threshold |
| **Cumulative Layout Shift** | < 0.1 | Prevent visual jank |
| **Time to Interactive** | < 3.0s | Ready for user interaction |
| **Lighthouse Score** | ≥ 90 (all categories) | Quality baseline |

### Monitoring
- Lighthouse CI in GitHub Actions on every PR
- Vercel Analytics for production monitoring
- WebPageTest for deep performance analysis

### Bundle Analysis
```bash
# Generate bundle analysis
npm run build && npx @next/bundle-analyzer
```

---

## 9. Accessibility Requirements

### Decision
Ensure WCAG 2.1 AA compliance throughout.

### Requirements

| Area | Requirement |
|------|-------------|
| **Color Contrast** | 4.5:1 minimum for normal text, 3:1 for large text |
| **Focus States** | Visible focus indicators on all interactive elements |
| **Keyboard Navigation** | Full site navigable without mouse |
| **Screen Readers** | Semantic HTML, ARIA labels where needed |
| **Motion** | Respect `prefers-reduced-motion` |
| **Form Labels** | All inputs have associated labels |
| **Alt Text** | All images have descriptive alt attributes |

### Testing
- Lighthouse accessibility audit
- axe-core browser extension
- Manual keyboard navigation testing
- Screen reader testing (VoiceOver, NVDA)

---

## 10. SEO Strategy

### Decision
Implement comprehensive technical SEO from the start.

### Implementation

| Element | Implementation |
|---------|---------------|
| **Meta Tags** | Next.js Metadata API in app/layout.tsx |
| **Open Graph** | OG image, title, description for social sharing |
| **Twitter Cards** | Summary large image card |
| **Sitemap** | Auto-generated sitemap.xml |
| **Robots.txt** | Allow all crawlers |
| **Canonical URLs** | Self-referential canonicals |
| **Structured Data** | Organization schema, LocalBusiness schema |
| **Heading Hierarchy** | Single H1, logical H2-H6 nesting |
| **URL Structure** | Clean, descriptive paths (no query strings for content) |

### Metadata Example
```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: 'GymForge | Premium Wholesale Gym Equipment for Commercial Facilities',
  description: 'B2B wholesale gym equipment supplier. Commercial-grade cardio, strength, and fitness equipment for gyms, hotels, and fitness centers. Request a quote today.',
  openGraph: {
    title: 'GymForge | Premium Wholesale Gym Equipment',
    description: 'Commercial-grade fitness equipment for gyms, hotels, and fitness centers.',
    type: 'website',
    locale: 'en_US',
    siteName: 'GymForge',
  },
};
```

---

## Summary

| Decision | Choice | Key Reason |
|----------|--------|------------|
| Framework | Next.js 15 (App Router) | Static export + SEO + React ecosystem |
| Styling | Tailwind CSS v4 | Utility-first, design tokens, performance |
| Language | TypeScript | Type safety, maintainability, DX |
| Icons | Lucide React | Tree-shakeable, consistent, accessible |
| Fonts | Barlow Condensed + Barlow | Sports/fitness mood, Google Fonts |
| Hosting | Vercel (primary) | Best Next.js support, instant deploys |
| Backend | None (static) | No dynamic requirements, simpler ops |
| Forms | Formspree / Netlify Forms | Third-party, no server needed |
| Performance | <100KB JS, <3s LCP | Core Web Vitals compliance |
| Accessibility | WCAG 2.1 AA | Inclusive, also good for SEO |
| SEO | Full technical implementation | Organic traffic is key acquisition channel |

---

## Appendix: Package Recommendations

### Core Dependencies
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "tailwindcss": "^4.0.0",
    "@types/react": "^19.0.0",
    "@types/node": "^22.0.0"
  }
}
```

### Optional Enhancements
- `framer-motion` — Scroll animations, transitions
- `@vercel/analytics` — Privacy-friendly analytics
- `next-sitemap` — Sitemap and robots.txt generation
- `sharp` — Image optimization during build
