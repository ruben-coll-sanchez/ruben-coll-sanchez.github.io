"use client"

import { useId, useState } from "react"

const profile_picture_name = "/images/pfp_paris_eiffel.jpg"

type Publication = {
  id: string
  kind: string
  title: string
  venue: string
  date: string
  authors: string
  abstract?: string
  pdfUrl?: string
  publicUrl?: string
}

const publications: Publication[] = [
  {
    id: "amai-paper",
    kind: "Workshop Paper",
    title:
      "AMAI: Algebraic Modelling of Distributed AI computations for Symbolic Performance Analysis",
    venue: "PMBS 2026 (SC26 Workshops) — Chicago",
    date: "November 2026",
    authors: "Rubén Coll Sánchez, Thibaut Tachon, Pierre Leca, Teng Su and Chong Li",
    abstract: "Developing large-scale AI systems requires extensive on-machine tuning: engineers evaluate hundreds of parallel configurations by trial and error, at considerable cost in accelerator rental and compute time. Existing performance models are either tied to specific frameworks or too coarse for modern distributed workloads. We present AMAI, a performance analysis framework featuring (i) a declarative domain-specific language for describing distributed deep-learning computations, and (ii) compositional cost semantics that map programs into symbolic models of time and per-device memory. Models are parameterized by hardware constants and structural variables that define the parallelism configuration. As a result, descriptions can be analyzed at any scale and reused across machines. Predictions stay within 3 percent of measured step time and peak memory across batch-size and data-parallel scaling when analyzing the training of Qwen3.5 0.8B on a multi-node NPU cluster.",
    pdfUrl: "/docs/amai-paper.pdf",
  },
  {
    id: "achr-paper",
    kind: "Journal Paper",
    title: "Accelerating DNN Communications by Hierarchical Resharding",
    venue: "International Journal of Parallel Programming (IJPP)",
    date: "Under review",
    authors: "Rubén Coll Sánchez, Hongxing Wang, Hector Buffière, Pierre Leca, Teng Su and Chong Li",
    abstract: "High-level deep learning frameworks have been proposed to simplify the deployment of deep learning models, including their parallelization on a given machine. Meanwhile, modern parallel machines leverage different types and levels of communication to interconnect devices in order to maximize their computing power. We formalize data redistribution costs and propose an algorithm that efficiently schedules data redistributions on hierarchical parallel machines, so that large data transfers take place between closely connected devices and only small ones traverse slower links. Our approach is implemented in the HyperParallel open-source framework and applied to the end-to-end training of three state-of-the-art large language models on up to 128 accelerators, where we observe speedups of up to 1.204x in training step time.",
    pdfUrl: "/docs/achr-paper.pdf",
  },
  {
    id: "dp2e26_poster",
    kind: "Poster",
    title: "A Performance-Aware Algebraic Method for Rapid Modelling of Distributed AI",
    venue: "DP2E-AI 2026",
    date: "June 2026",
    authors: "Rubén Coll Sánchez, Chong Li and Thibaut Tachon",
  },
]

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Home">
        <span className="wordmark-mark" aria-hidden="true">R</span>
        <span>Home</span>
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#publications">Publications</a>
        <a href="#software">Software</a>
      </nav>
    </header>
  )
}

const mail_address = "rubencollsanchez@gmail.com"
const phone_number = "+33785500387" 
const linkedin_handle = "ruben-coll-sanchez-93aa8a223/"
const github_handle = "ruben-coll-sanchez"
const orcid_id = "0009-0003-4573-7292"

function ProfileLinks({ className = "" }: { className?: string }) {
  return (
    <nav className={`profile-links ${className}`} aria-label="Contact and social profiles">
      <a className="profile-icon-link" href={`mailto:${mail_address}`} aria-label="Email Rubén">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 6.5h17v11h-17z" /><path d="m4 7 8 6 8-6" /></svg>
      </a>
      <a className="profile-icon-link" href={`tel:${phone_number}`} aria-label="Call Rubén">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.8h3.1l1.4 4.1-2.1 1.6a15 15 0 0 0 4.9 4.9l1.6-2.1 4.1 1.4v3.1c0 1-.8 1.8-1.8 1.8C10.1 18.6 5.4 13.9 5.4 7.6c0-1 .8-1.8 1.8-1.8Z" /></svg>
      </a>
      <span className="profile-link-divider" aria-hidden="true" />
      <a className="profile-icon-link" href={`https://www.linkedin.com/in/${linkedin_handle}`} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9v10M5 5.5v.1M10 19v-6c0-2 1.1-3.2 3-3.2s3 1.2 3 3.2v6M10 10v9" /><circle cx="5" cy="5.5" r="1" /></svg>
      </a>
      <a className="profile-icon-link" href={`https://github.com/${github_handle}`} target="_blank" rel="noreferrer" aria-label="GitHub profile">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.2 1.3-4.2-2.1-5.9-2.5M15 21v-3.2c0-.9.1-1.5-.4-2.1 3.3-.4 6.7-1.6 6.7-7.1a5.5 5.5 0 0 0-1.5-3.8 5.1 5.1 0 0 0-.1-3.8s-1.2-.4-4 1.5a13.6 13.6 0 0 0-7.3 0c-2.8-1.9-4-1.5-4-1.5a5.1 5.1 0 0 0-.1 3.8 5.5 5.5 0 0 0-1.5 3.8c0 5.5 3.4 6.7 6.7 7.1-.5.6-.5 1.3-.5 2.1V21" /></svg>
      </a>
      <a className="profile-icon-link" href={`https://orcid.org/${orcid_id}`} target="_blank" rel="noreferrer" aria-label="ORCID profile">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><circle cx="8.2" cy="8" r="1" /><path d="M8.2 10.5v5.7M11 10.5v5.7h2.4a2.8 2.8 0 0 0 0-5.7H11Z" /></svg>
      </a>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">Rubén Coll Sánchez<span className="hero-period">.</span></h1>
        <p className="hero-role">Junior R&amp;D Engineer at Huawei Paris</p>
        <p className="hero-description">
          Distributed ML/HPC Systems. Heterogeneous computing. 
	  Analytical models of performance.
        </p>
        <a className="text-link" href="#publications">
          Explore my research <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="hero-aside">
        <figure className="hero-profile">
          <img
            className="profile-photo"
            src={profile_picture_name}
            alt="Rubén Coll Sánchez standing in front of the Eiffel Tower in Paris."
            fetchPriority="high"
          />
        </figure>
        <ProfileLinks />
      </div>
    </section>
  )
}

const skills = [
  "Parallel & Distributed Computing",
  "HPC Systems",
  "Hardware Architecture",
  "Compilers",
  "AI/ML Training & Inference",
  "Programming models",
  "HW/SW Codesign",
]

const main_description = "I work towards simplifying the complexity of large-scale heterogenous computing systems. My approach is using powerful theoretical constructs to unify the study of their performance, energy consumption and interactions. "


function AboutSection() {
  return (
    <section className="content-section about-section" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <h2 id="about-title">Profile and research interests.</h2>
      </div>
      <div className="about-body">
        <div className="education-line" aria-label="Education">
	  { skills.map((skill) => ( <span key={skill}>{skill}</span> )) }
        </div>
        <div className="about-copy">
          <p className="lead-copy">
	    I make systems easier to understand.
	  </p>
	  <p>
	    My work is directed towards formal methods that characterize heterogeneous computer architectures, and explain the behaviour of the processes that run on them. My targets are properties that matter in practice, yet remain difficult to approach: end-to-end performance, resource consumption, efficiency...
	  </p>
	  <p>
	    I aim to offer unified, simplified views of complex computer systems, that can be reliably used to make strategic decisions. My approach has been applied effectively on distributed ML training workloads.
	  </p>
        </div>
	<span>  </span>
        <a className="cv-link" href="/docs/CV_RCS.pdf" target="_blank" rel="noreferrer">
          View CV <span>(PDF)</span><span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}

function PublicationsSection() {

  function render_abstract(p: Publication) {
    if (p.abstract) {
      return (
	<details className="publication-abstract">
          <summary>Abstract</summary>
          <p>{p.abstract}</p>
        </details>
      )
    } else return (<></>)
  }

  function AbstractDisclosure({p}: Publication) {
    const [isOpen, setIsOpen] = useState(false)
    const panelId = useId()
    
    if (!p.abstract) return <></>

    return (
      <div className="publication-abstract">
	<button
	  className="publication-abstract-toggle"
	  type="button"
	  aria-expanded={isOpen}
	  aria-controls={panelId}
	  onClick={() => setIsOpen((open) => !open)}
	>
	<span>Abstract</span>
        <span className="publication-abstract-chevron" aria-hidden="true" />
	</button>
	<div
	  className={`publication-abstract-panel${isOpen ? " is-open" : ""}`}
	  id={panelId}
	  aria-hidden={!isOpen}
	  inert={!isOpen}
	>
	  <div className="publication-abstract-content">
	    <p>{p.abstract}</p>
	  </div>
	</div>
      </div>
    )
  }

  function render_pdfurl(p: Publication) {
    if (p.pdfUrl) {
      return (
        <a href={p.pdfUrl} target="_blank" rel="noreferrer">
          PDF <span aria-hidden="true">↗</span>
        </a>
      )
    } else return (<></>)
  }

  function render_publicurl(p: Publication) {
    if (p.publicUrl) {
      return (
        <a href={p.publicUrl} target="_blank" rel="noreferrer">
          Public Version <span aria-hidden="true">↗</span>
        </a>
      )
    } else return (<></>)
  }

  return (
    <section className="publications-section" id="publications" aria-labelledby="publications-title">
      <div className="wide-section-heading">
        <h2 id="publications-title">Publications.</h2>
      </div>
      <ol className="publication-list">
        {publications.map((publication) => (
          <li className="publication-entry" key={publication.id}>
            <div className="publication-entry-topline">
              <span className="publication-kind">{publication.kind}</span>
              <span className="publication-date">{publication.date}</span>
            </div>
            <h3>{publication.title}</h3>
            <p className="publication-authors">{publication.authors}</p>
            <p className="publication-venue">{publication.venue}</p>
	    <AbstractDisclosure p={publication} />
            <div className="publication-actions" aria-label={`${publication.title} links`}>
	      { render_pdfurl(publication) }
	      { render_publicurl(publication) }
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function SoftwareSection() {
  return (
    <section className="software-section" id="software" aria-labelledby="software-title">
      <div className="wide-section-heading">
        <h2 id="software-title">Software.</h2>
      </div>
      <ul className="software-list">
        <li className="software-entry">
          <p className="software-type">Research Artifact</p>
          <h3>AMAI</h3>
          <p className="software-description">
	    A lightweight performance analysis framework for AI/ML workloads and tensor computations
          </p>
          <div className="software-actions">
            <a href="https://github.com/TheNuber/AMAI" target="_blank" rel="noreferrer">
              GitHub repository <span aria-hidden="true">↗</span>
            </a>
            <a href="https://doi.org/10.5281/zenodo.22895946" target="_blank" rel="noreferrer">
              DOI <span aria-hidden="true">↗</span>
            </a>
          </div>
        </li>
      </ul>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-actions">
        <nav className="footer-contact-links" aria-label="Contact">
          <a href={`mailto:${mail_address}`}> {mail_address}</a>
	  <p>·</p>
          <a href={`https://www.linkedin.com/in/${linkedin_handle}`} target="_blank" rel="noreferrer">
	    LinkedIn </a>
        </nav>
      </div>
      <div className="footer-actions">
        <a className="back-to-top" href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}

export function RubenPortfolio() {
  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <PublicationsSection />
        <SoftwareSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default RubenPortfolio
