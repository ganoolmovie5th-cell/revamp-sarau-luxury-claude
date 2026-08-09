'use client'

import { motion } from 'framer-motion'
import { Shield, Heart, Zap, Users, Star, ThumbsUp } from 'lucide-react'

const reasons = [
  { icon: Shield, title: 'Terpercaya Sejak 2018', desc: '8+ tahun melayani perusahaan dari berbagai industri.' },
  { icon: Users, title: '100+ Klien Korporat', desc: 'BCA, Toyota, Kalbe Farma, Park Hyatt, dan lainnya.' },
  { icon: Zap, title: 'All-in-One Solution', desc: 'Akomodasi, transportasi, aktivitas, konsumsi, dokumentasi.' },
  { icon: Heart, title: 'Custom Program', desc: 'Dirancang khusus sesuai karakter, budget, dan tujuan tim.' },
  { icon: Star, title: '5.0 Google Rating', desc: 'Rating sempurna dari semua klien yang mempercayakan event.' },
  { icon: ThumbsUp, title: 'Fasilitator Bersertifikat', desc: 'Tim profesional berpengalaman experiential learning.' },
]

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="section-tag">Mengapa Sarau Luxury</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-bark mt-4 leading-tight">
              Partner Terpercaya untuk <span className="gradient-text">Event Perusahaan</span>
            </h2>
            <p className="text-bark/60 text-lg mt-6 leading-relaxed">
              Kami menciptakan pengalaman yang memperkuat hubungan tim dan meninggalkan kesan mendalam.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-5 group hover:shadow-glass-lg transition-all duration-300"
              >
                <div className="w-10 h-10 bg-forest/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-forest transition-colors duration-300">
                  <item.icon size={18} className="text-forest group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-display font-bold text-bark text-sm mb-1">{item.title}</h4>
                <p className="text-bark/50 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
