'use client'

import { motion } from 'framer-motion'
import { ArrowRight, PartyPopper, Tent, Mountain, Users, Heart, Presentation, Camera } from 'lucide-react'

const services = [
  { icon: PartyPopper, title: 'Company Gathering', desc: 'Program gathering lengkap 2D1N dengan akomodasi, aktivitas, dan hiburan.', badge: 'Terlaris' },
  { icon: Tent, title: 'Outing Perusahaan', desc: 'Wisata keluar kantor yang memadukan kesenangan dan penguatan tim.', badge: null },
  { icon: Mountain, title: 'Outbound Training', desc: 'Pelatihan berbasis alam untuk kepemimpinan dan teamwork.', badge: 'Unggulan' },
  { icon: Users, title: 'Team Building', desc: 'Aktivitas kreatif indoor/outdoor untuk sinergi dan komunikasi.', badge: null },
  { icon: Heart, title: 'Family Gathering', desc: 'Rayakan kebersamaan keluarga besar perusahaan yang meriah.', badge: null },
  { icon: Camera, title: 'Dokumentasi Event', desc: 'Fotografer, videografer, dan drone profesional.', badge: null },
]

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-cream-warm">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="section-tag">Layanan Kami</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-bark mt-4">
            Solusi Event <span className="gradient-text">Lengkap</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-7 group hover:shadow-glass-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center group-hover:bg-forest group-hover:text-white transition-all duration-300">
                  <s.icon size={24} className="text-forest group-hover:text-white transition-colors" />
                </div>
                {s.badge && <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-bold rounded-full">{s.badge}</span>}
              </div>
              <h3 className="font-display text-xl font-bold text-bark mb-2">{s.title}</h3>
              <p className="text-bark/60 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
