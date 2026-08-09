'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const gd = (id: string) => `https://lh3.googleusercontent.com/d/${id}`
const items = [
  { id: 1, src: gd('1HhH1QIB3rAGDFk6T1-fPh7EUwKujYTax'), title: 'Outbound Bersama', cat: 'Outbound' },
  { id: 2, src: gd('1HSx1QewH2BMjSGxdam5z04W2UpXozPym'), title: 'Team Building', cat: 'Team Building' },
  { id: 3, src: gd('1JT3QZM0QZaXPTYLE7QUfQiwtEW7GVpCx'), title: 'Gathering', cat: 'Gathering' },
  { id: 4, src: gd('1uTefPFMuCEufqDWhoxk-T4CJdXZRPMyq'), title: 'Outing', cat: 'Outing' },
  { id: 5, src: gd('1zzHVnSRhIcKY9og6COA743wgc8ej6yMP'), title: 'Fun Game', cat: 'Outbound' },
  { id: 6, src: gd('1DIOEfTC0AGwVhBWPx_e_sHp1S4whYsnj'), title: 'Kebersamaan Tim', cat: 'Team Building' },
  { id: 7, src: gd('1mFaFZoSo2eJlsnpGyy-5HaSiGVk0eriq'), title: 'Alam Terbuka', cat: 'Outing' },
  { id: 8, src: gd('19Z0PLEUY2THTrafQ_NTJezJhfEZYF_V8'), title: 'Semangat Tim', cat: 'Outbound' },
  { id: 9, src: gd('1_TzSpo235LmJJUQWIfaAv1LPc018OR2q'), title: 'Aksi Lapangan', cat: 'Team Building' },
  { id: 10, src: gd('1lrnK9HRhjD0W-8uPDPQLWkGHBnEWmnQN'), title: 'Kebersamaan', cat: 'Gathering' },
  { id: 11, src: gd('1e0Tuw7vsNhRpJv0dD09zkF-F6qjQgUXN'), title: 'Petualangan', cat: 'Outing' },
  { id: 12, src: gd('1cydhBNrsRQDtXFpMwNtMJc3-fTSkOVBJ'), title: 'Keceriaan', cat: 'Gathering' },
]

const categories = ['Semua', 'Outbound', 'Team Building', 'Gathering', 'Outing']

export default function GalleryPage() {
  const [active, setActive] = useState('Semua')
  const [lightbox, setLightbox] = useState<typeof items[0] | null>(null)
  const filtered = active === 'Semua' ? items : items.filter(i => i.cat === active)

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="section-tag">Galeri</span>
          <h1 className="font-display text-5xl font-bold text-bark mt-4">Momen <span className="gradient-text">Berkesan</span></h1>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(c => (
            <button key={c} onClick={() => setActive(c)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${active === c ? 'bg-forest text-white shadow-forest' : 'bg-white border border-bark/10 text-bark/70 hover:border-forest/40'}`}>{c}</button>
          ))}
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <motion.div key={img.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} onClick={() => setLightbox(img)} className="break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer relative h-52 md:h-64 bg-bark/5">
              <Image src={img.src} alt={img.title} fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="25vw" />
              <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-forest-muted font-semibold">{img.cat}</span>
                <p className="text-white font-display font-semibold text-sm">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-bark/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
            <div className="relative max-w-4xl w-full h-[70vh] rounded-3xl overflow-hidden" onClick={e => e.stopPropagation()}>
              <Image src={lightbox.src} alt={lightbox.title} fill unoptimized className="object-contain" sizes="100vw" />
              <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white cursor-pointer"><X size={18} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
