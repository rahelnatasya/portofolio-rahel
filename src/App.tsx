import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Code,
  Palette,
  Database,
  Globe,
  Moon,
  Sun,
  Download,
  ArrowDown
} from 'lucide-react';

import {projects} from './projectsData';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Frontend-leaning Web Developer";
  const [isDark, setIsDark] = useState<boolean>(() => {
  // safe read (client-only)
  try {
    return localStorage.getItem('theme') === 'dark';
  } catch {
    return false;
  }
});
  // Typing animation
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Dark mode
useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add('dark');
    try { localStorage.setItem('theme', 'dark'); } catch {}
  } else {
    document.documentElement.classList.remove('dark');
    try { localStorage.setItem('theme', 'light'); } catch {}
  }
}, [isDark]);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    {
      name: 'Frontend',
      icon: Code,
      items: [
        'HTML', 'CSS', 'JavaScript',
        'React.js', 'Next.js',
        'Flutter', 'Dart',
        'Swift', 'SwiftUI',
        'Tailwind'
      ]
    },
    {
      name: 'Backend',
      icon: Database,
      items: [
        'PHP', 'Laravel',
        'Node.js', 
        'MySQL', 'PostgreSQL',
        'C Language',
        'OOP'
      ]
    },
    {
      name: 'UI/UX Design',
      icon: Palette,
      items: [
        'Figma', 'Balsamiq',
        'Responsive Design',
        'UML', 'BPMN'
      ]
    },
    {
      name: 'Tools & Tech',
      icon: Globe,
      items: [
        'Git', 'GitHub', 'AWS',
        'CI/CD',
        'Katalon', 'Cypress',
        'Minitab',
        'Enterprise Architect', 'PowerDesigner',
        'Visual Paradigm', 'StarUML',
        'Trello'
      ]
    },
    {
      name: 'Soft Skills',
      icon: Globe, 
      items: [
        'Leadership',
        'Team Collaboration',
        'Role Coordination',
        'Communication',
        'Initiative',
        'Organizational Involvement'
      ]
    }
  ];


  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20" />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
          <motion.a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Rahel Pangaribuan
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors ${activeSection === item.toLowerCase()
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-transform"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsDark(!isDark)} className="hover:scale-110 transition-transform">
              {isDark ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:scale-110 transition-transform">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-8 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700"
          >
            <img
              src="rayell.png"
              alt="Rahel"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Rahel Pangaribuan!
            </span>
          </h1>

          <p className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mb-4 h-12">
            I'm a <span className="text-blue-600 dark:text-blue-400 font-bold">{typedText}</span>
            <span className="animate-pulse">|</span>
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            I build modern, performant websites with a strong focus on clean interfaces and clear user flows. My work combines hands-on development using 
            frameworks like Laravel, React, and Next.js with an analytical approach to defining application structure, features, and behavior.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.a
              href="/pdf/Rahel_N_Pangaribuan_Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold flex items-center gap-3 shadow-lg"
            >
              Download CV <Download size={20} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-full font-semibold hover:border-blue-600 transition-colors"
            >
              View My Work
            </motion.button>
          </div>

          <div className="flex justify-center gap-8 text-gray-600 dark:text-gray-400">
            <a href="https://github.com" target="_blank" className="hover:text-blue-600 hover:scale-125 transition-all">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-blue-600 hover:scale-125 transition-all">
              <Linkedin size={28} />
            </a>
            <a href="mailto:rahelattractive@gmail.com" className="hover:text-blue-600 hover:scale-125 transition-all">
              <Mail size={28} />
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <ArrowDown size={32} className="text-gray-400" />
        </motion.div>
      </section>

      {/* About */}
      {/* About (Upgraded) */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-white dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Profile card */}
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border border-gray-200/40 dark:border-gray-700 shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl mb-4">
                  <img src="rayell.png" alt="Rahel" className="w-full h-full object-cover" />
                </div>

                <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Rahel Pangaribuan
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Website Developer • UI/UX Enthusiast</p>

                <div className="flex gap-3 mb-5">
                  <a href="/pdf/Rahel_N_Pangaribuan_Resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:scale-105 transition-transform">
                    <Download size={16} /> Download CV
                  </a>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <Mail size={14} /> Contact
                  </button>
                </div>

                {/* Quick stats */}
                <div className="w-full grid grid-cols-3 gap-3 mt-2">
                  <div className="p-2 rounded-lg bg-white/70 dark:bg-gray-800/60 border border-gray-100/40 dark:border-gray-700 text-center">
                    <div className="text-lg font-semibold">10+</div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/70 dark:bg-gray-800/60 border border-gray-100/40 dark:border-gray-700 text-center">
                    <div className="text-lg font-semibold">3+</div>
                    <div className="text-xs text-gray-500">Years Exp</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/70 dark:bg-gray-800/60 border border-gray-100/40 dark:border-gray-700 text-center">
                    <div className="text-lg font-semibold">200+</div>
                    <div className="text-xs text-gray-500">Users Impact</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Bio + highlights */}
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                A software engineering student specializing in web development, with hands-on experience building responsive
                and user-friendly websites using modern front-end technologies. Contributed to 10+ academic and organizational
                web projects, with strengths in UI/UX design, component-based development, and effective teamwork throughout
                end-to-end development cycles.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-gray-100/40 dark:border-gray-700">
                  <h4 className="font-semibold mb-2">What I do</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <li>• Build responsive web apps with React / Next.js</li>
                    <li>• Design and prototype in Figma</li>
                    <li>• Integrate backend services and APIs</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-r from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 border border-gray-100/40 dark:border-gray-700">
                  <h4 className="font-semibold mb-2">Strengths</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <li>• Fast iteration & clean code</li>
                    <li>• Cross-functional collaboration</li>
                    <li>• Usability-focused decisions</li>
                  </ul>
                </div>
              </div>

              {/* Skill chips */}
              {/* <div>
          <h4 className="font-semibold mb-3">Top tools</h4>
          <div className="flex flex-wrap gap-3">
            {['React', 'Next.js', 'Figma', 'TypeScript', 'Tailwind', 'Laravel', 'MySQL'].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200/30 dark:border-gray-700/50 shadow-sm">
                {t}
              </span>
            ))}
          </div>
        </div> */}

              {/* <div className="flex items-center gap-4 mt-4">
          <a href="https://github.com/rahelnatasya" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white transition-colors shadow-sm">
            <Github size={16} /> View Code
          </a>
          <a href="http://www.linkedin.com/in/rahel-pangaribuan-77b2b1314" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div> */}
            </motion.div>
          </div>
        </div>
      </motion.section>


      {/* Skills (4 + 1 centered) */}
      {/* Skills (4 + 1 centered) */}
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills & Expertise</h2>

          {/* Top row – 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {skills.slice(0, 4).map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.07, y: -8 }}
                  className="p-6 rounded-2xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-xl 
                       shadow-[0_0_20px_rgba(0,0,0,0.08)] dark:shadow-[0_0_30px_rgba(0,0,0,0.4)]
                       border border-gray-200/50 dark:border-gray-700/60
                       hover:shadow-[0_8px_30px_rgba(59,130,246,0.25)] transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-blue-600 mb-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <h3 className="font-semibold text-lg mb-3">{skill.name}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex gap-2">
                        <span className="w-2 h-2 mt-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom row – single centered card */}
          <div className="flex justify-center">
            {(() => {
              const lastSkill = skills[4];
              const Icon = lastSkill.icon;

              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -6 }}
                  className="w-full md:w-3/4 lg:w-1/2 p-8 rounded-2xl
                       bg-gradient-to-br from-gray-50 via-white to-gray-100
                       dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                       border border-gray-200 dark:border-gray-700
                       shadow-[0_0_25px_rgba(0,0,0,0.08)]
                       hover:shadow-[0_12px_35px_rgba(147,51,234,0.25)]
                       transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-purple-500 mb-5 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)] mx-auto" />
                  <h3 className="font-semibold text-xl mb-6 text-center bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                    {lastSkill.name}
                  </h3>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300 text-sm">
                    {lastSkill.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })()}
          </div>
        </div>
      </motion.section>



      {/* Projects */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 px-6 bg-white dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {projects.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="block group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative overflow-hidden h-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-6 text-sm">
                        <span className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                          <Globe size={16} /> View details
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </motion.section>

      {/* Organisational Experience (Timeline) */}
      <motion.section
        id="organisational-experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-white dark:bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Organisational Experience</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 rounded-full" />

            <div className="space-y-12 md:space-y-16">
              {/* Item A - Panitia KPU BEM IT Del */}
              <div className="flex items-start md:justify-between">
                <div className="flex items-start md:w-1/2 md:pr-8">
                  <div className="z-10 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white mr-6 shadow-lg">
                    <span className="text-sm font-semibold">A</span>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 shadow-sm w-full">
                    <h3 className="text-xl font-semibold">Panitia KPU BEM IT Del</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">Administrative Division Member</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">
                     Managed candidate registration, document verification, and election announcements while assisting in vote counting with the Data &
Information Division
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex md:flex-col md:items-center md:ml-8 md:w-1/2">
                  <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Sep 2025 – Dec 2025</span>
                  <span className="text-xs text-gray-400 mt-1">Sitoluama, Kec. Balige, Toba</span>
                </div>
              </div>

              {/* Item B - Majelis Permusyawaratan Mahasiswa */}
              <div className="flex items-start md:justify-between">
                <div className="flex items-start md:w-1/2 md:pr-8">
                  <div className="z-10 w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-400 flex items-center justify-center text-white mr-6 shadow-lg">
                    <span className="text-sm font-semibold">B</span>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 shadow-sm w-full">
                    <h3 className="text-xl font-semibold">Majelis Permusyawaratan Mahasiswa</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">Member of Commission A</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">
                      Oversaw administrative processes, documentation, scheduling, and secretarial supervision to maintain transparency and efficiency.</p>
                  </div>
                </div>

                <div className="hidden md:flex md:flex-col md:items-center md:ml-8 md:w-1/2">
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">Jan 2025 – Present</span>
                  <span className="text-xs text-gray-400 mt-1">Sitoluama, Kec. Balige, Toba</span>
                </div>
              </div>

              {/* Item C - Information Technology Association Caderization Committee */}
              <div className="flex items-start md:justify-between">
                <div className="flex items-start md:w-1/2 md:pr-8">
                  <div className="z-10 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 flex items-center justify-center text-white mr-6 shadow-lg">
                    <span className="text-sm font-semibold">C</span>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 shadow-sm w-full">
                    <h3 className="text-xl font-semibold">Information Technology Association — Caderization Committee</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">Member of Event Committee</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">
                     Supported event operations by coordinating transitions, guiding participants, and ensuring the agenda ran smoothly.
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex md:flex-col md:items-center md:ml-8 md:w-1/2">
                  <span className="text-sm text-pink-600 dark:text-pink-400 font-medium">Oct 2025</span>
                  <span className="text-xs text-gray-400 mt-1">Sitoluama, Kec. Balige, Toba</span>
                </div>
              </div>
            </div>

            {/* Mobile compact list */}
            <div className="md:hidden mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">A</div>
                <div>
                  <h4 className="font-semibold">Panitia KPU BEM IT Del</h4>
                  <p className="text-sm text-gray-500">Administrative Division Member — Oct 2024 – Dec 2025</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-teal-400 flex items-center justify-center text-white shadow-lg">B</div>
                <div>
                  <h4 className="font-semibold">Majelis Permusyawaratan Mahasiswa</h4>
                  <p className="text-sm text-gray-500">Member of Commission A — Jan 2025 – Present</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 flex items-center justify-center text-white shadow-lg">C</div>
                <div>
                  <h4 className="font-semibold">Information Technology Association — Caderization Committee</h4>
                  <p className="text-sm text-gray-500">Member of Event Committee — Sep 2023 – Sep 2026 (Expected)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>


      {/* Education (Timeline) */}
      <motion.section
        id="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-white dark:bg-gray-900"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Education</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 rounded-full" />

            <div className="space-y-12 md:space-y-16">
              {/* Item 1 - Institut Teknologi Del */}
              <div className="flex items-start md:items-center md:justify-between">
                <div className="flex items-start md:w-1/2 md:pr-8">
                  {/* Dot */}
                  <div className="z-10 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mr-6 shadow-lg">
                    <span className="text-sm font-semibold">1</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl shadow-sm w-full">
                    <h3 className="text-xl font-semibold">Institut Teknologi Del</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">Diploma in Information Technology • GPA 3.55 / 4.00</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Sitoluama, Kec. Balige, Toba, Sumatera Utara 22381</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">Short Program: Jun 2025 – Jul 2025</p>
                  </div>
                </div>

                <div className="hidden md:flex md:flex-col md:items-center md:ml-8 md:w-1/2">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">Sep 2023 – Sep 2026 (Expected)</span>
                </div>
              </div>

              {/* Item 2 - SMAN 1 Laguboti */}
              <div className="flex items-start md:items-center md:justify-between">
                <div className="flex items-start md:w-1/2 md:order-2 md:pl-8">
                  {/* Dot (right side on larger screens) */}
                  <div className="z-10 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center text-white ml-6 shadow-lg">
                    <span className="text-sm font-semibold">2</span>
                  </div>
                  <div className="bg-gradient-to-r from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 p-6 rounded-xl shadow-sm w-full">
                    <h3 className="text-xl font-semibold">SMAN 1 Laguboti</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">Senior High School • Science Major</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">JL. Sekolah No. 3 Laguboti</p>
                  </div>
                </div>

                <div className="hidden md:flex md:flex-col md:items-center md:mr-8 md:w-1/2 md:order-1">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">Jul 2020 – Apr 2023</span>
                </div>
              </div>
            </div>

            {/* Mobile dates */}
            <div className="md:hidden mt-8 space-y-8">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg">1</div>
                  <div>
                    <h4 className="font-semibold">Institut Teknologi Del</h4>
                    <p className="text-sm text-gray-500">Diploma in Information Technology • GPA 3.55 / 4.00</p>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-blue-600 dark:text-blue-400">Sep 2023 – Sep 2026</span>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center text-white shadow-lg">2</div>
                  <div>
                    <h4 className="font-semibold">SMAN 1 Laguboti</h4>
                    <p className="text-sm text-gray-500">Senior High School • Science Major</p>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-blue-600 dark:text-blue-400">Jul 2020 – Apr 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>


      {/* Contact */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: contact cards */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
            <p className="text-gray-600 dark:text-gray-400">
            Have an idea or project? Contact me by phone, email, or check our public social media profiles. Links are provided below.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {/* Phone */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/40 dark:border-gray-700 shadow-sm"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-teal-400 text-white">
                  <ExternalLink size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone / WhatsApp</h4>
                  <a href="tel:+6282163773422" className="text-gray-700 dark:text-gray-300 hover:underline">
                    +62 821-6377-3422
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/40 dark:border-gray-700 shadow-sm"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:rahelattractive@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    rahelattractive@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/40 dark:border-gray-700 shadow-sm"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <a
                    href="http://www.linkedin.com/in/rahel-pangaribuan-77b2b1314"
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                  >
                    linkedin.com/in/rahel-pangaribuan-77b2b1314
                  </a>
                </div>
              </motion.div>

              {/* GitHub */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/40 dark:border-gray-700 shadow-sm"
              >
                <div className="p-3 rounded-lg bg-gray-700 text-white">
                  <Github size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <a
                    href="https://github.com/rahelnatasya"
                    target="_blank"
                    className="text-gray-700 dark:text-gray-300 hover:underline break-all"
                  >
                    github.com/rahelnatasya
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/40 dark:border-gray-700 shadow-sm"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-pink-500 to-red-400 text-white">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Laguboti, Toba Samosir, Sumatera Utara
                  </p>
                  <p className="text-sm text-gray-500">Open to remote work.</p>
                </div>
              </motion.div>
            </div>

            {/* Social (small) */}
            <div className="flex items-center gap-4 mt-4">
              <motion.a whileHover={{ scale: 1.15 }} href="https://github.com/rahelnatasya" target="_blank" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800/60 shadow">
                <Github size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.15 }} href="http://www.linkedin.com/in/rahel-pangaribuan-77b2b1314" target="_blank" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800/60 shadow">
                <Linkedin size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.15 }} href="mailto:rahelattractive@gmail.com" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800/60 shadow">
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Social panel (Twitter + Instagram + CTA) */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-white/60 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/40 border border-gray-200/40 dark:border-gray-700 shadow-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3">Find me on social</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Follow for updates, project previews, and occasional tech rants.</p>

              <div className="grid grid-cols-1 gap-4">

                                {/* Instagram */}
                <a
                  href="https://www.instagram.com/rahelpgrb/" /* replace with actual handle */
                  target="_blank"
                  className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/60 hover:scale-105 transition-transform"
                >
                  <div className="p-2 rounded-full bg-pink-500 text-white">
                    {/* simple IG glyph */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zm6.75-3a1.25 1.25 0 11-1.25-1.25 1.25 1.25 0 011.25 1.25zM12 10.5A1.5 1.5 0 1110.5 12 1.5 1.5 0 0112 10.5z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Instagram</div>
                    <div className="text-sm text-gray-500">@rahelpgrb</div>
                  </div>
                  <div className="ml-auto text-sm text-pink-500">Follow</div>
                </a>
              
                {/* Spotify */}
                <a
                  href="https://open.spotify.com/user/31vkqqhkgsozt2ect3lhq73vzma4?si=rNmFgoMORAuW_w1us2GLNg"
                  target="_blank"
                  className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/60 hover:scale-105 transition-transform"
                >
                  <div className="p-2 rounded-full bg-green-500 text-white">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 168 168"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M84 0a84 84 0 1 0 84 84A84 84 0 0 0 84 0Zm38.4 120a6.37 6.37 0 0 1-8.73 2c-23.85-14.6-53.82-17.9-89.12-9.75a6.4 6.4 0 1 1-2.82-12.47c38.93-8.8 72.39-4.9 99.3 11.6a6.34 6.34 0 0 1 2.37 8.62Zm12.4-27.9a8 8 0 0 1-10.9 2.5c-27.3-16.6-69-21.4-101.3-11.6a8 8 0 0 1-4.6-15.3c36.6-11 83.2-5.7 115.2 13.2a8 8 0 0 1 2.6 11.2Zm1.1-29.5C107.1 43.8 54.2 41.7 29 49a9.6 9.6 0 1 1-5.5-18.4c30.4-9.2 88.3-6.7 122.4 14.2a9.6 9.6 0 0 1-9.9 16.1Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Spotify | @meraqel</div>
                    
                    <div className="ml-auto text-sm text-blue-600">Follow and share a best playlist together</div>
                </div>
                </a> 

                
                {/* Other CTA: Download CV */}
                <a
                  href="/pdf/Rahel_N_Pangaribuan_Resume.pdf"
                  download
                  className="flex items-center gap-3 justify-center p-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow hover:opacity-95 transition-opacity"
                >
                  <Download size={16} /> Download CV
                </a>
              </div>
            </div>

            {/* Big social badges */}
            <div className="mt-6 flex items-center gap-4">
              <a href="https://open.spotify.com/user/31vkqqhkgsozt2ect3lhq73vzma4?si=rNmFgoMORAuW_w1us2GLNg" target="_blank" className="flex-1 p-3 rounded-lg bg-green-500 text-white text-center font-medium hover:scale-105 transition-transform">
                Spotify
              </a>
              <a href="https://www.instagram.com/rahelpgrb/" target="_blank" className="flex-1 p-3 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 text-white text-center font-medium hover:scale-105 transition-transform">
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>



      {/* Footer */}
      <footer className="relative bg-gray-900 dark:bg-black text-gray-300 pt-16 pb-10 mt-20 overflow-hidden">

        {/* Glowing gradient line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-[0_0_20px_rgba(99,102,241,0.7)]" />

        <div className="max-w-7xl mx-auto px-6">

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-10">
            <motion.a
              whileHover={{ scale: 1.25 }}
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors shadow-lg"
              href="#"
            >
              <Github size={22} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.25 }}
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors shadow-lg"
              href="#"
            >
              <Linkedin size={22} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.25 }}
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors shadow-lg"
              href="mailto:rahel@example.com"
            >
              <Mail size={22} />
            </motion.a>
          </div>

          {/* Name + tagline */}
          <h3 className="text-center text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Rahel Pangaribuan
          </h3>
          <p className="text-center text-gray-400 mt-2">
            Crafting modern digital experiences with precision and creativity
          </p>

          {/* Line separator */}
          <div className="w-full h-px bg-gray-700 my-8"></div>

          {/* Copyright */}
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Rahel. Built with passion, caffeine, and stubborn persistence.
          </p>
        </div>

        {/* Glow circles */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 blur-3xl rounded-full"></div>

      </footer>

    </div>
  );
}