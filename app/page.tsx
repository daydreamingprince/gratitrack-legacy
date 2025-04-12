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
    </main>
  );
}