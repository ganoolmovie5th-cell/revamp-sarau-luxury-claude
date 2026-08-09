'use client'
import { motion } from 'framer-motion'

const clients = [
  'Bank BCA', 'Toyota', 'Kalbe Farma', 'Park Hyatt', 'Bank Mandiri',
  'Bank BNI', 'Epson', 'Astra', 'Hino Motors', 'Adaro Energy',
  'Siloam Hospitals', 'Hotel Mercure', 'Pegadaian', 'Bogasari',
  'Nippon Steel', 'Aloft Hotel', 'CIMB Niaga', 'Modena',
]

export default function ClientsPage() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="section-tag">Klien</span>
          <h1 className="font-display text-5xl font-bold text-bark mt-4">Dipercaya <span className="gradient-text">100+ Perusahaan</span></h1>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((c, i) => (
            <motion.div key={c} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="glass-card p-4 text-center">
              <span className="text-bark/70 text-sm font-medium">{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
