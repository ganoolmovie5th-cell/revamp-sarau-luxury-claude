'use client'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="section-tag">Kontak</span>
          <h1 className="font-display text-5xl font-bold text-bark mt-4">Mari <span className="gradient-text">Berdiskusi</span></h1>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <a href={`https://wa.me/${CONTACT.phone1Wa}?text=Halo%20Sarau%20Luxury%2C%20saya%20tertarik%20konsultasi%20event%20perusahaan.%20Bisa%20dibantu%3F`} target="_blank" rel="noopener noreferrer" className="glass-card p-6 flex items-center gap-5 group hover:shadow-glass-lg transition-all block cursor-pointer">
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center group-hover:bg-green-500 transition-colors"><MessageCircle size={24} className="text-green-600 group-hover:text-white transition-colors" /></div>
              <div><h3 className="font-display font-bold text-bark">WhatsApp</h3><p className="text-bark/60 text-sm">{CONTACT.phone1}</p></div>
            </a>
            <div className="glass-card p-6 flex items-center gap-5"><div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center"><Phone size={24} className="text-forest" /></div><div><h3 className="font-display font-bold text-bark">Telepon</h3><p className="text-bark/60 text-sm">{CONTACT.phone1}<br/>{CONTACT.phone2}</p></div></div>
            <div className="glass-card p-6 flex items-center gap-5"><div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center"><Mail size={24} className="text-forest" /></div><div><h3 className="font-display font-bold text-bark">Email</h3><p className="text-bark/60 text-sm">{CONTACT.email}</p></div></div>
            <div className="glass-card p-6 flex items-center gap-5"><div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center"><MapPin size={24} className="text-forest" /></div><div><h3 className="font-display font-bold text-bark">Alamat</h3><p className="text-bark/60 text-sm">{CONTACT.address}</p></div></div>
            <div className="glass-card p-6 flex items-center gap-5"><div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center"><Clock size={24} className="text-forest" /></div><div><h3 className="font-display font-bold text-bark">Jam Operasional</h3><p className="text-bark/60 text-sm">{CONTACT.hours}</p></div></div>
          </div>
          <div className="glass-card overflow-hidden h-80 md:h-auto">
            <iframe src="https://maps.google.com/maps?q=Binong+Permai+Curug+Tangerang+Banten&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="Lokasi Sarau Luxury" />
          </div>
        </div>
      </div>
    </div>
  )
}
