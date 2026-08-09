'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'Berapa lama waktu persiapan event?', a: 'Idealnya 2-4 minggu sebelum hari-H untuk koordinasi optimal.' },
  { q: 'Minimal berapa peserta?', a: 'Minimal 20 peserta untuk paket gathering. Outbound bisa mulai 10 orang.' },
  { q: 'Apakah bisa custom program?', a: 'Semua program bisa disesuaikan dengan kebutuhan dan budget perusahaan.' },
  { q: 'Destinasi mana saja yang tersedia?', a: 'Lembang, Anyer, Bali, Bromo, Pangalengan, Ciwidey, dan 20+ destinasi lainnya.' },
  { q: 'Apakah termasuk dokumentasi?', a: 'Ya, semua paket sudah termasuk dokumentasi foto. Video dan drone tersedia sebagai add-on.' },
  { q: 'Bagaimana sistem pembayaran?', a: 'DP 50% saat booking, pelunasan H-7. Transfer ke rekening perusahaan (bukan pribadi).' },
]

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="section-tag">FAQ</span>
          <h1 className="font-display text-5xl font-bold text-bark mt-4">Pertanyaan <span className="gradient-text">Umum</span></h1>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card overflow-hidden">
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full p-5 flex items-center justify-between text-left cursor-pointer">
                <span className="font-display font-bold text-bark text-sm">{faq.q}</span>
                <ChevronDown size={18} className={`text-forest transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === i && <div className="px-5 pb-5 text-bark/60 text-sm">{faq.a}</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
