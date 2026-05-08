"use client";

import { useState } from "react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode
    ? "bg-gray-950 text-gray-100"
    : "bg-gradient-to-b from-gray-50 to-white text-gray-900";

  const card = darkMode
    ? "bg-gray-900 border-gray-800"
    : "bg-white border-gray-200";

  const muted = darkMode ? "text-gray-400" : "text-gray-600";

  return (
    <div className={`min-h-screen antialiased transition-colors duration-300 ${theme}`}>      

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-950/70 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-semibold tracking-tight">Muntasir Rahman</div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#about" className="hover:opacity-70">About</a>
              <a href="#skills" className="hover:opacity-70">Skills</a>
              <a href="#experience" className="hover:opacity-70">Experience</a>
              <a href="#projects" className="hover:opacity-70">Projects</a>
              <a href="#publications" className="hover:opacity-70">Publications</a>
              <a href="#contact" className="hover:opacity-70">Contact</a>
            </nav>

            {/* DARK MODE TOGGLE */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 text-xs rounded-full border border-gray-300 dark:border-gray-700"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 py-28 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Mohammad Muntasir Rahman, Ph.D.
        </h1>
        <p className={`text-xl md:text-2xl mt-4 ${muted}`}> 
          AI / ML Researcher · Computer Vision · Contactless Cardiovascular Monitoring
        </p>

        <p className="mt-6 max-w-3xl mx-auto leading-relaxed">
          I design and deploy machine learning systems for healthcare, specializing in
          computer vision, deep learning, and physiological signal processing (SCG, rPPG, ECG).
          My focus is building real-world AI systems for contactless cardiovascular monitoring.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a href="#projects" className="px-6 py-2 rounded-full bg-black text-white text-sm hover:opacity-90">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-2 rounded-full border text-sm">
            Contact Me
          </a>
          <a href="#" className="px-6 py-2 rounded-full border text-sm">
            Download CV
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="max-w-4xl">
          Postdoctoral Researcher at Lehigh University working on AI for multimodal
          cardiovascular sensing using computer vision and deep learning.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Technical Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["Python","PyTorch","TensorFlow","OpenCV","Deep Learning","Computer Vision","Signal Processing","ECG","PPG","SCG","Docker","Linux"].map((s,i)=> (
            <span key={i} className={`px-3 py-1 rounded-full border text-sm ${card}`}>{s}</span>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>

        <div className="space-y-6">
          <div className={`border rounded-xl p-6 shadow-sm ${card}`}> 
            <p className="font-semibold">Postdoctoral Researcher — Lehigh University</p>
            <p className={muted}>2024 – Present</p>
            <p className="mt-2">
              Developed ML systems for contactless cardiovascular monitoring using video-based SCG and rPPG.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Selected ML Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {["VisionSCG","rPPG Spatial Modeling","Multimodal Fusion","Neonatal SCG"].map((p,i)=> (
            <div key={i} className={`border rounded-xl p-6 shadow-sm hover:shadow-md transition ${card}`}> 
              <h3 className="font-semibold">{p}</h3>
              <p className={`text-sm mt-2 ${muted}`}>ML system for physiological signal analysis</p>
            </div>
          ))}
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section id="publications" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Publications</h2>

        <div className={`border rounded-xl p-6 shadow-sm ${card}`}> 
          <p className="font-semibold">Contactless Multichannel Seismocardiography from Video</p>
          <p className={muted}>npj Cardiovascular Health (Nature), 2025</p>
          <a className="text-blue-500 text-sm" href="https://doi.org/10.1038/s44325-024-00034-6">DOI</a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p>Email: shohan6@yahoo.com</p>
        <p className="text-gray-700">LinkedIn · GitHub · Google Scholar</p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm opacity-60">
        © {new Date().getFullYear()} Muntasir Rahman
      </footer>

    </div>
  );
}
