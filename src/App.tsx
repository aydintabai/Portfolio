import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 px-4 space-y-20">
        <section id="home" className="text-center text-4xl font-bold">Welcome to my Portfolio</section>
        <section id="about" className="text-lg max-w-2xl mx-auto">About Me: I'm Aydin, a developer...</section>
        <section id="experience" className="text-lg max-w-2xl mx-auto">Experience goes here</section>
        <section id="projects" className="text-lg max-w-2xl mx-auto">Projects will be listed here</section>
      </main>
    </>
  )
}

export default App
