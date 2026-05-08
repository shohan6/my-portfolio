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
          <div className="font-semibold tracking-tight">Mohammad Muntasir Rahman</div>

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
        {/* PROFILE IMAGE */}
        <div className="flex justify-center mb-6">
          <img
            src="/mmr_profile.jpg"
            alt="Mohammad Muntasir Rahman"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-gray-300 dark:border-gray-700 shadow-md"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Mohammad Muntasir Rahman, Ph.D.
        </h1>
        <p className={`text-xl md:text-2xl mt-4 ${muted}`}> 
          AI / ML Researcher · Computer Vision · Contactless Cardiovascular Monitoring
        </p>

        <p className="mt-6 max-w-3xl mx-auto leading-relaxed">
          AI/ML researcher with 10+ years of experience developing computer vision, multimodal deep learning, and AI systems.
          Specialized in contactless physiological monitoring (SCG, rPPG, ECG, GCG), 3D perception, and video-based cardiovascular analytics using
          deep learning and physiological signal processing.
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

      {/* METRICS */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-4 text-center">
        {[
          ["Journal Articles", "21+"],
          ["Conference Papers", "11+"],
          ["Patent", "1"],
          ["Years Experience", "10+"]
        ].map((m, i) => (
          <div key={i} className={`border rounded-xl p-6 ${card}`}>
            <p className="text-2xl font-bold">{m[1]}</p>
            <p className={muted}>{m[0]}</p>
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="leading-relaxed max-w-5xl">
          Postdoctoral Researcher at Lehigh University working on AI for multimodal
          cardiovascular sensing using computer vision and deep learning. I design and deploy machine learning systems for healthcare, specializing in
          computer vision, deep learning, and physiological signal processing (SCG, rPPG, ECG). My focus is building real-world AI systems for contactless cardiovascular monitoring.
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
          {/* LEHIGH */}
          <div className={`border rounded-xl p-6 shadow-sm ${card}`}> 
            <p className="font-semibold">Postdoctoral Researcher - Lehigh University, PA</p>
            <p className={muted}>Aug 2025 - Present</p>
            <p className="mt-2">
              Developed ML systems for contactless cardiovascular monitoring using video-based SCG and rPPG.
            </p>
          </div>
          {/* MISSISSIPPI STATE */}
          <div className={`border rounded-xl p-6 shadow-sm ${card}`}> 
            <p className="font-semibold">Postdoctoral Associate - Mississippi State University, MS</p>
            <p className={muted}>Jul 2022 - Aug 2025</p>
            <p className="mt-2">
              Developed computer vision-based seismocardiography (SCG) systems for extracting cardiac vibrations from ordinary chest videos.
            </p>
          </div>
          {/* Islamic University */}
          <div className={`border rounded-xl p-6 shadow-sm ${card}`}> 
            <p className="font-semibold">Faculty in the Department of Computer Science & Engineering - Islamic University, Kushtia, Bangladesh</p>
            <p className={muted}>Jul 2019 - Jun 2022 | Apr 2010 - Aug 2015</p>
            <p className="mt-2">
              Taught Machine Learning, Computer Vision, AI, and Image Processing courses. Supervised graduate and undergraduate research projects in applied machine learning and computer vision.
            </p>
          </div>
          {/* CAS-TWAS Research Fellow */}
          <div className={`border rounded-xl p-6 shadow-sm ${card}`}> 
            <p className="font-semibold">CAS-TWAS Research Fellow - Univerity of Chinese Academy of Sciences, Beijing, China</p>
            <p className={muted}>Sep 2015 - Jul 2019</p>
            <p className="mt-2">
              Developed multi-modal deep learning framework for 3D object detection using RGB-D images.
            </p>
          </div>
        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Selected ML Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className={`border rounded-xl p-6 shadow-sm hover:shadow-md transition ${card}`}>
            <h3 className="font-semibold">VisionSCG</h3>
            <p className={`text-sm mt-2 ${muted}`}>
              Computer vision-based framework for extracting seismocardiographic signals from standard chest videos.
            </p>
          </div>

          <div className={`border rounded-xl p-6 shadow-sm hover:shadow-md transition ${card}`}>
            <h3 className="font-semibold">rPPG Spatial Modeling</h3>
            <p className={`text-sm mt-2 ${muted}`}>
              Spatial grid-based remote photoplethysmography system for robust heart-rate estimation under motion and illumination variation.
            </p>
          </div>

          <div className={`border rounded-xl p-6 shadow-sm hover:shadow-md transition ${card}`}>
            <h3 className="font-semibold">Multimodal Fusion AI</h3>
            <p className={`text-sm mt-2 ${muted}`}>
              Multimodal deep learning framework for 3D object detection.
            </p>
          </div>

          <div className={`border rounded-xl p-6 shadow-sm hover:shadow-md transition ${card}`}>
            <h3 className="font-semibold">Neonatal SCG Analysis</h3>
            <p className={`text-sm mt-2 ${muted}`}>
              Signal processing pipeline for analyzing neonatal cardiac vibration patterns to extract early-stage physiological and hemodynamic insights.
            </p>
          </div>

        </div>
      </section>

      {/* PUBLICATIONS */}
      <section id="publications" className="px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Selected Publications</h2>

      <div className="space-y-6">

        <div className={`border rounded-xl p-6 shadow-sm ${card}`}>
          <h3 className="font-semibold">
            From Video to Vital Signs: A New Method for Contactless Multichannel Seismocardiography
          </h3>

          <p className={`mt-2 ${muted}`}>
            Nature npj Cardiovascular Health · 2025
          </p>

          <a
            href="https://doi.org/10.1038/s44325-024-00034-6"
            target="_blank"
            className="text-blue-500 mt-3 inline-block"
          >
            DOI: 10.1038/s44325-024-00034-6
          </a>
        </div>

        <div className={`border rounded-xl p-6 shadow-sm ${card}`}>
          <h3 className="font-semibold">
            Non-contact Heart Vibration Measurement Using Computer Vision-based Seismocardiography
          </h3>

          <p className={`mt-2 ${muted}`}>
            Scientific Reports · 2023
          </p>

          <a
            href="https://doi.org/10.1038/s41598-023-38607-7"
            target="_blank"
            className="text-blue-500 mt-3 inline-block"
          >
            DOI: 10.1038/s41598-023-38607-7
          </a>
        </div>

        <div className={`border rounded-xl p-6 shadow-sm ${card}`}>
          <h3 className="font-semibold">
            3D object detection: Learning 3D bounding boxes from scaled down 2D bounding boxes in RGB-D images
          </h3>

          <p className={`mt-2 ${muted}`}>
            Information Sciences · 2019
          </p>

          <a
            href="https://doi.org/10.1016/j.ins.2018.09.040"
            target="_blank"
            className="text-blue-500 mt-3 inline-block"
          >
            DOI: 10.1016/j.ins.2018.09.040
          </a>
        </div>

        <div className={`border rounded-xl p-6 shadow-sm ${card}`}>
          <h3 className="font-semibold">
            RGB-D Object Recognition with Multimodal Deep Convolutional Neural Networks
          </h3>

          <p className={`mt-2 ${muted}`}>
            IEEE ICME · 2017
          </p>

          <a
            href="https://doi.org/10.1109/ICME.2017.8019538"
            target="_blank"
            className="text-blue-500 mt-3 inline-block"
          >
            DOI: 10.1109/ICME.2017.8019538
          </a>
        </div>        

      </div>
    </section>

      {/* CONTACT */}
<section id="contact" className="px-6 py-24 max-w-6xl mx-auto text-center">
  <h2 className="text-3xl font-semibold mb-6">Let’s Work Together</h2>

  <p className="text-sm mb-8">
    Open to AI/ML Engineer, Research Scientist, and Applied Scientist roles in Computer Vision and Healthcare AI.
  </p>

  <div className="flex flex-col md:flex-row justify-center gap-4 items-center">

    {/* EMAIL */}
    <a
      href="mailto:shohan6@yahoo.com"
      className={`px-5 py-2 rounded-full border ${card}`}
    >
      Email
    </a>

    {/* LINKEDIN */}
    <a
      href="https://www.linkedin.com/in/mohammad-muntasir-rahman-a7315923/"
      target="_blank"
      className={`px-5 py-2 rounded-full border ${card}`}
    >
      LinkedIn
    </a>

    {/* GITHUB */}
    <a
      href="https://github.com/shohan6"
      target="_blank"
      className={`px-5 py-2 rounded-full border ${card}`}
    >
      GitHub
    </a>

    {/* GOOGLE SCHOLAR */}
    <a
      href="https://scholar.google.com/citations?user=by41XR8AAAAJ&hl=en"
      target="_blank"
      className={`px-5 py-2 rounded-full border ${card}`}
    >
      Google Scholar
    </a>

  </div>
</section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm opacity-60">
        © {new Date().getFullYear()} Mohammad Muntasir Rahman
      </footer>

    </div>
  );
}
