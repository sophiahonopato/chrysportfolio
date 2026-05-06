import "./style.css"

const Hero = () => {
  return (
    <section className="hero">

      {/* BACKGROUND */}
      <div className="bg-light"></div>
      <div className="bg-accent"></div>
      <div className="bg-noise"></div>

      {/* TOPO */}
      <header className="hero-top">
        <div className="logo">CH</div>

        <nav className="nav">
          <span>Projetos</span>
          <span>Sobre</span>
          <span>Contato</span>
        </nav>
      </header>

      {/* CONTEÚDO */}
      <div className="hero-center">

        <h1 className="title">
          <span className="outline">HEY, I'M</span>{" "}
          <span className="solid">CHRYSTIAN</span><br />

          <span className="outline">BUT YOU CAN CALL ME</span>{" "}
          <span className="solid red">CHRYs</span>
        </h1>

        <p className="subtitle">
          Desenvolvedor Front-end & UI Designer <br />
          criando experiências digitais modernas
        </p>

        <div className="actions">
          <button className="primary">Ver projetos</button>
          <button className="ghost">Sobre mim</button>
        </div>

      </div>

    </section>
  )
}

export default Hero