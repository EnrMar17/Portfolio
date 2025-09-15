import { Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const tech = [
    { name: "Java", src: "/tech/java.svg" },
    { name: "HTML", src: "/tech/html.svg" },
    { name: "PHP", src: "/tech/php.svg" },
    { name: "Javascript", src: "/tech/javascript.svg" },
    { name: "PostgreSQL", src: "/tech/postgresql.svg" },
  ];

  return (
    <>
      <header
        id="top"
        role="banner"
        className="sticky top-0 z-50 backdrop-blur bg-background/70"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-3">
          <nav
            aria-label="Principal"
            className="flex items-center justify-between gap-6"
          >
            <a href="#hero" className="font-semibold tracking-wide">
              EnrMar
            </a>
            <ul className="flex items-center gap-4 text-sm">
              <li><a href="#hero" className="hover:opacity-80">About</a></li>
              <li><a href="#projects" className="hover:opacity-80">Projects</a></li>
              <li><a href="#tech" className="hover:opacity-80">Tech</a></li>
              <li><a href="#contact" className="hover:opacity-80">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main
        id="content"
        role="main"
        className="min-h-screen flex flex-col items-center text-center bg-[#1e1e1e] text-foreground px-4"
      >
        <section id="hero" aria-labelledby="hero-title" className="py-20 max-w-3xl">
          <h1 id="hero-title" className="text-4xl md:text-5xl font-bold">
            Enrique Martinez
          </h1>
          <p className="mt-4 text-base md:text-lg">
            I am a Computer Systems Engineer Student. Right now specializing
            in Software Engineering at Instituto Tecnologico de Morelia.
          </p>
          <p className="mt-2 text-base md:text-lg">
            I have participated in one project as main developer and tester,
            and I'm currently working on a project for the Centro de Atencion Animal
            de Morelia (CAAM) as main developer.
          </p>
        </section>

        <section id="projects" aria-labelledby="projects-title" className="py-16 max-w-4xl w-full">
          <h2 id="projects-title" className="text-2xl md:text-3xl font-semibold">
            Projects
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-1 gap-6 justify-items-center">
            <article
              aria-labelledby="p1-title"
              className="rounded-xl border border-foreground/20 bg-white/5 p-6 shadow-md hover:shadow-lg transition w-full max-w-md"
            >
              <header>
                <h3 id="p1-title" className="text-lg font-semibold">Projexus</h3>
              </header>
              <p className="mt-2 text-sm">
                A web application to manage Project Fair events, from submitting a project as a User
                to evaluating projects as a judge. It was based and planned for ICTI.
              </p>
              <p className="mt-2 text-sm">Worked as main developer and tester.</p>
              <Image src="/Project.png" alt="Screenshot" width={900} height={520} className="mt-4 rounded-lg" priority
              />
            </article>
          </div>
        </section>

        <section id="tech" aria-labelledby="tech-title" className="py-16 max-w-4xl w-full">
          <h2 id="tech-title" className="text-2xl md:text-3xl font-semibold">
            Tech Stack
          </h2>
          <ul className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
            {tech.map((t) => (
              <li key={t.name} className="group flex flex-col items-center gap-2">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-xl border border-foreground/15 bg-white/5 transition group-hover:scale-110">
                  <Image src={t.src} alt={t.name} width={40} height={40} className="h-10 w-10 object-contain dark:invert opacity-90 group-hover:opacity-100 transition" loading="lazy" />
                </span>
                <span className="text-xs opacity-90">{t.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="py-16 max-w-3xl mx-auto text-center">
          <h2 id="contact-title" className="text-2xl md:text-3xl font-semibold">Contact</h2>
          <div className="mt-6 space-y-4 text-sm md:text-base">
            <p className="flex items-center justify-center gap-2">
              <Mail className="h-5 w-5 text-purple-400" />
              <a
                href="mailto:enrimar0217@gmail.com"
                className="text-purple-400 hover:text-purple-300 hover:underline underline-offset-4 transition"
              >
                enrimar0217@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Github className="h-5 w-5 text-purple-400" />
              <a
                href="https://github.com/EnrMar17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 hover:underline underline-offset-4 transition"
              >
                EnrMar17
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Linkedin className="h-5 w-5 text-purple-400" />
              <a
                href="https://www.linkedin.com/in/enrique-martinez-100895171"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 hover:underline underline-offset-4 transition"
              >
                Enrique Martinez
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer role="contentinfo" className="border-t border-foreground/20 bg-[#1e1e1e] text-right py-6">
        <p className="text-sm">© {new Date().getFullYear()} EnrMar</p>
      </footer>
    </>
  );
}
