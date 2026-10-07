import { useState } from 'react'

const technologies = [
  { name: 'React', type: 'FRONTEND', mark: '⚛', color: 'react' },
  { name: 'TypeScript', type: 'LENGUAJE', mark: 'TS', color: 'ts' },
  { name: 'JavaScript', type: 'LENGUAJE', mark: 'JS', color: 'js' },
  { name: 'HTML & CSS', type: 'MAQUETACIÓN', mark: '◇', color: 'html' },
  { name: 'Node.js', type: 'BACKEND', mark: '⬡', color: 'node' },
  { name: 'Git & GitHub', type: 'HERRAMIENTAS', mark: '⌘', color: 'git' },
]

const projects = [
  {
    title: 'Proyecto-final',
    description: 'agenda de turnos de barberia con asistente virtual.',
    category: 'DESARROLLO WEB',
    year: '2026',
    link: 'proyecto-final-liart-seven.vercel.app',
    linkLabel: 'Ver proyecto',
  },
  {
    title: 'mi-pagina',
    description: 'fila creativa.',
    category: 'DISEÑO + CÓDIGO',
    year: '2026',
    link: 'universidad-psi.vercel.app',
    linkLabel: 'Ver proyecto',
  },
  {
    title: 'Experimento digital',
    description: 'Puedes duplicar o eliminar objetos de esta lista para mantener actualizado tu portafolio.',
    category: 'EXPERIMENTAL',
    year: '2024',
    link: 'https://example.com',
    linkLabel: 'Ver proyecto',
  },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio" onClick={closeMenu}>
          <span className="brand-mark">m<span>.</span></span>
          <span className="brand-name">mi portafolio<span className="brand-dot">/</span></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <nav className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Navegación principal">
          <a href="#inicio" onClick={closeMenu}><span>01</span> Inicio</a>
          <a href="#tecnologias" onClick={closeMenu}><span>02</span> Tecnologías</a>
          <a href="#proyectos" onClick={closeMenu}><span>03</span> Proyectos</a>
          <a href="#contacto" onClick={closeMenu}><span>04</span> Contacto</a>
        </nav>
        <a className="availability" href="#contacto"><span className="status-dot" /> Disponible para proyectos</a>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> PORTAFOLIO PERSONAL <span className="eyebrow-year">2025 — 26</span></div>
            <h1>Hola, soy<br /><span className="name-highlight">Juan Jose</span><span className="period">.</span></h1>
            <p className="role">Desarrollador web <span>·</span> Colombia</p>
            <p className="intro">Creo experiencias digitales claras, rápidas y pensadas para las personas. Me gusta convertir ideas en productos que se sienten tan bien como funcionan.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contacto">Hablemos <Arrow diagonal /></a>
              <a className="text-link" href="#tecnologias">Conoce mi stack <Arrow /></a>
            </div>
            <div className="hero-meta"><span>SCROLL PARA EXPLORAR</span><span className="scroll-line" /></div>
          </div>

          <div className="hero-visual" aria-label="Ilustración abstracta de desarrollo web" role="img">
            <div className="visual-grid" />
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
            <div className="visual-core"><span>m<span>.</span></span></div>
            <div className="float-tag tag-code"><span className="tag-dot" /> &lt;creative /&gt;</div>
            <div className="float-tag tag-location"><span>⌖</span> 4° 42' N, 74° 04' O</div>
            <div className="visual-caption"><span>01 / 03</span><span>DISEÑO + DESARROLLO</span></div>
            <div className="visual-cross cross-a">+</div><div className="visual-cross cross-b">+</div>
          </div>
          <div className="hero-index"><span>01</span> — 03</div>
        </section>

        <section className="tech-section section-wrap" id="tecnologias">
          <div className="section-heading">
            <div><div className="eyebrow"><span className="eyebrow-line" /> LO QUE USO</div><h2>Mi caja de <span>herramientas</span></h2></div>
            <p>Tecnologías con las que doy vida a ideas y construyo experiencias para la web.</p>
          </div>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <article className="tech-card" key={tech.name}>
                <div className="card-top"><span className={`tech-mark ${tech.color}`}>{tech.mark}</span><span className="card-index">0{index + 1}</span></div>
                <h3>{tech.name}</h3><span className="tech-type">{tech.type}</span>
                <div className="card-bottom"><span className="card-rule" /><span className="card-plus">↗</span></div>
              </article>
            ))}
          </div>
        </section>


        <section className="projects-section section-wrap" id="proyectos">
          <div className="section-heading">
            <div><div className="eyebrow"><span className="eyebrow-line" /> SELECCIÓN DE TRABAJOS</div><h2>Proyectos <span>recientes</span></h2></div>
            <p>Una muestra de ideas que he convertido en experiencias digitales. Cada proyecto puede enlazar a su sitio o repositorio.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-top"><span>{project.category}</span><span>0{index + 1} / 0{projects.length}</span></div>
                <div className="project-art" aria-hidden="true"><span className="project-art-mark">{String(index + 1).padStart(2, '0')}<i>.</i></span><span className="project-art-orbit" /></div>
                <div className="project-info"><div><h3>{project.title}</h3><span className="project-year">{project.year}</span></div><p>{project.description}</p><a href={project.link} target="_blank" rel="noreferrer">{project.linkLabel}<Arrow diagonal /></a></div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contacto">
          <div className="contact-panel">
            <div className="contact-main"><div className="eyebrow"><span className="eyebrow-line" /> SIGUIENTE PASO</div><h2>¿Tienes una idea<br />en <span>mente?</span></h2><p>Hagámosla realidad. Cuéntame sobre tu proyecto y te responderé pronto.</p><a className="button button-light" href="mailto:hola@tucorreo.com">Escríbeme un correo <Arrow diagonal /></a></div>
            <div className="contact-aside"><div className="contact-orbit"><span>✳</span></div><span className="aside-label">ENCUÉNTRAME EN</span><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><div className="aside-email">hola@tucorreo.com</div></div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="footer-brand" href="#inicio">m<span>.</span></a><span>DISEÑADO Y DESARROLLADO CON CUIDADO</span><span>© 2025 — JUAN JOSE</span><a className="back-top" href="#inicio" aria-label="Volver arriba">↑</a></footer>
    </div>
  )
}

export default App
