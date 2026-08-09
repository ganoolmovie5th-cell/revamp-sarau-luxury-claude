import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Youtube } from 'lucide-react'
import { BRAND, CONTACT, SOCIAL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-bark text-white/80">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-forest rounded-xl flex items-center justify-center">
                <span className="text-white font-display font-bold">S</span>
              </div>
              <span className="font-display font-bold text-white text-lg">{BRAND.name}</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">Event organizer profesional untuk outing, outbound, team building, dan company gathering sejak 2018.</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-4">Layanan</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li><Link href="/services#gathering" className="hover:text-forest-muted transition-colors">Company Gathering</Link></li>
              <li><Link href="/services#outbound" className="hover:text-forest-muted transition-colors">Outbound Training</Link></li>
              <li><Link href="/services#teambuilding" className="hover:text-forest-muted transition-colors">Team Building</Link></li>
              <li><Link href="/services#outing" className="hover:text-forest-muted transition-colors">Outing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-4">Menu</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li><Link href="/about" className="hover:text-forest-muted transition-colors">Tentang Kami</Link></li>
              <li><Link href="/gallery" className="hover:text-forest-muted transition-colors">Galeri</Link></li>
              <li><Link href="/faq" className="hover:text-forest-muted transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-forest-muted transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-4">Kontak</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li className="flex items-start gap-2"><MapPin size={14} className="text-forest-muted mt-0.5 shrink-0" />{CONTACT.address}</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-forest-muted shrink-0" />{CONTACT.phone1}</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-forest-muted shrink-0" />{CONTACT.email}</li>
              <li className="flex items-center gap-2"><Clock size={14} className="text-forest-muted shrink-0" />{CONTACT.hours}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} {BRAND.name}. Trusted by 100+ companies.
        </div>
      </div>
    </footer>
  )
}
