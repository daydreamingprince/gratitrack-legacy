'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  // Show button after scrolling 300 pixels
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])
  
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }

  // Button styling + fade in effect
  return (
    <button
      onClick={ScrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#A3C9A8] hover:bg-[#B7D8B3] transition-opacity shadow-md flex items-center justify-center ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <img
        src="/icons/scroll-up.png"
        alt="Scroll to top"
        className="w-full h-full object-contain"
      />
    </button>
  )
}