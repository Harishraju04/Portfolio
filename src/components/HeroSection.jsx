import { FaDownload } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center space-y-6 fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Hey, I'm <span className="text-indigo-500">Harish Raghavendra</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-300">
          A web developer passionate about crafting intuitive, responsive, and high-performance
          applications. Skilled in <span className="text-indigo-400 font-medium">React</span>, <span className="text-indigo-400 font-medium">Express</span>,
          <span className="text-indigo-400 font-medium"> MongoDB/PostgreSQL</span>, and <span className="text-indigo-400 font-medium">UI/UX design</span>.
        </p>
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition-colors text-white text-base font-medium py-3 px-6 rounded-full shadow-lg"
        >
          <FaDownload className="text-lg" />
          Download Resume
        </a>
      </div>
    </section>
  );
}
