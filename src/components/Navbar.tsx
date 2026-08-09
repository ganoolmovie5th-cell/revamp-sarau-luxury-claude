'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { BRAND, CONTACT } from '@/lib/constants'

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/services', label: 'Layanan' },
  { href: '/gallery', label: 'Galeri' },
  { href: '/packages', label: 'Paket' },
  { href: '/about', label: 'Tentang' },
  { href: '/contact', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <div className="glass-card px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-forest rounded-xl flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">S</span>
            </div>
            <span className="font-display font-bold text-bark text-lg">{BRAND.name}</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} className="text-bark/70 hover:text-forest font-medium transition-colors text-sm">{l.label}</Link>
            ))}
          </div>
          <a href={`https://wa.me/${CONTACT.phone1Wa}`} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex btn-primary text-sm">
            <Phone size={16} /> Konsultasi
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-cream-dark transition-colors cursor-pointer" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden mx-4 mt-2">
            <div className="glass-card p-6 flex flex-col gap-4">
              {navLinks.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-bark/80 hover:text-forest font-medium py-2">{l.label}</Link>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
