import { useEffect, useRef, useState } from 'react'
import { FaInstagram, FaLinkedinIn, FaVimeoV } from 'react-icons/fa'
import './App.css'

const imageLinks = {
  homeSection: {
    heroVideo: '/videos/hero-bg.mp4',
    heroPoster: '/images/homeSection/hero.png',
  },
  // Client logos — white / transparent marks, shown on the black hero.
  clients: [
    { name: 'Blumhouse', src: '/images/clients/blumhouse.png' },
    { name: 'Cheetos', src: '/images/clients/cheetos.png' },
    { name: 'Dead Atlantic', src: '/images/clients/dead-atlantic.png' },
    { name: 'Blinkko', src: '/images/clients/blinkko.png' },
    { name: 'Mark', src: '/images/clients/mark.png' },
    { name: 'USC Swim Club', src: '/images/clients/usc-swim-club.png' },
  ],
  aboutSection: {
    headshot: '/images/aboutSection/headshot-seated.jpg',
  },
  // Bill's Favorite Snack links off-YouTube, so it keeps a placeholder still until real
  // artwork is supplied. The other linked projects render their own YouTube thumbnail instead
  // (see YoutubeThumb) — Chase and Chaos Concerto have no thumbnail yet and render as
  // image-less "Coming Soon" cards.
  work: {
    billsFavoriteSnack: '/images/work/bills-favorite-snack.jpg',
    chaosConcerto: '/images/work/chaos-concerto.jpg',
    chase: '/images/work/chase.jpg',
  },
}

const followSocialLinks = {
  vimeo: 'https://vimeo.com/user154303130',
  instagram: 'https://www.instagram.com/emanuel.ortiiz/',
  linkedin: 'https://www.linkedin.com/in/emanuel-ortiz-892890271/',
}

function App() {
  const [activeTab, setActiveTab] = useState('home')

  // This is a single-page app — switching tabs swaps content in place rather than
  // navigating, so the browser keeps whatever scroll position you were at. Reset to
  // the top whenever the active tab changes.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeTab])

  const navTabs = ['home', 'work', 'services', 'about', 'contact']

  return (
    <div className="app">
      <header className="header">
        <nav className="navbar">
          <button className="logo" onClick={() => setActiveTab('home')}>
            FREQ
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
        {activeTab === 'about' && <AboutSection imageLinks={imageLinks} setActiveTab={setActiveTab} />}
        {activeTab === 'contact' && <ContactSection />}
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-brand">FREQ</p>
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
          <p className="footer-copyright">&copy; 2026 FREQ</p>
        </div>
      </footer>
    </div>
  )
}

function HomeSection({ imageLinks, setActiveTab }) {
  const videoRef = useRef(null)

  // React can drop the `muted` attribute on render, which blocks autoplay — force it on.
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = true
  }, [])

  return (
    <>
      <section className="hero-section">
        <video
          ref={videoRef}
          className="hero-video"
          src={imageLinks.homeSection.heroVideo}
          poster={imageLinks.homeSection.heroPoster}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-name">FREQ</h1>
          <p className="hero-subtitle">Sound Design &bull; Mixing &bull; Post Sound</p>
          <div className="hero-cta-row">
            <button className="hero-cta" onClick={() => setActiveTab('work')}>
              View Work
            </button>
            <button className="hero-cta secondary" onClick={() => setActiveTab('contact')}>
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      <section className="clients-section">
        <div className="clients-section-inner">
          <p className="clients-label">Our Clients</p>
          <div className="clients-row">
            {imageLinks.clients.map((client) => (
              <img
                key={client.name}
                src={client.src}
                alt={client.name}
                className="client-logo"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="reel-section">
        <div className="reel-section-inner">
          <h2 className="reel-section-title">The Reel</h2>
          <a
            className="reel-watch-link"
            href={followSocialLinks.vimeo}
            target="_blank"
            rel="noreferrer"
          >
            Watch the Reel
          </a>
          <p className="reel-wip-note">Full reel in progress &mdash; more work landing soon.</p>
        </div>
      </section>

      <section className="view-work-band">
        <button className="view-work-btn" onClick={() => setActiveTab('work')}>
          View Work
        </button>
      </section>
    </>
  )
}

// YouTube only renders the 1280x720 sizes for videos uploaded in HD, so fall back through
// progressively smaller sizes it always generates until one actually loads.
const YOUTUBE_THUMB_SIZES = ['maxresdefault', 'sddefault', 'hqdefault']

function YoutubeThumb({ videoId, alt }) {
  const [sizeIndex, setSizeIndex] = useState(0)

  const tryNextSize = () =>
    setSizeIndex((current) => Math.min(current + 1, YOUTUBE_THUMB_SIZES.length - 1))

  return (
    <img
      src={`https://img.youtube.com/vi/${videoId}/${YOUTUBE_THUMB_SIZES[sizeIndex]}.jpg`}
      alt={alt}
      onError={tryNextSize}
      onLoad={(event) => {
        // Instead of a real 404, YouTube serves a 120x90 grey "unavailable" placeholder
        // (as a 200 OK) when a given size doesn't exist for this video — treat that as a
        // miss too and fall back to the next size.
        const img = event.target
        if (img.naturalWidth === 120 && img.naturalHeight === 90) tryNextSize()
      }}
    />
  )
}

function WorkSection({ imageLinks }) {
  const projects = [
    {
      title: "BILL'S FAVORITE SNACK",
      name: 'Cheetos x Blumhouse "The Flavor of Fear" campaign',
      image: imageLinks.work.billsFavoriteSnack,
      link: 'https://www.us-joy.com/cheetostheflavoroffear',
    },
    {
      title: 'A LITTLE NUDGE',
      name: 'Blinkko',
      youtubeId: 'c5hShOYn4Uk',
      link: 'https://www.youtube.com/watch?v=c5hShOYn4Uk',
    },
    {
      title: 'CHAOS CONCERTO',
      name: 'Emanuel Ortiz (Award Winning Sound Design)',
      image: imageLinks.work.chaosConcerto,
      link: 'https://vimeo.com/1086667627',
    },
    {
      title: 'BREATH HELD',
      name: 'USC Swim Club',
      youtubeId: 'yjd7jU9vfhA',
      link: 'https://www.youtube.com/watch?v=yjd7jU9vfhA',
    },
    {
      title: 'FOR STORIES WE SHARE',
      name: 'Mark',
      youtubeId: '1B6a_9QZbbQ',
      link: 'https://www.youtube.com/watch?v=1B6a_9QZbbQ',
    },
    {
      title: 'CHASE',
      name: 'Dead Atlantic',
      image: imageLinks.work.chase,
      link: 'https://deadatlantic.com/',
    },
  ]

  return (
    <section className="work-section">
      <div className="work-container">
        <h2 className="section-heading">Selected Projects</h2>
        <div className="work-grid">
          {projects.map((project) => {
            const caption = (
              <p className="work-card-caption">
                <span className="work-card-title">{project.title}</span>
                <span className="work-card-divider"> | </span>
                <span className="work-card-name">{project.name}</span>
              </p>
            )

            // No video link yet — render a non-clickable card with a "Coming Soon" badge
            // and no thumbnail (no accurate still to show).
            if (!project.link) {
              return (
                <div key={project.title} className="work-card work-card-pending">
                  <div className="work-card-thumb work-card-thumb-empty">
                    <span className="work-card-pending-badge">Coming Soon</span>
                  </div>
                  {caption}
                </div>
              )
            }

            return (
              <a
                key={project.title}
                className="work-card"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="work-card-thumb">
                  {project.youtubeId ? (
                    <YoutubeThumb videoId={project.youtubeId} alt={project.title} />
                  ) : (
                    <img src={project.image} alt={project.title} />
                  )}
                </div>
                {caption}
              </a>
            )
          })}
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

function AboutSection({ imageLinks, setActiveTab }) {
  return (
    <section className="about-section">
      {/* Intro — greeting, photo, short bio */}
      <div className="about-intro">
        <div className="about-intro-inner">
          <h1 className="about-greeting">Hi, I&apos;m Emanuel.</h1>
          <div className="about-intro-grid">
            <div className="about-intro-photo-wrap">
              <img
                src={imageLinks.aboutSection.headshot}
                alt="Emanuel Ortiz"
                className="about-intro-photo"
              />
            </div>
            <div className="about-intro-copy">
              <h2 className="about-intro-title">
                Emanuel Ortiz is an award-winning sound designer from the USC School of Cinematic
                Arts.
              </h2>
              <p className="about-intro-paragraph about-intro-paragraph-lead">
                Alumnus of the Kevin Feige Division of Film &amp; Television Production at the USC
                School of Cinematic Arts, Emanuel works across sound design and re-recording
                mixing for films, commercials, music videos, and short-form media.
              </p>
              <p className="about-intro-paragraph">
                His approach is rooted in your project&apos;s specific story, using sound to
                create an atmosphere that immerses audiences into the world on screen.
              </p>
              <p className="about-intro-paragraph">
                He created FREQ as a home for bold sound-driven work. A studio built on the belief
                that the best sound pulls you in before you ever notice it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA into Contact */}
      <div className="about-story">
        <div className="about-story-inner">
          <div className="about-cta">
            <h2 className="about-cta-title">Ready For Sound?</h2>
            <button className="about-cta-btn" onClick={() => setActiveTab('contact')}>
              Get In Touch
            </button>
          </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
