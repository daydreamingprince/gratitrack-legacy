import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import ScrollToTop from "@/components/ScrollToTop";

export default function home() {
  return (
    // this wraps the whole page, it sets the soft beige background and base text color
    // the min-h-screen className makes sure that it fills the screen vertically
    // header: this is the top section of the page, with the centered text
    // h1: this is our main brand name, bold and large
    // p: the subtitle, soft gray, with small margin-top

    <main className="min-h-screen bg-[#F9F9F6] text-[#333] p-8">
      <header className="text-center py-16">
        {/* 
        the 'text-4xl' is the default font size on small/mobile screens)
        the 'md:text-5xl' increases the font size to 5xl when on medium+ screens like tablets and desktops.
        'font-bold' makes the text bold, it emphasizes our brand <3
        */}
        <h1 className="text-4xl md:text-5xl font-bold">🌿 Gratitrack</h1>
        {/* 
        'text-base' would be the normal size for mobile
        'md:text-lg' sets the text size slightly larger on medium+ screens
        'text-[#777]' sets a soft gray color to the text
        'mt-2' Adds space above this paragraph
        */}
        <p className="text-base md:text-lg text-[#777] mt-2">
          "Gratitude, One Day at a Time
        </p>
      </header>

      {/* This time I learned that using ctrl + / automatically makes a comment for me (this is awesome) */}
      {/* Hero Section */}
      {/* 
        FadeInWhenVisible:
        This is a wrapper that uses Framer Motion and useInView to animate the sections when it enters the viewport. 
        we're using the 'once: true' to keep it peaceful so the section fades in once and does not repeat when the user scrolls up again and back down again if that makes sense.
      */}
      <FadeInWhenVisible>
        {/* py-20 gives a tall, breathable vertical spacing on both top and bottom */}
        {/* px-4 helps prevent the texts from touching screen edges on mobile */}
        <section className="text-center py-20 px-4">
          <h2 className="text-2xl md:text-3xl font-medium text-[#333]">
            "One line a day. One moment of peace."
          </h2>
          <button className="mt-8 px-6 py-3 rounded-full bg-[#A3C9A8] hover:bg-[#B7D8B3] text-white text-base md:text-lg transition duration-300">
            Start Tracking →
          </button>
        </section>
      </FadeInWhenVisible>
      {/* 
      section: semantic block to group the hero section
      text-center py-20: centered text with generous spacing
      h2: subheading with peaceful message
      button: CTA with rounded corners, soothing colors, and hover effect.
      */}

      {/* What it is Section */}
      {/* 
        Here we use py-20 for consistent vertical rhythm across sections.
        px-4 ensures that we have side padding for mobile responsiveness.
        Instead of space-y-4 that we used before, we now manually apply mb-4 to the first paragraph for a finer control.
      */}
      <FadeInWhenVisible>
        <section className="text-center py-20 md:py-40 px-4 bg-[#F5F5F2]">
          <h3 className="text-2xl font-semibold mb-6">What It Is</h3>
          <p className="text-xl mb-4">
            🧘 A clutter-free space to log just one thing you’re grateful for.
          </p>
          <p className="text-xl">🌀 Calm interface. No social feed. Just you and the present.</p>
        </section>
      </FadeInWhenVisible>
      

       {/* How It Works Section */}
       {/* we use visually distinct steps with clear spacing and layout, especially for our mobile users! */}
        <FadeInWhenVisible>
        <section className="text-center py-20 px-4">
          <h3 className="text-2xl font-semibold mb-6">How It Works</h3>
          <div className="space-y-6 text-left max-w-md mx-auto text-lg">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <span className="font-semibold">1️⃣ Write one thing you are grateful for</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <span className="font-semibold">2️⃣ Optional: Add your mood, time, and tag</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <span className="font-semibold">3️⃣ Revisit your month of thankfulness</span>
            </div>
          </div>
        </section>
       </FadeInWhenVisible>

       {/* Why It Matters Section */}
       <FadeInWhenVisible>
        <section className="text-center py-20 px-4">
          <h3 className="text-2xl font-semibold mb-6">Why It Matters</h3>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
       </FadeInWhenVisible>
       {/* 
       grid: auto-stacks vertically on mobile, 3 columns on desktop (pretty cool ey?)
       rounded-xl shadow p-6: This adds a modern card look with padding and shadow
       bg-white: gives the cards contrast over the beige background color we chose
       */}

        {/* 
          Why Gratitrack Section:
          A calm, but informational bridge that gives a deeper insight without breaking the minimalism vibe that I am aiming for.
          Here I opt to use a soft off-white bg to separate it visually from the other sections.
        */}
       <FadeInWhenVisible>
        <section className="text-center py-20 px-6 bg-[#F5F5F2]">
          <h3 className="text-2xl font-semibold mb-6">Why Gratitrack?</h3>
          <p className="text-lg max-w-2xl mx-auto">
            Gratitrack isn't about toxic positivity—it's about slowing down and noticing the small, meaningful things.
            This practice has been shown to reduce anxiety, improve mood, and help people live more present lives.
          </p>
          <p className="text-lg max-w-2xl mx-auto mt-6">
            Whether you write daily or reflect weekly, Gratitrack meets you where you are—quietly, gently, and without judgement.
          </p>
        </section>
       </FadeInWhenVisible>

       {/* Join Section */}
       <FadeInWhenVisible>
        <section className="text-center py-20 px-4">
          <h3 className="text-2xl font-semibold mb-6">
            🌟 Create your free Gratitrack space today
          </h3>
          <button className="px-6 py-3 rounded-full bg-[#A3C9A8] hover:bg-[#B7D8B3] text-white text-lg transition duration-300">
            Get Started →
          </button>
        </section>
       </FadeInWhenVisible>

       <ScrollToTop />
       {/* 
       text-center py-20 : this gives us the Balanced whitespace, a breathing room before the footer
       rounded-full : this allows us to have the friendly, soft visual style (let's say trust-building)
       hover:bg-[3B7D8B3] : this adds life with a hover transition
       text-white text-lg : Clean readability for the Call to Action button!
       */}
       {/* after this we'll add a /track route later to the CTA button */}

       {/* Footer Section */}
       <footer className="text-center text-sm text-[#777] py-10">
        Made with purpose. Persist with Purpose 🌱
       </footer>
    </main>
  );
}