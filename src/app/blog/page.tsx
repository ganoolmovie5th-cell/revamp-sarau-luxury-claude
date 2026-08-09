'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

const posts = [
  { slug: '#', title: '10 Tips Memilih Event Organizer Terpercaya', cat: 'Tips', date: '10 Aug 2026', read: '5 min' },
  { slug: '#', title: '15 Ide Team Building Kreatif untuk 2026', cat: 'Inspirasi', date: '3 Aug 2026', read: '7 min' },
  { slug: '#', title: '7 Destinasi Outing Terbaik di Bandung', cat: 'Destinasi', date: '27 Jul 2026', read: '8 min' },
  { slug: '#', title: 'Manfaat Outbound untuk Produktivitas', cat: 'Knowledge', date: '20 Jul 2026', read: '6 min' },
]

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="section-tag">Blog</span>
          <h1 className="font-display text-5xl font-bold text-bark mt-4">Insight <span className="gradient-text">& Tips</span></h1>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card p-6 hover:shadow-glass-lg transition-all">
              <span className="text-xs font-semibold text-forest bg-forest/10 px-3 py-1 rounded-full">{p.cat}</span>
              <h3 className="font-display text-xl font-bold text-bark mt-4 mb-3">{p.title}</h3>
              <div className="flex items-center gap-4 text-bark/50 text-xs">
                <span className="flex items-center gap-1"><Calendar size={12} /> {p.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {p.read}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
