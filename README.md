# Sarau Luxury (Revamp)

Website premium untuk Sarau Luxury — layanan event organizer dan dekorasi mewah. Desain modern dengan animasi 3D, motion effects, dan visual storytelling.

**Tech Stack:** Next.js · Tailwind CSS · Framer Motion · Three.js (React Three Fiber)

## Features

- Hero section dengan animasi cinematic
- 3D elements menggunakan React Three Fiber
- Smooth scroll animations (Framer Motion)
- Multi-page: About, Gallery, Packages, Blog, Booking, FAQ, Contact, Clients
- Stats counter section
- Services preview dengan hover effects
- CTA sections
- Fully responsive

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage (hero, stats, services, why us, CTA) |
| `/about` | Tentang Sarau Luxury |
| `/gallery` | Portfolio foto & video |
| `/packages` | Paket layanan & pricing |
| `/booking` | Form booking/inquiry |
| `/blog` | Artikel & inspirasi |
| `/faq` | Frequently asked questions |
| `/contact` | Informasi kontak |
| `/clients` | Testimoni & client list |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/
    page.tsx            → Homepage
    about/              → About page
    gallery/            → Gallery page
    packages/           → Packages & pricing
    booking/            → Booking form
    blog/               → Blog articles
    faq/                → FAQ section
    contact/            → Contact info
    clients/            → Testimonials
  components/
    sections/           → Homepage sections (Hero, Stats, Services, etc)
    ui/                 → Reusable UI elements
```

## Design

- Color palette: dark/luxury tones
- Typography: display fonts for headings
- Motion: entrance animations, parallax, hover states
- 3D: subtle three.js elements for premium feel

## License

MIT
