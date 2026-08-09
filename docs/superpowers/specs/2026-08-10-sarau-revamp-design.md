# Sarau Luxury Revamp — Design Spec

## Purpose
Full visual redesign of Sarau Luxury EO website. Same content/features, new design language.

## Design System
- **Style:** Liquid Glass + Nature
- **Primary:** #2D6A4F (forest green)
- **Accent:** #A16207 (gold)
- **Background:** #FAFAF9 (cream)
- **Hero dark:** #1B4332 (deep forest)
- **Typography:** Playfair Display (display) / Jost (body)
- **Cards:** Glassmorphism (bg-white/70 backdrop-blur-xl)
- **Animations:** Framer Motion, 400-600ms fluid curves
- **Icons:** Lucide React

## Stack
- Next.js 15, React 19, Tailwind CSS, Framer Motion, Three.js (hero), Lucide icons

## Pages (10)
1. Home — Hero (3D) + Stats + Services preview + Why Us + Gallery + CTA
2. About — Vision/mission, timeline, team
3. Services — 7 services with detail
4. Gallery — 55 photos from Google Drive (verified working)
5. Packages — Silver/Gold/Platinum pricing
6. Blog — Article list
7. Booking — Inquiry form
8. Contact — Info + map + WhatsApp
9. FAQ — Accordion with schema markup
10. Clients — Logo marquee + testimonials

## Constraints
- No emojis as structural icons
- Gallery images from Google Drive lh3 URLs (already verified)
- Bilingual: Indonesian primary
- Three.js hero lazy-loaded after idle
- Responsive: 375px, 768px, 1024px, 1440px
