'use client'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export default function BookingPage() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="section-tag">Booking</span>
          <h1 className="font-display text-5xl font-bold text-bark mt-4">Konsultasi <span className="gradient-text">Gratis</span></h1>
          <p className="text-bark/60 mt-4">Hubungi kami via WhatsApp untuk diskusi kebutuhan event Anda.</p>
        </motion.div>
        <div className="glass-card p-8 text-center">
          <p className="text-bark/70 mb-6">Tim kami siap membantu merencanakan event terbaik sesuai budget dan kebutuhan perusahaan Anda.</p>
          <a href={`https://wa.me/${CONTACT.phone1Wa}?text=Halo%20Sarau%20Luxury%2C%20saya%20tertarik%20konsultasi%20event%20perusahaan.%20Bisa%20dibantu%3F`} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
            <Phone size={20} /> Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </div>
  )
}
