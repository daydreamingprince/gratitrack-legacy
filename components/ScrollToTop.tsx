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
      className={`fixed bottom-6 right-6 z-50 rounded-full bg-[#A3C9A8] text-white p-3 text-xl shadow-md transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      ⬆️
    </button>
  )
}