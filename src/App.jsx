import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";

import {
  FaArrowRight,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaGraduationCap,
  FaPaintBrush,
  FaVideo,
  FaGlobe,
  FaBookOpen,
  FaLaptopCode,
  FaUsers,
  FaBars,
  FaTimes,
} from "react-icons/fa";

/* EXPERIÊNCIAS */

const works = [
  {
    title: "Pagode na Disciplina",
    period: "2023 - 2024",
    type: "Social Media",
    desc: "Gestão de redes sociais, planejamento de conteúdo, cobertura de eventos e interação com o público.",
  },

  {
    title: "Emunah Pratas",
    period: "2023 - 2024",
    type: "Social Media",
    desc: "Criação de conteúdo digital com foco em identidade visual, engajamento e posicionamento de marca.",
  },

  {
    title: "Belo Preparo",
    period: "2024 - 2025",
    type: "Projeto Digital",
    desc: "Projeto voltado à culinária sustentável com desenvolvimento de site e conteúdo educativo.",
  },
];

/* PROJETOS */

const projects = [
  {
    title: "Produção de Vídeos",
    icon: <FaVideo />,
    desc: "Desenvolvimento de vídeos com foco em comunicação, criatividade, edição e identidade visual.",
  },

  {
    title: "Instagram Escolar",
    icon: <FaUsers />,
    desc: "Participação na gestão colaborativa do Instagram escolar com planejamento e criação de conteúdo.",
  },

  {
    title: "YouTube",
    icon: <FaGlobe />,
    desc: "Criação de conteúdos autorais explorando criatividade, presença digital e identidade própria.",
  },

  {
    title: "Projeto EBAC / Figma",
    icon: <FaLaptopCode />,
    desc: "Projeto desenvolvido no Figma com foco em design visual, interface e organização estética.",
  },

  {
    title: "Revista Vértice",
    icon: <FaBookOpen />,
    desc: "Projeto interdisciplinar envolvendo comunicação, criação de conteúdo e pensamento crítico.",
  },

  {
    title: "Projeto PLURAL",
    icon: <FaPaintBrush />,
    desc: "Projeto social voltado ao desenvolvimento de jovens através da comunicação e tecnologia.",
  },
];

/* EDUCAÇÃO */

const education = [
  "Ensino Médio Técnico em IoT — Senac",
  "Cibersegurança — Cisco",
  "Fundação Bradesco",
  "Design Gráfico",
  "Comunicação com IA",
  "Informática",
];

/* SKILLS */

const skills = [
  "Social Media",
  "Design Gráfico",
  "Criação de Conteúdo",
  "Figma",
  "Estratégia Digital",
  "Produção de Vídeos",
];

export default function App() {
  const [hover, setHover] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const { scrollYProgress } = useScroll();

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const moveMouse = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveMouse);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      {/* PROGRESS */}

      <motion.div className="progress" style={{ scaleX }} />

      {/* CURSOR */}

      <motion.div
        className={`cursor ${hover ? "active" : ""}`}
        animate={{
          x: mouse.x - 14,
          y: mouse.y - 14,
        }}
      />

      {/* NAVBAR */}

      <nav className="navbar">
        <h2>CHRYS.</h2>

        <div className="desktop-menu">
          <a href="#home">Home</a>
          <a href="#about">Sobre</a>
          <a href="#education">Educação</a>
          <a href="#works">Experiências</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* MENU MOBILE */}

      <motion.div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
        }}
      >
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          Sobre
        </a>

        <a href="#education" onClick={() => setMenuOpen(false)}>
          Educação
        </a>

        <a href="#works" onClick={() => setMenuOpen(false)}>
          Experiências
        </a>

        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projetos
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contato
        </a>
      </motion.div>

      {/* HERO */}

      <section className="hero" id="home">
        <div className="grid-bg"></div>

        <div className="blur blur-1"></div>
        <div className="blur blur-2"></div>

        {/* TEXTO */}

        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          PORTFÓLIO • SOCIAL MEDIA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Chrystian <span>Alexandre</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Social Media com foco em gestão de redes sociais,
          criação de conteúdo, identidade visual e estratégias
          digitais que conectam marcas, pessoas e comunidades.
        </motion.p>

        {/* FOTO */}

        <motion.div
          className="hero-side-image"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/chrystian.png" alt="Chrystian" />
        </motion.div>

        {/* BOTÃO */}

        <motion.a
          href="#works"
          className="primary-btn"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Ver trabalhos <FaArrowRight />
        </motion.a>
      </section>

      {/* SOBRE */}

      <section className="about" id="about">
        <div className="title-area">
          <p>01 / SOBRE</p>

          <h2>
            Comunicação visual com estratégia e presença.
          </h2>
        </div>

        <div className="glass-card">
          <p>
            Tenho 17 anos e atuo como Social Media,
            com experiência em gestão de redes sociais,
            criação de conteúdo e desenvolvimento de
            estratégias digitais.
          </p>

          <p>
            Já trabalhei em projetos sociais e empresas,
            criando comunicação adaptável para diferentes
            públicos e objetivos.
          </p>

          <p>
            Tenho interesse em design, cultura digital
            e construção de identidade visual,
            buscando sempre criar conteúdos que
            conectem e gerem impacto.
          </p>

          <div className="skills">
            {skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCAÇÃO */}

      <section className="education" id="education">
        <div className="title-area center">
          <p>02 / EDUCAÇÃO</p>

          <h2>Formação e conhecimentos.</h2>
        </div>

        <div className="education-grid">
          {education.map((item, index) => (
            <motion.div
              className="education-card"
              key={index}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <FaGraduationCap />

              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIÊNCIAS */}

      <section className="works" id="works">
        <div className="title-area center">
          <p>03 / EXPERIÊNCIAS</p>

          <h2>Projetos e trabalhos.</h2>
        </div>

        <div className="work-list">
          {works.map((work, index) => (
            <motion.article
              className="work-card"
              key={index}
              whileHover={{
                y: -18,
                scale: 1.02,
                boxShadow: "0 25px 80px rgba(255,0,0,0.25)",
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className="work-number">
                0{index + 1}
              </div>

              <p className="work-type">
                {work.type}
              </p>

              <h3>{work.title}</h3>

              <span>{work.period}</span>

              <h4>{work.desc}</h4>
            </motion.article>
          ))}
        </div>
      </section>

      {/* PROJETOS */}

      <section className="projects" id="projects">
        <div className="title-area center">
          <p>04 / PROJETOS</p>

          <h2>
            Criação, conteúdo e identidade visual.
          </h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={index}
              whileHover={{
                y: -18,
                scale: 1.03,
                boxShadow: "0 25px 80px rgba(255,0,0,0.25)",
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className="project-icon">
                {project.icon}
              </div>

              <h3>{project.title}</h3>

              <p>{project.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CONTATO */}

      <section className="contact" id="contact">
        <p className="eyebrow">
          05 / CONTATO
        </p>

        <h2>
          Vamos criar algo impossível de ignorar?
        </h2>

        <div className="contact-info">
          <a href="mailto:chrystianaalexandre31@gmail.com">
            <FaEnvelope />
            chrystianaalexandre31@gmail.com
          </a>

          <a href="tel:+5511988737525">
            <FaPhoneAlt />
            (11) 98873-7525
          </a>

          <a href="https://instagram.com/chrysalexx">
            <FaInstagram />
            @chrysalexx
          </a>
        </div>
      </section>
    </main>
  );
}