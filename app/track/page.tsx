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
      {/* this is the page title */}
      <h1 className="text-3xl font-semibold mb-10">What are you grateful for today?</h1>

      {/* the gratitude input and save button - they are grouped visually */}
      <div className="flex flex-col items-center gap-4 max-w-xl mx-auto">
        <textarea
          value={entry} // this updates as user types
          onChange={(e) => setEntry(e.target.value)} // store the new value in state
          placeholder="Just one thing..." // UX guidance
          className="w-full h-28 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A3C9A8] resize-none bg-white"
        />
        <button
          onClick={handleSubmit} // save the entry when clicked
          className="px-6 py-3 bg-[#A3C9A8] text-white rounded-full hover:bg-[#B7D8B3] transition"
        >
          Save Entry
        </button>
      </div>

      {/* List of saved gratitude entries */}
      <section className="mt-15 max-w-xl mx-auto text-left">
        <h2 className="text-xl font-semibold mb-4">Past Entries</h2>
        <ul className="space-y-2">
          {/* Render each item from history array */}
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