'use client'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

const packages = [
  { name: 'Silver', price: 'Rp 525.000', per: '/pax', features: ['Penginapan 2D1N', '3x Meal & 2x Coffee Break', 'Aula & Lapangan', 'Fun Game & Game Master', 'Dokumentasi'], popular: false },
  { name: 'Gold', price: 'Rp 750.000', per: '/pax', features: ['Semua Silver +', 'Rafting 11km ATAU Paintball', 'Kolam Renang', 'Sound System', 'Doorprize koordinasi'], popular: true },
  { name: 'Platinum', price: 'Rp 1.050.000', per: '/pax', features: ['Semua Gold +', 'Team Building Program', 'Bus PP dari Jakarta', 'MC & Entertainment', 'Video highlight'], popular: false },
]

export default function PackagesPage() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="section-tag">Paket</span>
          <h1 className="font-display text-5xl font-bold text-bark mt-4">Pilih <span className="gradient-text">Paket Anda</span></h1>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`glass-card p-8 relative ${pkg.popular ? 'border-forest ring-2 ring-forest/20' : ''}`}>
              {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-forest text-white text-xs font-bold rounded-full">Paling Populer</span>}
              <h3 className="font-display text-2xl font-bold text-bark">{pkg.name}</h3>
              <div className="mt-4 mb-6"><span className="font-display text-4xl font-bold text-forest">{pkg.price}</span><span className="text-bark/50 text-sm">{pkg.per}</span></div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map(f => <li key={f} className="flex items-center gap-2 text-bark/70 text-sm"><Check size={14} className="text-forest shrink-0" />{f}</li>)}
              </ul>
              <a href={`https://wa.me/${CONTACT.phone1Wa}?text=Halo, saya tertarik paket ${pkg.name}`} target="_blank" rel="noopener noreferrer" className={`w-full justify-center ${pkg.popular ? 'btn-primary' : 'btn-outline'}`}>
                Pilih Paket <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
