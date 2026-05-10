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

  const highlightAuthor = (authors: string) => {
    const myName = "M. M. Rahman";

    const parts = authors.split(myName);

    return (
      <>
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i !== parts.length - 1 && (
              <span className="underline">{myName}</span>
            )}
          </span>
        ))}
      </>
    );
  };

  return (
    <div className={`min-h-screen antialiased transition-colors duration-300 ${theme}`}>      

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-950/70 border-b border-gray-200 dark:border-gray-800">
          
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT: LOGO + SOCIAL */}
          <div className="flex items-center gap-3">

            {/* LOGO */}
            <img
              src="/mmr_profile.jpg"
              alt="MMR"
              className="w-9 h-9 rounded-full object-cover grayscale"
            />

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-2 ml-1">
              <a href="https://www.linkedin.com/in/mohammad-muntasir-rahman-a7315923/" target="_blank" className="hover:opacity-70 transition">
                <img src="/InBug-Black.png" className="w-5 h-5" alt="LinkedIn" />
              </a>

              <a href="https://github.com/shohan6" target="_blank" className="hover:opacity-70 transition">
                <img src="/github.svg" className="w-5 h-5" alt="GitHub" />
              </a>

              <a href="https://scholar.google.com/citations?user=by41XR8AAAAJ&hl=en" target="_blank" className="hover:opacity-70 transition">
                <img src="/googlescholar.svg" className="w-5 h-5" alt="Google Scholar" />
              </a>
            </div>
          </div>

          {/* RIGHT: NAV + THEME */}
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

        {[
          {
            authors: "M. M. Rahman, and A. Taebi",
            year: "2026",
            title:
              "Heart Rate Monitoring From Smartphone Neck Videos Using Remote Photoplethysmography",
            venue: "ASME Journal of Engineering and Science in Medical Diagnostics and Therapy, 9(2): 021009",
            doi: "https://doi.org/10.1115/1.4070844",
            image: "/publication/asme.png",
            video: "https://www.youtube.com/watch?v=rBc-gt3pjXM",
          },
          {
            authors: "M. M. Rahman, and A. Taebi",
            year: "2025",
            title:
              "Contactless heart rate and heart rate variability estimation from neck videos",
            venue: "47th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC), Copenhagen, Denmark",
            doi: "https://doi.org/10.1109/EMBC58623.2025.11251812",
            image: "/publication/embc.gif",
          },
          {
            authors: "M. M. Rahman, B. Kakavand, W. V. Wurm, W. L. Holman, M. R. Movahed, and A. Taebi",
            year: "2025",
            title:
              "From Video to Vital Signs: A New Method for Contactless Multichannel Seismocardiography",
            venue: "npj Cardiovascular Health 2, 1",
            doi: "https://doi.org/10.1038/s44325-024-00034-6",
            image: "/publication/pub_vitalsigns.png",
            video: "https://www.youtube.com/watch?v=_Jwi2mPwkUs",
          },
          {
            authors: "M. M. Rahman, J. Cook, and A. Taebi",
            year: "2023",
            title:
              "Non-contact Heart Vibration Measurement Using Computer Vision-based Seismocardiography",
            venue: "Scientific Reports 13, 11787",
            doi: "https://doi.org/10.1038/s41598-023-38607-7",
            image: "/publication/pub_scg.png",
            video: "https://www.youtube.com/watch?v=UMmNsps9tYE",
          },
          {
            authors: "M. M. Rahman, and A. Taebi",
            year: "2023",
            title:
              "Reconstruction of 3-Axis Seismocardiogram from Right-to-left and Head-to-foot Components Using A Long Short-Term Memory Network",
            venue: "2023 IEEE 19th International Conference on Body Sensor Networks (BSN), Boston, MA",
            doi: "https://doi.org/10.1109/BSN58485.2023.10331617",
            image: "/publication/recontructionSCG.gif",
          },
          {
            authors: "Y. Tan, M. M. Rahman, Y. Yan, J. Xue, L. Shao, and K. Lu",
            year: "2021",
            title:
              "Fine-Grained Categorization From RGB-D Images",
            venue: "IEEE Transactions on Multimedia, vol. 24, pp. 917-928",
            doi: "https://doi.org/10.1109/TMM.2021.3061284",
            image: "/publication/finegrainTMM.gif",
          },
          {
            authors: "M. M. Rahman, Y. Tan, J. Xue, L. Shao, and K. Lu",
            year: "2019",
            title:
              "3D object detection: Learning 3D bounding boxes from scaled down 2D bounding boxes in RGB-D images",
            venue: "Information Sciences, vol. 476, pp. 147-158",
            doi: "https://doi.org/10.1016/j.ins.2018.09.040",
            image: "/publication/pub_3d_detection.jpg",
          },
          {
            authors: "M. M. Rahman, Y. Tan, J. Xue, L. Shao, and K. Lu",
            year: "2017",
            title:
              "RGB-D Object Recognition with Multimodal Deep Convolutional Neural Networks",
            venue: "IEEE International Conference on Multimedia and Expo (ICME), Hong Kong, China",
            doi: "https://doi.org/10.1109/ICME.2017.8019538",
            image: "/publication/pub_rgbd.gif",
          },
        ].map((p, i) => (
          <div
            key={i}
            className={`border rounded-xl p-6 shadow-sm ${card} mb-6`}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">

              {/* LEFT IMAGE */}
              <div className="flex-shrink-0">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full md:w-44 h-28 object-cover rounded-lg shadow-md shadow-black/10 dark:shadow-black/40 hover:shadow-xl transition"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex-1 space-y-1">

                {/* ROW 1: AUTHORS + YEAR */}
                <p className="text-sm font-medium">
                  {highlightAuthor(`${p.authors}, (${p.year})`)}
                </p>

                {/* ROW 2: TITLE */}
                <h3 className="text-base font-semibold leading-snug">
                  {p.title}
                </h3>

                {/* ROW 3: JOURNAL (ITALIC) */}
                <p className={`text-sm ${muted}`}>
                  <span className="italic">{p.venue}</span>
                </p>

                {/* LINKS */}
                <div className="flex gap-4 mt-2">
                  <a
                    href={p.doi}
                    target="_blank"
                    className="flex items-center text-blue-500 text-sm hover:underline"
                  >
                    <img
                      src="/weblink.svg"
                      alt="Publication Link"
                      className="w-4 h-4"
                    />
                    View Paper
                  </a>

                  {p.video && (
                    <a
                      href={p.video}
                      target="_blank"
                      className="text-red-500 text-sm hover:underline"
                    >
                      ▶ Video
                    </a>
                  )}
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Let's Work Together</h2>

        <p className="text-sm mb-8">
          Open to AI/ML Engineer, Research Scientist, and Applied Scientist roles
          in Computer Vision and Healthcare AI.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 items-center">

          {/* EMAIL */}
          <a
            href="mailto:shohan6@yahoo.com"
            className={`flex items-center gap-2 px-5 py-2 rounded-full border hover:scale-105 transition ${card}`}
          >
            <img src="/email.svg" className="w-5 h-5" alt="Email" />
            Email
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/mohammad-muntasir-rahman-a7315923/"
            target="_blank"
            className={`flex items-center gap-2 px-5 py-2 rounded-full border hover:scale-105 transition ${card}`}
          >
            <img src="/InBug-Black.png" className="w-5 h-5" alt="LinkedIn" />
            LinkedIn
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/shohan6"
            target="_blank"
            className={`flex items-center gap-2 px-5 py-2 rounded-full border hover:scale-105 transition ${card}`}
          >
            <img src="/github.svg" className="w-5 h-5" alt="GitHub" />
            GitHub
          </a>

          {/* GOOGLE SCHOLAR */}
          <a
            href="https://scholar.google.com/citations?user=by41XR8AAAAJ&hl=en"
            target="_blank"
            className={`flex items-center gap-2 px-5 py-2 rounded-full border hover:scale-105 transition ${card}`}
          >
            <img src="/googlescholar.svg" className="w-5 h-5" alt="Google Scholar" />
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
