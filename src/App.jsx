import { useEffect, useState } from 'react'
import { FaInstagram, FaLinkedinIn, FaVimeoV } from 'react-icons/fa'
import { SiLetterboxd } from 'react-icons/si'
import './App.css'

const imageLinks = {
  homeSection: {
    hero: '/images/homeSection/hero.png',
    reelThumbnail: '/images/homeSection/reel-thumbnail.jpg',
    stills1: '/images/homeSection/stills1.JPG',
    stills2: '/images/homeSection/stills2.JPG',
    stills3: '/images/homeSection/stills3.JPG',
  },
  aboutSection: {
    headshot: '/images/aboutSection/headshot.jpeg',
    bts1: '/images/aboutSection/bts1.JPG',
    bts2: '/images/aboutSection/bts2.jpeg',
    bts3: '/images/aboutSection/bts3.JPEG',
    bts4: '/images/aboutSection/bts4.JPG',
  },
  // Placeholder stills reused from existing assets until final artwork is supplied.
  work: {
    navys: '/images/ACQ STILL.jpeg',
    mrTattoo: '/images/SISTERLAND STILL.jpeg',
    aLittleNudge: '/images/ITS STILL.jpeg',
    chaosConcerto: '/images/CC STILL.jpeg',
    partakeHolidays: '/images/Still 2026-04-07 203014_1.87.1.jpeg',
    breathHeld: '/images/Still 2026-04-07 203014_1.1.1.jpeg',
  },
}

// Hero background slideshow — cross-fades through a set of stills.
const heroStills = [
  imageLinks.homeSection.stills1,
  imageLinks.homeSection.stills2,
  imageLinks.homeSection.stills3,
  '/images/CC STILL.jpeg',
  '/images/ITS STILL.jpeg',
]

const followSocialLinks = {
  vimeo: 'https://vimeo.com/user154303130',
  instagram: 'https://www.instagram.com/emanuel.ortiiz/',
  linkedin: 'https://www.linkedin.com/in/emanuel-ortiz-892890271/',
  letterboxd: 'https://letterboxd.com/emanuelortiz/'
}

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const navTabs = ['home', 'work', 'services', 'about', 'contact']

  return (
    <div
      className="app"
      style={{
        '--hero-image': `url('${imageLinks.homeSection.hero}')`,
        '--reel-thumbnail-image': `url('${imageLinks.homeSection.reelThumbnail}')`
      }}
    >
      <header className="header">
        <nav className="navbar">
          <button className="logo" onClick={() => setActiveTab('home')}>
            EMANUEL ORTIZ
          </button>
          <ul className="nav-links">
            {navTabs.map((tab) => (
              <li key={tab}>
                <button
                  className={activeTab === tab ? 'active' : ''}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="main-content">
        {activeTab === 'home' && <HomeSection imageLinks={imageLinks} setActiveTab={setActiveTab} />}
        {activeTab === 'work' && <WorkSection imageLinks={imageLinks} />}
        {activeTab === 'services' && <ServicesSection />}
        {activeTab === 'about' && <AboutSection imageLinks={imageLinks} />}
        {activeTab === 'contact' && <ContactSection />}
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-brand">EMANUEL ORTIZ</p>
          <div className="footer-socials">
            <a
              href={followSocialLinks.vimeo}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="Vimeo"
            >
              <FaVimeoV size={22} />
            </a>
            <a
              href={followSocialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href={followSocialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={22} />
            </a>
          </div>
          <p className="footer-copyright">&copy; 2026 Emanuel Ortiz</p>
        </div>
      </footer>
    </div>
  )
}

function HomeSection({ imageLinks, setActiveTab }) {
  const { stills1, stills2, stills3 } = imageLinks.homeSection
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((current) => (current + 1) % heroStills.length)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <section className="hero-section">
        <div className="hero-slideshow">
          {heroStills.map((src, index) => (
            <div
              key={src}
              className={`hero-slide ${index === slide ? 'is-active' : ''}`}
              style={{ backgroundImage: `url('${src}')` }}
            />
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-name">EMANUEL ORTIZ</h1>
          <p className="hero-subtitle">Sound Designer &bull; Re-Recording Mixer &bull; Post-Production</p>
          <p className="hero-tagline">
            Immersive worlds for narrative films, commercials, and music videos.
          </p>
          <div className="hero-cta-row">
            <button className="hero-cta" onClick={() => setActiveTab('work')}>
              View Work
            </button>
            <button className="hero-cta secondary" onClick={() => setActiveTab('contact')}>
              Get In Touch
            </button>
            <a
              className="hero-reel-link"
              href={followSocialLinks.vimeo}
              target="_blank"
              rel="noreferrer"
            >
              Watch Reel
            </a>
          </div>
        </div>
      </section>

      <section className="home-stills-section" aria-label="Stills">
        <div className="home-stills-grid">
          <img src={stills1} alt="" className="home-stills-image" />
          <img src={stills2} alt="" className="home-stills-image" />
          <img src={stills3} alt="" className="home-stills-image" />
        </div>
      </section>

      {/* Director's reel block — uncomment to restore
      <section className="directors-reel-section">
        <div className="reel-header">
          <h2 className="reel-title">DIRECTOR'S REEL</h2>
          <p className="reel-subtitle">
            For a full list of festivals and awards, <a href="#" className="reel-link">click here</a>.
          </p>
          <div className="festival-icons">
            <div className="festival-icon">🎬</div>
            <div className="festival-icon">🏆</div>
            <div className="festival-icon">📽️</div>
            <div className="festival-icon">🎞️</div>
            <div className="festival-icon">🎭</div>
          </div>
        </div>

        <div className="reel-video-container">
          <div className="video-player">
            <div className="video-thumbnail">
              <div className="thumbnail-img"></div>
              <div className="play-button-overlay">
                <div className="red-play-button">
                  <Play size={32} fill="white" color="white" />
                </div>
              </div>
            </div>
            <div className="video-info">
              <div className="video-title-section">
                <h3 className="video-title">My 2024 Cinematography Reel</h3>
                <p className="video-creator">Emanuel Ortiz</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
    </>
  )
}

function WorkSection({ imageLinks }) {
  const projects = [
    { title: 'NAVYS', name: 'Maddie Jayne', image: imageLinks.work.navys, link: '#' },
    { title: 'MR. TATTOO', name: 'Autumn Stallia', image: imageLinks.work.mrTattoo, link: '#' },
    { title: 'A LITTLE NUDGE', name: 'Blinkko', image: imageLinks.work.aLittleNudge, link: '#' },
    { title: 'CHAOS CONCERTO', name: 'Emanuel Ortiz', image: imageLinks.work.chaosConcerto, link: '#' },
    { title: 'PARTAKE IN THE HOLIDAYS', name: 'Partake', image: imageLinks.work.partakeHolidays, link: '#' },
    { title: 'BREATH HELD', name: 'USC Swim Club', image: imageLinks.work.breathHeld, link: '#' },
  ]

  return (
    <section className="work-section">
      <div className="work-container">
        <h2 className="section-heading">Selected Projects</h2>
        <div className="work-grid">
          {projects.map((project) => (
            <a
              key={project.title}
              className="work-card"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="work-card-thumb">
                <img src={project.image} alt={project.title} />
              </div>
              <p className="work-card-caption">
                <span className="work-card-title">{project.title}</span>
                <span className="work-card-divider"> | </span>
                <span className="work-card-name">{project.name}</span>
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    'Sound Design',
    'Re-Recording Mixing',
    'Foley Editing',
    'ADR Editing',
    'Dialogue Editing',
    'Commercial & Music Video Post',
  ]

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="section-heading">Services</h2>
        <ul className="services-list">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function AboutSection({ imageLinks }) {
  const { bts1, bts2, bts3, bts4 } = imageLinks.aboutSection

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <p className="about-eyebrow">EMANUEL ORTIZ</p>
            <h1 className="about-main-title">
              Emanuel Ortiz is an award-winning sound designer from the USC School of Cinematic Arts.
            </h1>

            <div className="about-bio">
              <p className="bio-paragraph">
                Working across films, commercials, music videos, and short-form media. Alumni of the
                Film &amp; Television Production at the USC School of Cinematic Arts.
              </p>

              <p className="bio-paragraph">
                He is also the creative executive of LUMIEREY, a production company dedicated to
                producing bold, visually striking work and supporting emerging storytellers.
              </p>
            </div>
          </div>
          <div className="about-image">
            <div className="headshot">
              <img
                src={imageLinks.aboutSection.headshot}
                alt="Emanuel Ortiz"
                className="headshot-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-bts">
        <div className="about-bts-grid">
          <img src={bts1} alt="" className="about-bts-image" />
          <img src={bts2} alt="" className="about-bts-image" />
          <img src={bts3} alt="" className="about-bts-image" />
          <img src={bts4} alt="" className="about-bts-image" />
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-layout">
          {/* Left Column - Reach Out Form */}
          <div className="reach-out-column">
            <h2 className="section-title">Reach Out</h2>
            <form className="reach-out-form">
              <div className="form-field">
                <label htmlFor="fullname">Full name</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Full name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="submit" className="send-button">SEND NOW</button>
            </form>
          </div>

          {/* Right Column - Contact & Follow */}
          <div className="contact-info-column">
            <div className="contact-subsection">
              <h3 className="section-title">CONTACT</h3>
              <p className="contact-email">emanuelortizfilm@gmail.com</p>
            </div>

            <div className="follow-subsection">
              <h3 className="section-title">FOLLOW</h3>
              <div className="social-icons">
                <a href={followSocialLinks.vimeo} target="_blank" rel="noreferrer" className="social-icon" aria-label="Vimeo">
                  <FaVimeoV size={24} />
                </a>
                <a href={followSocialLinks.instagram} target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                  <FaInstagram size={24} />
                </a>
                <a href={followSocialLinks.linkedin} target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                  <FaLinkedinIn size={24} />
                </a>
                <a href={followSocialLinks.letterboxd} target="_blank" rel="noreferrer" className="social-icon" aria-label="Letterboxd">
                  <SiLetterboxd size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
