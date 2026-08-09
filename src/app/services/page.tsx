'use client'
import { motion } from 'framer-motion'
import { Check, ArrowRight, PartyPopper, Tent, Mountain, Users, Heart, Presentation, Camera } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

const services = [
  { id: 'gathering', icon: PartyPopper, title: 'Company Gathering', badge: 'Terlaris', desc: 'Program gathering lengkap 2D1N.', price: 'Mulai Rp 525.000/pax', features: ['Penginapan 2D1N', '3x Meal & Coffee Break', 'Fun Game & Game Master', 'Dokumentasi'] },
  { id: 'outing', icon: Tent, title: 'Outing Perusahaan', badge: null, desc: 'Wisata + relaksasi + penguatan tim.', price: 'Custom', features: ['Destinasi lengkap', 'Akomodasi & transportasi', 'Rafting, ATV, Body Rafting', 'Dokumentasi'] },
  { id: 'outbound', icon: Mountain, title: 'Outbound Training', badge: 'Unggulan', desc: 'Experiential learning di alam terbuka.', price: 'Mulai Rp 150.000/pax', features: ['Fun Game', 'Team Building', 'Rafting 11km', 'Fasilitator bersertifikat'] },
  { id: 'teambuilding', icon: Users, title: 'Team Building', badge: null, desc: 'Indoor/outdoor kreatif.', price: 'Mulai Rp 125.000/pax', features: ['Amazing Race', 'Ice Breaking', 'Game Master', 'Fleksibel indoor/outdoor'] },
  { id: 'family', icon: Heart, title: 'Family Gathering', badge: null, desc: 'Kebersamaan keluarga besar perusahaan.', price: 'Custom', features: ['Ramah semua usia', 'BBQ & Kambing Guling', 'Lomba & Doorprize', 'Catering halal'] },
  { id: 'meeting', icon: Presentation, title: 'Meeting Package', badge: null, desc: 'Paket meeting profesional.', price: 'Mulai Rp 225.000/pax', features: ['Halfday/Fullday', 'Meeting Room & AV', 'Lunch & Coffee Break', 'Dokumentasi'] },
  { id: 'documentation', icon: Camera, title: 'Dokumentasi Event', badge: null, desc: 'Foto, video, drone.', price: 'Custom', features: ['Fotografer pro', 'Videografer sinematik', 'Drone footage', 'Same-day edit'] },
]

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="section-tag">Layanan</span>
          <h1 className="font-display text-5xl font-bold text-bark mt-4">Layanan <span className="gradient-text">Profesional</span></h1>
        </motion.div>
        <div className="space-y-10">
          {services.map((s, i) => (
            <motion.div key={s.id} id={s.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-2xl flex items-center justify-center"><s.icon size={24} className="text-forest" /></div>
                  {s.badge && <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-bold rounded-full">{s.badge}</span>}
                </div>
                <h2 className="font-display text-2xl font-bold text-bark mb-2">{s.title}</h2>
                <p className="text-bark/60 mb-4">{s.desc}</p>
                <p className="text-forest font-bold mb-4">{s.price}</p>
                <a href={`https://wa.me/${CONTACT.phone1Wa}?text=Halo, saya tertarik layanan ${s.title}`} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                  Tanya Info <ArrowRight size={14} />
                </a>
              </div>
              <ul className="space-y-3">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-bark/70 text-sm">
                    <div className="w-5 h-5 bg-forest/10 rounded-full flex items-center justify-center shrink-0"><Check size={12} className="text-forest" /></div>{f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
