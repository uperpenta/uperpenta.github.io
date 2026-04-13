import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import SectionNav from "./components/SectionNav";
import ParticleConstellation from "./components/ParticleConstellation";
import ContactForm from "./components/ContactForm";

const projects = [
  {
    number: "01",
    title: "SPOTLIGHT",
    description:
      "A reverse job marketplace where junior and mid-level developers in Romania build customizable portfolio pages showcasing real projects and authentic stories instead of generic CVs. Recruiters create roles and get AI-matched candidate queues ranked by relevance, paying per contact reveal while candidates use it for free. Romania first, then CEE and global — positioning as the anti-ATS platform where proof of work beats keyword matching.",
    tags: ["WIP"],
    imageSrc: "/spotlight.png",
    imageAlt: "Spotlight reverse job marketplace design mockup",
    aspect: "aspect-video",
    size: "large" as const,
    links: [
      {
        type: "figma" as const,
        href: "https://www.figma.com/design/w6O8CQUMXCorkhRECwIOfq/Recruiter-platform?m=auto&t=ADReQvhow7lue9Rv-6",
      },
    ],
  },
  {
    number: "02",
    title: "HOTEL_BOOKING_PLATFORM",
    description:
      "A production website for a Zanzibar hotel integrating with their Property Management System (PMS) for booking management and external payment gateways. Built as a paid freelance project.",
    tags: ["REACT", "TYPESCRIPT", "EXPRESS.JS", "TAILWINDCSS", "POSTGRESQL"],
    imageSrc: "/hotel-booking.png",
    imageAlt: "Hotel booking platform application screenshot",
    aspect: "aspect-square",
    size: "small" as const,
    links: [
      {
        type: "website" as const,
        href: "https://www.kanoboutiquehotel.com/",
      },
    ],
  },
  {
    number: "03",
    title: "DEVELOPER_PORTFOLIO",
    description:
      "This portfolio site — a minimal, dark-themed showcase built with Next.js and TailwindCSS featuring particle animations, responsive design, and a custom material design color system.",
    tags: ["NEXT.JS", "TYPESCRIPT", "TAILWINDCSS"],
    imageSrc: "/portfolio.png",
    imageAlt: "Developer portfolio website screenshot",
    aspect: "aspect-[4/5]",
    size: "small" as const,
    links: [
      {
        type: "github" as const,
        href: "https://github.com/uperpenta/portfolio",
      },
    ],
  },
];

const skills = {
  frontend: [
    "React Ecosystem Mastery",
    "Next.js SSR Strategies",
    "Performance Optimization & Core Web Vitals",
  ],
  backend: [
    "Node.js Typesafe Scalable Services",
    "Python Automation & Scripting",
    "RESTful API Design",
  ],
  devops: ["Kubernetes", "AWS/GCP", "Terraform", "CI/CD"],
};

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center px-6 relative"
      >
        <div className="max-w-4xl w-full text-center space-y-8">
          <h1 className="font-headline font-bold text-5xl md:text-8xl tracking-tighter text-white leading-none">
            RARES-ANDREI IALOMITEANU
          </h1>
          <div className="h-px w-24 bg-primary-container mx-auto" />
          <p className="font-body text-lg md:text-2xl text-on-surface font-light tracking-wide max-w-2xl mx-auto leading-relaxed opacity-90">
            Full Stack & DevOps Engineer based in Bucharest with a passion for
            creative technical solutions.
          </p>
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-primary-container/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        {/* Decorative sidebar */}
        <aside className="fixed right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-24 items-center">
          <div className="rotate-90 origin-center whitespace-nowrap font-label text-[10px] tracking-[0.5em] text-outline-variant uppercase">
            EST. 2026 / SYSTEM_STATUS: ACTIVE
          </div>
          <div className="w-px h-32 bg-outline-variant/30" />
          <div className="rotate-90 origin-center whitespace-nowrap font-label text-[10px] tracking-[0.5em] text-outline-variant uppercase">
            LAT: 44.4268° N / LON: 26.1025° E
          </div>
        </aside>
      </section>

      {/* ===== ABOUT / STORY SECTION ===== */}
      <section
        id="storyInfo"
        className="pt-16 md:pt-32 pb-24 md:pb-48 px-6 md:px-24 max-w-7xl mx-auto"
      >
        <div className="mb-24">
          <span className="font-label uppercase tracking-widest text-[0.75rem] text-primary-container mb-4 block">
            01 // THE ARCHITECT
          </span>
          <h2 className="text-4xl md:text-[5rem] font-headline font-bold leading-tight tracking-tighter text-on-surface mb-8">
            Building Digital
            <br />
            <span className="text-primary-container italic">
              Infrastructure.
            </span>
          </h2>
          <p className="max-w-2xl text-on-surface/80 leading-relaxed">
            As a Full Stack Software Engineer, I perceive code as the raw
            material of modern industry. I bridge the gap between high-level
            human experience and low-level computational efficiency. My approach
            is architectural: building systems that are as resilient as they are
            intuitive.
          </p>
        </div>

        {/* Skills Bento Grid */}
        <div id="techInfo" className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Frontend */}
          <div className="md:col-span-7 bg-surface-container-low p-8 md:p-16 md:border-r border-outline-variant/20">
            <span className="material-symbols-outlined text-primary-container mb-6 text-4xl block">
              layers
            </span>
            <h3 className="text-2xl font-headline font-bold uppercase tracking-tight mb-6">
              Frontend Architecture
            </h3>
            <ul className="space-y-4 font-label text-sm tracking-wide text-on-surface/70">
              {skills.frontend.map((skill) => (
                <li key={skill} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-container shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="md:col-span-5 bg-surface-container-high p-8 md:p-16">
            <span className="material-symbols-outlined text-primary-container mb-6 text-4xl block">
              terminal
            </span>
            <h3 className="text-2xl font-headline font-bold uppercase tracking-tight mb-6">
              Backend Engineering
            </h3>
            <ul className="space-y-4 font-label text-sm tracking-wide text-on-surface/70">
              {skills.backend.map((skill) => (
                <li key={skill} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-container shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* DevOps */}
          <div className="md:col-span-12 bg-surface-container p-8 md:p-16 border-t border-outline-variant/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="material-symbols-outlined text-primary-container mb-6 text-4xl block">
                  settings_ethernet
                </span>
                <h3 className="text-2xl font-headline font-bold uppercase tracking-tight mb-4">
                  DevOps & Deployment
                </h3>
                <p className="text-on-surface/60 text-sm leading-relaxed mb-6">
                  Implementing robust CI/CD pipelines and cloud-native
                  infrastructure to ensure continuous delivery and 99.9% uptime.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skills.devops.map((tool) => (
                  <div
                    key={tool}
                    className="p-4 bg-surface border border-outline-variant/10 text-center font-label text-xs tracking-widest uppercase"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Block */}
        <div className="mt-12 md:mt-32 flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          <div className="w-full md:w-1/2">
            <ParticleConstellation />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-headline font-bold uppercase mb-8 leading-tight">
              Beyond the <br />
              Syntax
            </h2>
            <div className="space-y-6 text-on-surface/70 leading-relaxed font-body">
              <p>
                AI-assisted, coffee-powered, and stubbornly adaptive. I treat
                engineering as curation — every dependency, schema, and
                deployment decision shapes how long something survives in
                production.
              </p>
              <p>
                From squeezing out a React render cycle to hardening a Node.js
                microservice, I care about the intersection where technical
                precision meets something people actually want to use.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              {["Reliability", "Precision", "Innovation"].map((word) => (
                <span
                  key={word}
                  className="text-[0.6rem] font-label uppercase tracking-[0.3em] px-4 py-2 border border-outline-variant/30 text-on-surface/40"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section
        id="worksInfo"
        className="pt-32 pb-24 md:pb-48 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <div className="mb-24">
          <h2 className="font-headline text-4xl md:text-7xl font-bold tracking-tight mb-8">
            SELECTED_WORKS
            <span className="text-primary-container">.</span>
          </h2>
          <div className="w-24 h-1 bg-primary-container mb-12" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12">
          {/* Project 01 - Large */}
          <div className="md:col-span-8">
            <ProjectCard {...projects[0]} />
          </div>

          {/* Project 02 - Small */}
          <div className="md:col-span-4 md:self-end">
            <ProjectCard {...projects[1]} />
          </div>

          {/* Project 03 - Offset */}
          <div className="md:col-start-2 md:col-span-5">
            <ProjectCard {...projects[2]} />
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section
        id="contactInfo"
        className="pt-32 pb-24 md:pb-48 px-6 md:px-12 max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="font-label text-primary-container uppercase tracking-[0.3em] text-xs mb-8 block">
              04 // INQUIRIES
            </span>
            <h2 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter mb-12 leading-[0.9]">
              LET&apos;S ARCHITECT <br /> THE{" "}
              <span className="text-primary-container">FUTURE</span>.
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-md mb-12">
              Available for high-impact collaborations, technical consulting,
              and digital architecture. Reach out to start the conversation.
            </p>

            {/* Social links - desktop only */}
            <div className="space-y-6 mt-auto hidden lg:block">
              {[
                {
                  icon: "alternate_email",
                  text: "I.RARESANDREI@YAHOO.COM",
                  href: "mailto:i.raresandrei@yahoo.com",
                },
                {
                  icon: "terminal",
                  text: "GITHUB.COM/UPERPENTA",
                  href: "https://github.com/uperpenta",
                },
                {
                  icon: "grid_view",
                  text: "LINKEDIN.COM/IN/RARES-ANDREI-IALOMITEANU",
                  href: "https://linkedin.com/in/rares-andrei-ialomiteanu-269988251/",
                },
              ].map((item) => (
                <a
                  key={item.icon}
                  href={item.href}
                  target={item.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    item.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="flex items-center gap-4 group"
                >
                  <span className="material-symbols-outlined text-primary-container">
                    {item.icon}
                  </span>
                  <span className="font-label tracking-widest text-sm hover:text-primary-container transition-colors">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-16 relative overflow-hidden">
            <ContactForm />

            {/* Decorative glow */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>

        {/* Social links - mobile only */}
        <div className="w-full mt-8 flex flex-col gap-6 lg:hidden">
          {[
            {
              icon: "alternate_email",
              text: "I.RARESANDREI@YAHOO.COM",
              href: "mailto:i.raresandrei@yahoo.com",
            },
            {
              icon: "terminal",
              text: "GITHUB",
              href: "https://github.com/uperpenta",
            },
            {
              icon: "grid_view",
              text: "LINKEDIN",
              href: "https://linkedin.com/in/rares-andrei-ialomiteanu-269988251/",
            },
          ].map((item) => (
            <a
              key={item.icon}
              href={item.href}
              target={item.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                item.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="flex items-center gap-4"
            >
              <span className="material-symbols-outlined text-primary-container">
                {item.icon}
              </span>
              <span className="font-label tracking-widest text-xs">
                {item.text}
              </span>
            </a>
          ))}
        </div>
      </section>

      <SectionNav />
      <Footer />
    </>
  );
}
