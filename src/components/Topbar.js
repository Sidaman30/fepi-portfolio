export default function Topbar() {
  return (
    <header className="topbar">
      <div className="wrap topbar__inner">
        <span className="topbar__mark">F.E.P.S.</span>
        <nav className="topbar__nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#awards">Awards</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="topbar__cta" href="/assets/Fepi_Sidabalok_CV.pdf" download>
          Download CV
        </a>
      </div>
    </header>
  );
}
