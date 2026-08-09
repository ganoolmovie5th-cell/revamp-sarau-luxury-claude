'use client'

import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export default function CtaSection() {
  return (
    <section className="py-24 bg-forest relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-light/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="container-wide relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            Siap Wujudkan Event Impian Tim Anda?
          </h2>
          <p className="text-white/70 text-lg mt-6 max-w-xl mx-auto">
            Konsultasi gratis dengan tim kami untuk merencanakan event terbaik.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href={`https://wa.me/${CONTACT.phone1Wa}?text=Halo%20Sarau%20Luxury%2C%20saya%20tertarik%20konsultasi%20event%20perusahaan.%20Bisa%20dibantu%3F`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-forest font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Phone size={18} /> Hubungi via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
