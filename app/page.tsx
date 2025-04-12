export default function home() {
  return (
    // this wraps the whole page, it sets the soft beige background and base text color
    // the min-h-screen className makes sure that it fills the screen vertically
    // header: this is the top section of the page, with the centered text
    // h1: this is our main brand name, bold and large
    // p: the subtitle, soft gray, with small margin-top

    <main className="min-h-screen bg-[#F9F9F6] text-[#333] p-8">
      <header className="text-center py-16">
        <h1 className="text-4xl font-bold">🌿 Gratitrack</h1>
        <p className="text-lg text-[#777] mt-2">"Gratitude, One Day at a Time</p>
      </header>

      {/* This time I learned that using ctrl + / automatically makes a comment for me (this is awesome) */}
      {/* Hero Section */}
      <section className="text-center py-20">
        <h2 className="text-2xl md:text-3xl font-medium text-[#333]">
          "One line a day. One moment of peace."
        </h2>
        <button className="mt-8 px-6 py-3 rounded-full bg-[#A3C9A8] hover:bg-[#B7D8B3] text-white text-lg transition">
          Start Tracking →
        </button>
      </section>
      {/* 
      section: semantic block to group the hero section
      text-center py-20: centered text with generous spacing
      h2: subheading with peaceful message
      button: CTA with rounded corners, soothing colors, and hover effect.
      */}

      {/* What it is Section */}
      <section className="text-center py-16 space-y-4 px-4">
        <h3 className="text-2xl font-semibold mb-6">What It Is</h3>
        <p className="text-xl">🧘 A clutter-free space to log just one thing you’re grateful for.</p>
        <p className="text-xl">🌀 Calm interface. No social feed. Just you and the present.</p>
      </section>
      {/* 
      text-center: aligns text to the center
      py-16: Padding top and bottom for breathing space
      space-y-4: adds vertical gap between the paragraphs
      px-4: Padding left and right for mobile responsiveness
      text-xl: makes it feel polished, but not too loud
       */}

       {/* How It Works Section */}

       <section className="text-center py-16 px-4">
        <h3 className="text-2xl font-semibold mb-6">How It Works</h3>
        <ol className="space-y-3 text-xl">
          <li>1️⃣ Write one thing you are grateful for</li>
          <li>2️⃣ Optional: Add your mood, time, tag</li>
          <li>3️⃣ Revisit your month of thankfulness</li>
        </ol>
       </section>
       {/* 
       h3: this creates a heading for screen readers and SEO
       ol: this is the Ordered list (logical steps = numbered flow)
       space-y-3: this gives us clean spacing between each list item
       text-xl: keeps things readable on all devices!
       */}

       {/* Why It Matters Section */}
       <section className="text-center py-16 px-4">
        <h3 className="text-2xl font-semibold mb-6">Why It Matters</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white rounded-xl shadow p-6">
          💡<span className="block mt-2">Built to gently shift your mindset</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
          📈<span className="block mt-2">See your gratitude trends over time</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
          🔒<span className="block mt-2">Private & secure — your moments stay yours</span>
          </div>
        </div>
       </section>
       {/* 
       grid: auto-stacks vertically on mobile, 3 columns on desktop (pretty cool ey?)
       rounded-xl shadow p-6: This adds a modern card look with padding and shadow
       bg-white: gives the cards contrast over the beige background color we chose
       */}
    </main>
  );
}