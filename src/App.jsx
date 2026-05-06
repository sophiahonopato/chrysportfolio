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
} from "react-icons/fa";

const works = [
  {
    title: "Pagode na Disciplina",
    period: "Setembro de 2023 - 2024",
    type: "Social Media",
    desc: "Atuação em organização voltada para cultura, educação e fortalecimento da comunidade afro. Responsável por gerenciamento de redes sociais, planejamento de conteúdo, criação de posts, cobertura e divulgação de eventos, além da interação com o público.",
    link: "@disciplinajdmiriam_",
  },
  {
    title: "Emunah Pratas",
    period: "Setembro de 2023 - Fevereiro de 2024",
    type: "Social Media",
    desc: "Trabalho em empresa de streaming de joias, atuando no controle das redes sociais e produção de conteúdo digital com foco em engajamento, identidade visual e posicionamento de marca.",
    link: "@emunah_pratas",
  },
  {
    title: "Belo Preparo",
    period: "Janeiro de 2024 - Dezembro de 2025",
    type: "Projeto Digital",
    desc: "Desenvolvimento de projeto digital voltado à culinária sustentável, com criação de site, conteúdo informativo e e-book de receitas. O projeto aborda redução de desperdício, organização alimentar e qualidade de vida para o público jovem.",
    link: "Belo Preparo Site",
  },
];

const projects = [
  {
    title: "Produção de Vídeos",
    icon: <FaVideo />,
    desc: "Desenvolvimento de vídeos com foco em comunicação, criatividade, roteiro, edição e construção visual para trabalhos escolares e projetos autorais.",
  },
  {
    title: "Instagram Escolar",
    icon: <FaUsers />,
    desc: "Participação na gestão colaborativa do Instagram da escola, com planejamento, criação e publicação de conteúdos alinhados ao público jovem.",
  },
  {
    title: "YouTube",
    icon: <FaGlobe />,
    desc: "Criação de conteúdos autorais explorando criatividade, comunicação, presença digital, consistência e identidade própria.",
  },
  {
    title: "Projeto EBAC / Figma",
    icon: <FaLaptopCode />,
    desc: "Desenvolvimento de projeto utilizando Figma, com foco em design, prototipagem, organização visual, estrutura de interface e criação de layouts digitais.",
  },
  {
    title: "Revista Vértice",
    icon: <FaBookOpen />,
    desc: "Participação em projeto interdisciplinar que integra Linguagens e Ciências, com construção de conteúdos, organização de ideias e comunicação crítica.",
  },
  {
    title: "Projeto PLURAL",
    icon: <FaPaintBrush />,
    desc: "Projeto autoral em desenvolvimento para promover autonomia social e pessoal de jovens, abordando política, sociedade, mercado de trabalho, ENEM, vestibulares, alimentação saudável e tecnologia.",
  },
];

const education = [
  "Ensino Médio Técnico em Internet das Coisas no Senac — em andamento",
  "Informática — Chroma: Word, Excel e PowerPoint",
  "Cibersegurança — Cisco",
  "Fundação Bradesco",
  "Design Gráfico",
  "Comunicação com IA",
  "Jovens Defensores Populares",
];

const skills = [
  "Social Media",
  "Gestão de Redes Sociais",
  "Criação de Conteúdo",
  "Design Gráfico",
  "Estratégia Digital",
  "Identidade Visual",
  "Cultura Digital",
  "Figma",
  "Produção de Vídeos",
  "Comunicação com IA",
];

function App() {
  const [loading, setLoading] = useState(true);
  const [hover, setHover] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);

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
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveMouse);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", moveMouse);
      lenis.destroy();
    };
  }, []);

  if (loading) {
    return (
      <section className="loader">
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          CHRYSTIAN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Social Media • Designer • Creative Portfolio
        </motion.p>

        <div className="loading-line">
          <motion.span
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6 }}
          />
        </div>
      </section>
    );
  }

  return (
    <main>
      <motion.div className="progress" style={{ scaleX }} />

      <motion.div
        className={`cursor ${hover ? "active" : ""}`}
        animate={{
          x: mouse.x - 14,
          y: mouse.y - 14,
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 28,
        }}
      />

      <nav className="navbar">
        <h2>CHRYS.</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">Sobre</a>
          <a href="#works">Experiências</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="grid-bg"></div>
        <div className="blur blur-1"></div>
        <div className="blur blur-2"></div>

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
          Social Media com foco em gestão de redes sociais, criação de conteúdo,
          identidade visual e estratégias digitais que conectam marcas,
          pessoas e comunidades.
        </motion.p>

        <motion.a
          href="#works"
          className="primary-btn"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          Ver trabalhos <FaArrowRight />
        </motion.a>
      </section>

      <section className="about" id="about">
        <motion.div
          className="title-area"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p>01 / QUEM SOU EU</p>
          <h2>Comunicação visual com estratégia e impacto.</h2>
        </motion.div>

        <motion.div
          className="glass-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p>
            Oi, me chamo Chrystian, tenho 17 anos e atuo como Social Media.
            Tenho experiência na gestão de redes sociais, criação de conteúdo e
            desenvolvimento de estratégias digitais voltadas para engajamento e
            posicionamento de marca.
          </p>

          <p>
            Já trabalhei tanto em projetos comunitários quanto em empresas, o
            que me permitiu desenvolver uma comunicação adaptável para diferentes
            públicos e objetivos.
          </p>

          <p>
            Tenho interesse em estética visual, design, cultura digital e
            construção de identidade nas redes sociais, buscando sempre criar
            conteúdos que conectem, representem e gerem impacto.
          </p>

          <div className="skills">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="education">
        <div className="title-area center">
          <p>02 / EDUCAÇÃO</p>
          <h2>Formação e conhecimentos.</h2>
        </div>

        <div className="education-grid">
          {education.map((item, index) => (
            <motion.div
              className="education-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <FaGraduationCap />
              <p>{item}</p>
            </motion.div>
          ))}
        </div>

        <div className="languages">
          <span>Português: Fluente</span>
          <span>Inglês: Intermediário</span>
        </div>
      </section>

      <section className="works" id="works">
        <div className="title-area center">
          <p>03 / TRABALHOS ANTERIORES</p>
          <h2>Experiências que construíram repertório.</h2>
        </div>

        <div className="work-list">
          {works.map((work, index) => (
            <motion.article
              className="work-card"
              key={index}
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -18,
                scale: 1.02,
                boxShadow: "0 25px 80px rgba(255,0,0,0.25)",
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className="work-number">0{index + 1}</div>
              <p className="work-type">{work.type}</p>
              <h3>{work.title}</h3>
              <span>{work.period}</span>
              <h4>{work.desc}</h4>
              <small>{work.link}</small>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="marquee">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
        >
          DESIGN • SOCIAL MEDIA • IDENTIDADE VISUAL • CULTURA DIGITAL • FIGMA •
          CONTEÚDO • COMUNICAÇÃO • DESIGN • SOCIAL MEDIA • IDENTIDADE VISUAL •
        </motion.div>
      </section>

      <section className="projects" id="projects">
        <div className="title-area center">
          <p>04 / PROJETOS E MATERIAIS</p>
          <h2>Criação, conteúdo e impacto social.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -18,
                scale: 1.03,
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="vision">
        <motion.div
          className="vision-card"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p>VISÃO CRIATIVA</p>
          <h2>
            Criar conteúdos com identidade visual forte, conexão com o público
            jovem e referências de cultura digital.
          </h2>
          <h3>
            A ideia é unir estética contemporânea e comunicação estratégica para
            gerar engajamento, representatividade e impacto.
          </h3>
        </motion.div>
      </section>

      <section className="contact" id="contact">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          05 / CONTATO
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Vamos construir algo impossível de ignorar?
        </motion.h2>

        <div className="contact-info">
          <a href="mailto:chrystianaalexandre31@gmail.com">
            <FaEnvelope /> chrystianaalexandre31@gmail.com
          </a>

          <a href="tel:+5511988737525">
            <FaPhoneAlt /> (11) 98873-7525
          </a>

          <a href="https://instagram.com/chrysalexx" target="_blank">
            <FaInstagram /> @chrysalexx
          </a>
        </div>

        <motion.a
          href="mailto:chrystianaalexandre31@gmail.com"
          className="primary-btn"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          Entrar em contato <FaArrowRight />
        </motion.a>
      </section>
    </main>
  );
}

export default App;