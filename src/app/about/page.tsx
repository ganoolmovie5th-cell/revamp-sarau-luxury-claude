'use client'
import { motion } from 'framer-motion'
import { Eye, Target, Heart, Users, Calendar, Award } from 'lucide-react'
import { STATS } from '@/lib/constants'

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="section-tag">Tentang Kami</span>
          <h1 className="font-display text-5xl font-bold text-bark mt-4">Cerita <span className="gradient-text">Sarau Luxury</span></h1>
          <p className="text-bark/60 text-lg mt-4 max-w-2xl mx-auto">Berawal dari passion menciptakan pengalaman bermakna, kini menjadi mitra terpercaya untuk event perusahaan di Indonesia.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-8">
            <Eye size={24} className="text-forest mb-4" />
            <h3 className="font-display text-2xl font-bold text-bark mb-3">Visi</h3>
            <p className="text-bark/60">Menjadi event organizer #1 di Indonesia yang menciptakan pengalaman luar biasa untuk setiap perusahaan.</p>
          </div>
          <div className="glass-card p-8">
            <Target size={24} className="text-gold mb-4" />
            <h3 className="font-display text-2xl font-bold text-bark mb-3">Misi</h3>
            <p className="text-bark/60">Memberikan layanan event berkualitas premium dengan harga terjangkau, membangun tim klien melalui experiential learning.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, value: `${STATS.totalClients}+`, label: 'Klien' },
            { icon: Calendar, value: `${STATS.totalEvents}+`, label: 'Event' },
            { icon: Award, value: `${STATS.yearsExperience}+`, label: 'Tahun' },
            { icon: Heart, value: '5.0', label: 'Rating' },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 text-center">
              <s.icon size={22} className="text-forest mx-auto mb-2" />
              <p className="font-display text-2xl font-bold text-bark">{s.value}</p>
              <p className="text-bark/50 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
