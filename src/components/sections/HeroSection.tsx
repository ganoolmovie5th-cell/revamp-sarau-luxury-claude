'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, Phone } from 'lucide-react'
import { CONTACT, STATS } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-forest-dark">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1920&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/70 to-forest-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-forest-dark/30" />

      <div className="relative z-10 container-wide pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-forest/30 text-forest-muted border border-forest-muted/30 backdrop-blur-sm">
              <Star size={14} className="fill-current" />
              #1 Event Organizer Outing & Outbound
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold text-white mt-8 leading-[1.1]"
          >
            Where Teams{' '}
            <span className="text-forest-muted">Grow</span>{' '}
            Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl mt-6 max-w-xl leading-relaxed"
          >
            Event organizer profesional untuk outing, outbound training, team building,
            dan company gathering. Dipercaya {STATS.totalClients}+ perusahaan sejak {STATS.foundedYear}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a href={`https://wa.me/${CONTACT.phone1Wa}?text=Halo%20Sarau%20Luxury%2C%20saya%20tertarik%20konsultasi%20event%20perusahaan.%20Bisa%20dibantu%3F`} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Phone size={18} /> Konsultasi Gratis <ArrowRight size={16} />
            </a>
            <a href="/gallery" className="btn-outline border-white/30 text-white hover:bg-white/10 hover:text-white">
              Lihat Portfolio
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10"
          >
            <span className="text-white/60 text-sm">{STATS.totalClients}+ Klien Korporat</span>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-gold fill-gold" />)}
              <span className="text-white/60 text-sm ml-1">{STATS.googleRating} Rating</span>
            </div>
            <span className="text-white/60 text-sm">{STATS.yearsExperience}+ Tahun</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
