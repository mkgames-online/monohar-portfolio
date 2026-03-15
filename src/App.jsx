import profileImage from "./assets/images/monohar.png";
import HeroBackground from "./components/HeroBackground";
export default function GameDevPortfolio() {
  const navItems = ["About", "Projects", "Skills", "Contact"];

  const skills = [
    "Unity 3D",
    "Unreal Engine",
    "Multiplayer XR",
    "Game Development",
    "C++",
    "C#",
    "OpenGL",
    "Android Game Development",
    "PHP / Web Tech",
    "Curriculum Design",
  ];

  const projects = [
    {
      title: "Multiplayer XR Prototype",
      tag: "XR Systems",
      desc: "A sample immersive prototype focused on multiplayer interaction, networking logic, and scalable XR experiences.",
    },
    {
      title: "Unreal Gameplay Framework",
      tag: "Unreal Engine",
      desc: "A modular gameplay setup for interaction, mechanics, and reusable systems built for fast prototyping in Unreal.",
    },
    {
      title: "Unity Game Systems Lab",
      tag: "Unity 3D",
      desc: "A collection of gameplay systems exploring input, UI, state flow, and production-ready architecture in Unity.",
    },
    {
      title: "Android Game Publishing Case Study",
      tag: "Mobile Games",
      desc: "A showcase inspired by independently published Android titles, covering development, launch, user growth, and iteration.",
    },
    {
      title: "Academic Game Dev Curriculum",
      tag: "Teaching + Industry",
      desc: "A structured teaching portfolio highlighting courses, mentorship, and project-based learning across game development programs.",
    },
    {
      title: "Interactive 3D Learning Demo",
      tag: "Real-Time 3D",
      desc: "A sample demonstrator blending real-time visuals, interaction, and learner-focused design for immersive education.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07111a] text-white overflow-x-hidden scroll-smooth relative">
    <HeroBackground />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(0,255,200,0.16),transparent_22%),radial-gradient(circle_at_80%_45%,rgba(0,225,255,0.18),transparent_18%),linear-gradient(90deg,#07111a,#081522,#0b1320)] opacity-20 pointer-events-none" />

      <div className="relative z-10">
        <header className="sticky top-0 z-30 backdrop-blur-xl bg-[#07111a]/70 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-cyan-400/15 border border-cyan-300/30 flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                <span className="text-cyan-300 text-xl">🎮</span>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold tracking-wide">Monohar Karmakar</h1>
                <p className="text-xs text-white/50">Unity & Unreal Specialist</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main>
          <section className="max-w-7xl mx-auto px-6 md:px-10 pt-10 md:pt-16 pb-20 min-h-[88vh] flex items-center">
            <div className="grid lg:grid-cols-2 gap-14 items-center w-full">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-300 text-sm shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                  <span>🚀</span>
                  <span>Professional Portfolio</span>
                </div>

                <h2 className="mt-8 text-4xl md:text-7xl font-black uppercase leading-[0.95] tracking-tight">
                  <span className="block text-white">Building The</span>
                  <span className="block bg-gradient-to-r from-emerald-300 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
                    Future Of
                  </span>
                  <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                    Multiplayer XR
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-lg text-white/70 leading-8">
                  I am <span className="font-semibold text-white">Monohar Karmakar</span>, a <span className="text-cyan-300 font-medium">Unity & Unreal Specialist</span>{" "}
                  focused on game development, real-time systems, immersive learning, and interactive
                  experiences. I build gameplay foundations, teach industry-aligned workflows, and explore
                  scalable multiplayer XR experiences.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="rounded-2xl border border-cyan-400/50 px-7 py-4 text-cyan-300 font-semibold hover:bg-cyan-400/10 transition-all shadow-[0_0_25px_rgba(34,211,238,0.12)]"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="rounded-2xl bg-cyan-400 text-slate-950 px-7 py-4 font-semibold hover:scale-[1.02] transition-transform"
                  >
                    Get In Touch
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">Unity 3D</span>
                  <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">Unreal Engine</span>
                  <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">Game Development</span>
                  <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">Multiplayer XR</span>
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div className="absolute h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="relative rounded-[2rem] border border-cyan-300/20 bg-white/5 backdrop-blur-md p-6 shadow-[0_0_50px_rgba(34,211,238,0.12)]">
                  <div className="absolute -top-4 right-6 rounded-xl bg-cyan-400/10 border border-cyan-400/30 px-4 py-2 text-cyan-300 text-sm">
                    Unity + Unreal
                  </div>
                  <div className="h-[340px] w-[340px] md:h-[420px] md:w-[420px] rounded-full border-4 border-cyan-400/70 p-2 shadow-[0_0_45px_rgba(34,211,238,0.35)] overflow-hidden">
                    <img
                      src={profileImage}
                      alt="Monohar Karmakar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute bottom-0.6 right-0.5 rounded-2xl border border-cyan-300/30 bg-cyan-400/10 px-6 py-3 text-cyan-200 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                    Multiplayer XR
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="max-w-7xl mx-auto px-6 md:px-10 py-16">
            <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-8">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
                <p className="text-cyan-300 uppercase tracking-[0.2em] text-sm">About</p>
                <h3 className="mt-4 text-3xl font-bold">Game development, immersive learning, and real-time systems.</h3>
                <p className="mt-5 text-white/70 leading-8">
                  With experience across academia and game development, I work at the intersection of
                  interactive technology, teaching, and production-driven workflows. My background includes
                  Unity 3D, Unreal Engine, Android game development, OpenGL, web technologies, and
                  curriculum design for higher education.
                </p>
                <p className="mt-4 text-white/70 leading-8">
                  I enjoy building practical systems, mentoring learners, and shaping projects that combine
                  technical strength with player-focused design. My current direction emphasizes immersive,
                  collaborative, and future-facing multiplayer XR experiences.
                </p>
              </div>

              <div id="skills" className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
                <p className="text-cyan-300 uppercase tracking-[0.2em] text-sm">Skills</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="max-w-7xl mx-auto px-6 md:px-10 py-16">
            <p className="text-cyan-300 uppercase tracking-[0.2em] text-sm">Projects</p>
            <h3 className="mt-4 text-3xl font-bold">Featured work</h3>
            <p className="mt-4 max-w-3xl text-white/65 leading-8">
              These are starter showcase cards for your portfolio. We can next replace them with your real
              project thumbnails, engine details, videos, GitHub links, APK or build links, and detailed case studies.
            </p>

            <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 hover:border-cyan-400/40 hover:-translate-y-1 transition-all shadow-xl"
                >
                  <div className="h-40 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent border border-white/10 flex items-end p-4">
                    <span className="rounded-full bg-black/30 px-3 py-1 text-xs text-cyan-200 border border-cyan-400/20">
                      {project.tag}
                    </span>
                  </div>
                  <h4 className="mt-5 text-xl font-semibold">{project.title}</h4>
                  <p className="mt-3 text-white/65 leading-7">{project.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                <p className="text-4xl font-black text-cyan-300">10+</p>
                <p className="mt-2 text-white/70">Years across teaching, development, and technical mentoring</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                <p className="text-4xl font-black text-cyan-300">2</p>
                <p className="mt-2 text-white/70">Independently published Android games on Google Play</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                <p className="text-4xl font-black text-cyan-300">Unity + Unreal</p>
                <p className="mt-2 text-white/70">Production, teaching, prototyping, and real-time interaction workflows</p>
              </div>
            </div>
          </section>

          <section id="contact" className="max-w-7xl mx-auto px-6 md:px-10 py-16 pb-24">
            <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-cyan-300 uppercase tracking-[0.2em] text-sm">Contact</p>
                <h3 className="mt-3 text-3xl font-bold">Let’s build immersive experiences together.</h3>
                <p className="mt-3 text-white/70 max-w-2xl">
                  Placeholder social link added for now. In the next step, we can connect your actual LinkedIn,
                  resume download button, email, project media, and a polished contact section.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  <a href="https://linkedin.com/in/your-link-here" className="rounded-full border border-cyan-400/30 px-4 py-2 text-cyan-200 hover:bg-cyan-400/10 transition-colors">
                    LinkedIn Placeholder
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="mailto:monoharkarmakar.83@gmail.com" className="rounded-2xl bg-cyan-400 text-slate-950 px-7 py-4 font-semibold whitespace-nowrap">
                  Email Me
                </a>
                <a href="/mnt/data/CV_Monohar .pdf" className="rounded-2xl border border-cyan-400/50 px-7 py-4 text-cyan-300 font-semibold hover:bg-cyan-400/10 transition-all whitespace-nowrap">
                  Download Resume
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
