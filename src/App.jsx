import { useState } from 'react'
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
  directing: {
    teenhood: '/images/directing/teenhood.jpg',
    missingAtSea: '/images/directing/missing-at-sea.jpg',
    theSummerField: '/images/directing/the-summer-field.jpg',
    desertDreams: '/images/directing/desert-dreams.jpg'
  }
}

const followSocialLinks = {
  vimeo: 'https://vimeo.com/user154303130',
  instagram: 'https://www.instagram.com/emanuel.ortiiz/',
  linkedin: 'https://www.linkedin.com/in/emanuel-ortiz-892890271/',
  letterboxd: 'https://letterboxd.com/emanuelortiz/'
}

function App() {
  const [activeTab, setActiveTab] = useState('home')

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
          <h1 className="logo">EMANUEL ORTIZ</h1>
          <ul className="nav-links">
            <li>
              <button 
                className={activeTab === 'home' ? 'active' : ''} 
                onClick={() => setActiveTab('home')}
              >
                HOME
              </button>
            </li>
            <li>
              <button 
                className={activeTab === 'about' ? 'active' : ''} 
                onClick={() => setActiveTab('about')}
              >
                ABOUT
              </button>
            </li>
            <li>
              <button 
                className={activeTab === 'directing' ? 'active' : ''} 
                onClick={() => setActiveTab('directing')}
              >
                DIRECTING
              </button>
            </li>
            <li>
              <button 
                className={activeTab === 'post work' ? 'active' : ''} 
                onClick={() => setActiveTab('post work')}
              >
                POST WORK
              </button>
            </li>
            <li>
              <button 
                className={activeTab === 'contact' ? 'active' : ''} 
                onClick={() => setActiveTab('contact')}
              >
                CONTACT
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        {activeTab === 'home' && <HomeSection imageLinks={imageLinks} />}
        {activeTab === 'about' && <AboutSection imageLinks={imageLinks} />}
        {activeTab === 'directing' && <DirectingSection imageLinks={imageLinks} />}
        {activeTab === 'post work' && <PostWorkSection />}
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

function HomeSection({ imageLinks }) {
  const { stills1, stills2, stills3 } = imageLinks.homeSection

  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-name">EMANUEL ORTIZ</h1>
          <p className="hero-tagline">DIRECTOR | PRODUCER | SOUND DESIGNER</p>
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

function AboutSection({ imageLinks }) {
  const { bts1, bts2, bts3, bts4 } = imageLinks.aboutSection

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-main-title">
              Emanuel Ortiz is a director, producer, and sound designer focused on crafting powerful emotionally driven stories with a cinematic edge. His work blends striking visual storytelling with immersive sound.
            </h1>
            
            <div className="about-bio">
              <p className="bio-paragraph">
              Working across films, commercials, music videos, and short-form media, Emanuel has led projects from development through post-production. He is currently studying Film & Television Production at the USC School of Cinematic Arts while continuing to develop projects as a director, creative producer, and sound designer. 
              </p>
              
              <p className="bio-paragraph">
              He is also the creative executive of LUMIEREY, a production company dedicated to producing bold, visually striking work and supporting emerging storytellers.
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

function DirectingSection({ imageLinks }) {
  const films = [
    {
      title: "Teenhood",
      description: "Drama Short | 13 mins | USA | 2025",
      awards: [
        "AWARD WINNER Wyoming INTERNATIONAL FILM FESTIVAL",
        "307 International Film Festival 2025"
      ],
      image: imageLinks.directing.teenhood
    },
    {
      title: "Missing at Sea",
      description: "Drama Short | 13 mins | USA | 2024",
      awards: [
        "LA SHORTS",
        "SIDE FILM FESTIVAL",
        "CBFF 2025 SELECTED"
      ],
      image: imageLinks.directing.missingAtSea
    },
    {
      title: "The Summer Field",
      description: "Drama Short | 15 mins | USA | 2024",
      awards: [
        "Fort Lauderdale International Film Festival",
        "Indy Shorts International Film Festival"
      ],
      image: imageLinks.directing.theSummerField
    },
    {
      title: "Desert Dreams",
      description: "Documentary Short | 10 mins | USA | 2023",
      awards: [
        "Best Student Film - Lone Star Film Festival"
      ],
      image: imageLinks.directing.desertDreams
    }
  ]

  return (
    <section className="directing-section">
      <div className="directing-container">
        <div className="films-grid">
          {films.map((film, index) => (
            <div key={index} className="film-card">
              <div className="film-thumbnail">
                <img src={film.image} alt={film.title} />
              </div>
              <div className="film-awards">
                {film.awards.map((award, idx) => (
                  <div key={idx} className="award-icon">
                    <span className="award-text">{award}</span>
                  </div>
                ))}
              </div>
              <h3 className="film-title">{film.title}</h3>
              <p className="film-description">{film.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PostWorkSection() {
  const directing = [
    {
      title: "Project 1",
      description: "A modern web application built with React and Vite.",
      tech: "React, Vite, CSS3"
    },
    {
      title: "Project 2",
      description: "An e-commerce platform with dynamic features.",
      tech: "React, Node.js, Express"
    },
    {
      title: "Project 3",
      description: "A responsive dashboard with real-time data.",
      tech: "React, TypeScript, API Integration"
    }
  ]

  return (
    <section className="content-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {directing.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="tech-badge">{project.tech}</span>
          </div>
        ))}
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


