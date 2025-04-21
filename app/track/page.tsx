'use client'

import { useEffect, useState } from "react"

export default function TrackPage() {
  const [entry, setEntry] = useState('')
  const [history, setHistory] = useState<string[]>([])

  // Load past entries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('gratitrack-entries')
    if (saved) {
      setHistory(JSON.parse(saved))
    }
  }, [])

  // Save a new gratitude entry
  const handleSubmit = () => {
    if (!entry.trim()) return
    const updated = [entry, ...history]
    setHistory(updated)
    localStorage.setItem('gratitrack-entries', JSON.stringify(updated))
    setEntry('')
  }

  return (
    <main className="min-h-screen px-4 py-20 text-center bg-[#F9F9F6] text-[#333] dark:bg-[#1E1E1A] dark:text-[#F5F5F2]">
      {/* Page title */}
      <h1 className="text-3xl font-semibold mb-10 dark:text-[#F5F5F2]">
        What are you grateful for today?
      </h1>

      {/* Gratitude input and save button group */}
      <div className="flex flex-col items-center gap-4 max-w-xl mx-auto">
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Just one thing..."
          className="w-full h-28 p-4 border border-gray-300 rounded-lg shadow-sm resize-none
                     focus:outline-none focus:ring-2 focus:ring-[#A3C9A8]
                     bg-white text-[#333] placeholder-gray-400
                     dark:bg-[#2A2A25] dark:text-[#F5F5F2] dark:placeholder-[#777] dark:border-[#444]"
        />
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-[#A3C9A8] text-white rounded-full hover:bg-[#B7D8B3] transition"
        >
          Save Entry
        </button>
      </div>

      {/* Past gratitude entries list */}
      <section className="mt-15 max-w-xl mx-auto text-left">
        <h2 className="text-xl font-semibold mb-4 dark:text-[#F5F5F2]">
          Past Entries
        </h2>
        <ul className="space-y-2">
          {history.map((item, idx) => (
            <li
              key={idx}
              className="bg-white p-4 rounded-md shadow text-gray-700
                         dark:bg-[#2A2A25] dark:text-gray-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}