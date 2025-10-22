"use client";

import React, { useState, useEffect, useRef } from "react";
import { ParticlesComponent } from "./particle";
import { IconCloudComponent } from "./iconCloud";
import { MarqueeComponent } from "./marquee";
import {
  Twitter,
  Github,
  Mail,
  Code,
  BarChart,
  HardHat,
  Facebook,
  Instagram,
} from "lucide-react";

const SECTIONS = [
  { id: "home", label: "Home", icon: <Code className="w-5 h-5" /> },
  { id: "about", label: "About Me", icon: <HardHat className="w-5 h-5" /> },
  { id: "projects", label: "Projects", icon: <BarChart className="w-5 h-5" /> },
  { id: "expertise", label: "Expertise", icon: <Code className="w-5 h-5" /> },
  { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Intersection Observer for scroll tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
        sectionRefs.current[section.id] = element;
      }
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scrolling function
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = sectionRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Card component
  const Card = ({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div
      className={`bg-white/5 backdrop-blur-md rounded-2xl p-6 ring-1 ring-white/10 shadow-2xl transition duration-500 hover:ring-cyan-500/50 hover:shadow-cyan-900/40 ${className}`}
    >
      {children}
    </div>
  );

 
  return (
    <div className="min-h-screen relative font-sans text-white">
      {/* Background covering entire page */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-slate-950"></div>
        <ParticlesComponent />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-gray/50 to-slate-950 opacity-90"></div>
      </div>

      {/* Floating Navigation (Left Side) */}
      <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-3 p-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-2xl ring-1 ring-white/10">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative flex items-center group transition-all duration-300 ${
                activeSection === section.id
                  ? "text-cyan-100"
                  : "text-white/70 hover:text-white"
              }`}
              title={section.label}
            >
              {/* Dot indicator */}
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-cyan-400 ring-2 ring-cyan-400/50 scale-125"
                    : "bg-white/30 group-hover:bg-white/60"
                }`}
              ></div>
              {/* Label that slides out */}
              <span
                className={`absolute left-5 whitespace-nowrap text-sm font-medium transition-all duration-300 py-1 px-3 rounded-full bg-cyan-600/90 shadow-lg ${
                  activeSection === section.id
                    ? "opacity-100 translate-x-3"
                    : "opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-1"
                }`}
              >
                {section.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:pl-32">
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col items-start justify-center pt-20 pb-10"
          style={{ scrollMarginTop: "50px" }}
        >
          <div className="max-w-5xl">
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Teofredo Gamale Jr
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl font-light text-white/70 mb-6">
              Full-Stack Web Developer. I build useful and easy-to-use web
              applications.
            </p>
            <p className="text-lg text-white/80 mb-10">
              I create modern web applications that focus on simplicity and good
              user experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white border border-cyan-400/30 hover:bg-white/20 transition duration-300 font-semibold shadow-lg"
              >
                View Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition duration-300"
              >
                Let&apos;s Talk
              </button>
            </div>
            <div className="mt-12 flex space-x-6">
              <a
                href="#"
                className="text-white/60 hover:text-cyan-400 transition"
                title="GitHub"
              >
                <Mail size={24} />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-cyan-400 transition"
                title="LinkedIn"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-cyan-400 transition"
                title="Twitter"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section
          id="about"
          className="min-h-screen flex items-center py-32"
          style={{ scrollMarginTop: "50px" }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                I’m a full-stack web developer who started as a student curious
                about how coding works. Over time, I discovered my passion for
                building web applications with <strong>Vue.js</strong> and{" "}
                <strong>Laravel</strong>.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                I value writing clean and organized code, and I’m always eager
                to keep improving my skills. Outside of work, I enjoy learning
                from others, sharing what I know, and exploring new ideas in web
                development
              </p>
              <div className="flex space-x-6 mt-8">
                <Card className="text-center p-4">
                  <div className="text-3xl font-bold text-cyan-400">5+</div>
                  <div className="text-white/60 text-sm">Current Projects</div>
                </Card>
                <Card className="text-center p-4">
                  <div className="text-3xl font-bold text-cyan-400">1+</div>
                  <div className="text-white/60 text-sm">Years Experience</div>
                </Card>
                <Card className="text-center p-4">
                  <div className="text-3xl font-bold text-cyan-400">TDD</div>
                  <div className="text-white/60 text-sm">Methodology</div>
                </Card>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <div className="text-3xl mb-3 text-yellow-400">💡</div>
                <h3 className="text-white font-semibold mb-2">
                  Web Application Development
                </h3>
                <p className="text-white/70 text-sm">
                  I build practical and responsive web applications using
                  Laravel and Vue.js, focusing on clean code and functionality.
                </p>
              </Card>
              <Card>
                <div className="text-3xl mb-3 text-red-400">🎨</div>
                <h3 className="text-white font-semibold mb-2">
                  Front-End Design
                </h3>
                <p className="text-white/70 text-sm">
                  I enjoy creating simple, user-friendly interfaces using
                  Tailwind CSS that make web experiences smooth and easy to use.
                </p>
              </Card>
              <Card>
                <div className="text-3xl mb-3 text-green-400">🧠</div>
                <h3 className="text-white font-semibold mb-2">
                  Continuous Learning
                </h3>
                <p className="text-white/70 text-sm">
                  I&apos;m constantly learning new tools and techniques to
                  improve as a developer — exploring better ways to write,
                  structure, and understand code.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen flex flex-col justify-center py-32"
          style={{ scrollMarginTop: "50px" }}
        >
          <div className="w-full">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Featured Work
            </h2>
            <MarqueeComponent />
          </div>
        </section>

        {/* Expertise Section */}
        <section
          id="expertise"
          className="min-h-screen flex flex-col justify-center py-32"
          style={{ scrollMarginTop: "50px" }}
        >
          <div className="w-full text-center">
            <h2 className="text-4xl font-bold text-white mb-12">
              Technical Expertise
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto mb-16">
              My core toolkit includes modern frameworks and robust
              infrastructure technologies, visualized below:
            </p>
            <div className="max-w-5xl mx-auto h-96">
              <IconCloudComponent />
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-16">
              <Card>
                <div className="text-cyan-400 text-2xl font-semibold mb-2">
                  Frontend
                </div>
                <p className="text-white/70 text-sm">
                  HTML, CSS, JavaScript, TypeScript, Vue.js, React, Tailwind CSS
                </p>
              </Card>

              <Card>
                <div className="text-blue-400 text-2xl font-semibold mb-2">
                  Backend
                </div>
                <p className="text-white/70 text-sm">
                  PHP, Laravel, Node.js, RESTful APIs
                </p>
              </Card>

              <Card>
                <div className="text-purple-400 text-2xl font-semibold mb-2">
                  Database
                </div>
                <p className="text-white/70 text-sm">MySQL, MariaDB</p>
              </Card>

              <Card>
                <div className="text-red-400 text-2xl font-semibold mb-2">
                  Tools & Environment
                </div>
                <p className="text-white/70 text-sm">
                  Git, GitHub, Laragon, VS Code
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center py-32"
          style={{ scrollMarginTop: "50px" }}
        >
          <div className="w-full max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <Card>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Let&apos;s build something great.
                  </h3>
                  <p className="text-white/80 mb-6">
                    I&apos;m currently open for consulting work, new full-time
                    roles, and collaborative open-source projects. Feel free to
                    reach out via the form or through my contact details below.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-white/80">
                      <Mail className="w-6 h-6 text-cyan-400" />
                      <span className="hover:text-cyan-400 transition">
                        teofredogamale@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-white/80">
                      <Facebook className="w-6 h-6 text-cyan-400" />
                      <span className="hover:text-cyan-400 transition">
                        Teofredo M. Gamale
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-white/80">
                      <Github className="w-6 h-6 text-cyan-400" />
                      <span className="hover:text-cyan-400 transition">
                        gamaleCoding
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
              <Card className="p-8">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-white text-sm mb-2 block font-medium"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-white text-sm mb-2 block font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-white text-sm mb-2 block font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-600 transition duration-300 shadow-lg shadow-cyan-500/30"
                  >
                    Send Message
                  </button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-white/50 border-t border-white/10 mt-10">
          <p className="text-sm">
            © {new Date().getFullYear()} Teofredo M. Gamale. Built with React
            and Tailwind CSS.
          </p>
        </footer>
      </main>

      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes rotate3D {
          from {
            transform: rotateY(0deg) rotateX(0deg);
          }
          to {
            transform: rotateY(360deg) rotateX(360deg);
          }
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-rotate3d {
          animation: rotate3D 40s linear infinite;
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .animate-twinkle {
          animation: twinkle 5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
