'use client'

import { useEffect, useState } from "react"

export default function TrackPage() {
  const [entry, setEntry] = useState('')
  const [history, setHistory] = useState<string[]>([])

  // we'll load past entries from localStorage
  useEffect(()=> {
    const saved = localStorage.getItem('gratitrack-entries')
    if (saved) {
      setHistory(JSON.parse(saved))
    }
  }, [])

  // Here we save new entry
  const handleSubmit = () => {
    if (!entry.trim()) return
    const updated = [entry, ...history]
    setHistory(updated)
    localStorage.setItem('gratitrack-entries', JSON.stringify(updated))
    setEntry('')
  }

  return (
    <main className="min-h-screen bg-[#F9F9F6] px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold mb-6">
        "What are you grateful for today?"
      </h1>
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Just one thing..." // I think it would be fun if I can put like a subtle text that say's 'Or More' after the just one thing
        className="w-full max-w-xl mx-auto h-28 p-4 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3C9A8] resize-none"
      />
      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-3 bg-[#A3C9A8] text-white rounded-full hover:bg-[#B7D8B3] transition"
      >
        Save Entry
      </button>

      {/* Gratitude History */}
      <section className="mt-12 max-w-xl mx-auto text-left">
        <h2 className="text-xl font-semibold mb-4">Past entries</h2>
        <ul className="space-y-2">
          {history.map((item, idx) => (
            <li key={idx} className="bg-white p-4 rounded-md shadow text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}