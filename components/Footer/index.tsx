'use client'

import { Twitter, Instagram, Youtube, Github } from 'lucide-react'
import Link from 'next/link'

// const socialLinks = [
//   // { icon: Twitter, href: '', label: 'Twitter' },
//   // { icon: Instagram, href: '', label: 'Instagram' },
//   // { icon: Youtube, href: '', label: 'YouTube' },
//   // { icon: Github, href: '', label: 'GitHub' },
// ]
const Footer =() => (

<footer className="fixed bottom-0 left-0 w-full flex justify-between items-center px-8 py-4  font-plex text-[8px] tracking-[2.5px] text-[#f5f2ed]/30 uppercase">
<div className="flex justify-center items-center gap-3">
    {/* <span>Made by ...</span> */}
    
    {/* <span>&reg;</span> */}

</div>
  <span className="hidden sm:inline">SHOWCASE IMAGES — v2</span>
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
    {/* {socialLinks.map(({ icon: Icon, href, label }) => (
      <Link
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        style={{
          color: 'rgba(255, 255, 255, 0.5)',
          transition: 'all 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#fff'
          e.currentTarget.style.transform = 'scale(1.1)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'
          e.currentTarget.style.transform = 'scale(1)'
        }}
      >
        <Icon size={18} />
      </Link>
    ))} */}
  </div>
  
</footer>
)

export default Footer;