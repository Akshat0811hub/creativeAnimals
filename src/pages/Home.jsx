import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Play,
  Star,
  Users,
  Award,
  Coffee,
  Eye,
  ExternalLink,
} from "lucide-react";
import "../css/Home.css";
import logo from "../../public/assets/logo.png";
import pro1 from "../../public/assets/pro1.png";
import pro2 from "../../public/assets/pro2.png";
import pro3 from "../../public/assets/pro3.png";
import pro4 from "../../public/assets/pro4.png";
import pro5 from "../../public/assets/pro5.png";
import pro6 from "../../public/assets/pro6.png";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    projects: false,
    founders: false,
    cta: false,
  });

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const foundersRef = useRef(null);
  const ctaRef = useRef(null);

  // Sample project images - replace with your actual images
  const projects = [
    {
      id: 1,
      title: "Packaging design",
      category: "Branding",
      image: pro1
    },
    {
      id: 2,
      title: "Print Ads",
      category: "Package Design",
      image: pro2
    },
    {
      id: 3,
      title: "Product Photography",
      category: "Marketing",
      image: pro3
    },
    {
      id: 4,
      title: "Digital Banner",
      category: "Web Design",
      image: pro4
    },
    {
      id: 5,
      title: "Brand Identity",
      category: "Branding",
      image: pro5
    },
    {
      id: 6,
      title: "CGI Ads",
      category: "Advertising",
      image: pro6
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute("data-section");
          setIsVisible((prev) => ({ ...prev, [sectionName]: true }));

          // Add stagger animation for child elements
          const children = entry.target.querySelectorAll("[data-animate]");
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("animate-in");
            }, index * 150);
          });
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    const sections = [heroRef, aboutRef, projectsRef, foundersRef, ctaRef];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Parallax effect for hero elements
  const parallaxOffset = scrollY * 0.5;
  const heroScale = 1 + scrollY * 0.0002;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleImageClick = (project) => {
    setSelectedImage(project);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="home-container">
      
      {/* Navigation */}
      <nav className={`navigation ${scrollY > 50 ? "navigation-scrolled" : ""}`}>
        <div className="nav-content">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <a href="#home" className="mobile-nav-link">Home</a>
              <a href="#about" className="mobile-nav-link">About</a>
              <a href="#projects" className="mobile-nav-link">Projects</a>
              <a href="#services" className="mobile-nav-link">Services</a>
              <a href="#contact" className="mobile-nav-link">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="hero-section"
        ref={heroRef}
        data-section="hero"
      >
        <div
          className="hero-background"
          style={{
            transform: `translateY(${parallaxOffset}px) scale(${heroScale})`,
          }}
        ></div>

        {/* Animated background elements */}
        <div className="hero-animations">
          <div
            className="hero-circle hero-circle-1"
            style={{
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)`,
            }}
          ></div>
          <div
            className="hero-circle hero-circle-2"
            style={{
              transform: `translate(${-scrollY * 0.1}px, ${scrollY * 0.1}px)`,
            }}
          ></div>
        </div>

        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-text">
              <h1 className="hero-title" data-animate>
                <span className="hero-title-line gradient-text-1">
                  Welcome to
                </span>
                <span className="hero-title-line">Creative</span>
                <span className="hero-title-line gradient-text-2">Animal</span>
              </h1>

              <p className="hero-description" data-animate>
                At Creative Animals, we believe that creativity is the key to
                building unforgettable brands. As a full-service branding and
                advertising agency, we combine innovative ideas with strategic
                insights to craft powerful, compelling narratives that resonate
                with your audience.
              </p>

              <div className="hero-buttons" data-animate>
                <button className="btn-primary">
                  Get Started
                  <ArrowRight size={20} className="btn-arrow" />
                </button>
                <button className="btn-secondary">
                  <Play size={20} />
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="hero-features">
              <div className="features-card" data-animate>
                <div className="features-list">
                  <div className="feature-item" data-animate>
                    <div className="feature-icon feature-icon-purple">
                      <Star size={24} />
                    </div>
                    <div className="feature-content">
                      <h3 className="feature-title">Award Winning</h3>
                      <p className="feature-description">Design Excellence</p>
                    </div>
                  </div>

                  <div className="feature-item" data-animate>
                    <div className="feature-icon feature-icon-blue">
                      <Users size={24} />
                    </div>
                    <div className="feature-content">
                      <h3 className="feature-title">Expert Team</h3>
                      <p className="feature-description">
                        Creative Professionals
                      </p>
                    </div>
                  </div>

                  <div className="feature-item" data-animate>
                    <div className="feature-icon feature-icon-pink">
                      <Award size={24} />
                    </div>
                    <div className="feature-content">
                      <h3 className="feature-title">Quality Assured</h3>
                      <p className="feature-description">Exceptional Results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="about-section"
        ref={aboutRef}
        data-section="about"
      >
        <div className="section-container">
          <div className="section-header" data-animate>
            <h2 className="section-title">
              About <span className="text-accent">Us</span>
            </h2>
            <p className="section-description">
              Five Years ago, in a small studio with big dreams, Creative
              Animals was born. The brainchild of Leonardo, an eccentric artist
              with a flair for breaking conventions, the agency started with a
              simple mission: to design visual identities that are as bold and
              determined as the wildest creatures in the animal kingdom.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card about-card-1" data-animate>
              <div className="about-icon about-icon-1">
                <Coffee size={32} />
              </div>
              <h3 className="about-card-title">Designing</h3>
              <p className="about-card-description">
                Designing at our creative agency is about transforming ideas
                into impactful visuals that connect, inspire, and elevate
                brands.
              </p>
            </div>

            <div className="about-card about-card-2" data-animate>
              <div className="about-icon about-icon-2">
                <Users size={32} />
              </div>
              <h3 className="about-card-title">Packaging</h3>
              <p className="about-card-description">
                Packaging is where creativity meets function, turning products
                into experiences that captivate and stand out on every shelf.
              </p>
            </div>

            <div className="about-card about-card-3" data-animate>
              <div className="about-icon about-icon-3">
                <Award size={32} />
              </div>
              <h3 className="about-card-title">Marketing</h3>
              <p className="about-card-description">
                Marketing at our creative agency is about crafting strategies
                that connect, engage, and drive results for your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="projects-section"
        ref={projectsRef}
        data-section="projects"
      >
        {/* Yellow themed background elements */}
        <div className="projects-bg-element projects-bg-1"></div>
        <div className="projects-bg-element projects-bg-2"></div>

        <div className="section-container">
          <div className="section-header" data-animate>
            <h2 className="projects-title">
              Our <span className="projects-title-accent">Projects</span>
            </h2>
            <p className="section-description">
              Discover our portfolio of creative projects that showcase our passion for design excellence and innovative solutions.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
                data-animate
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                onClick={() => handleImageClick(project)}
              >
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="project-overlay"></div>
                  
                  {/* Hover overlay */}
                  <div className="project-hover-overlay">
                    <div className="project-hover-icon">
                      <Eye size={24} color="#000" />
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-category">
                    {project.category}
                  </div>
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  <div className="project-link">
                    <ExternalLink size={16} />
                    <span>Click to view</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="modal-image"
            />
            <button onClick={closeModal} className="modal-close-btn">
              <X size={20} color="#000" />
            </button>
            <div className="modal-info">
              <h3 className="modal-title">{selectedImage.title}</h3>
              <p className="modal-category">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* Founders Section */}
      <section
        className="founders-section"
        ref={foundersRef}
        data-section="founders"
      >
        <div className="section-container">
          <div className="section-header" data-animate>
            <h2 className="section-title">
              The <span className="text-accent">Founders</span>
            </h2>
            <p className="section-description">
              Meet the visionaries behind our creative agency
            </p>
          </div>

          <div className="founders-content">
            <div className="founders-card" data-animate>
              <div className="founders-grid">
                <div className="founders-story" data-animate>
                  <h3 className="founders-story-title">Our Story</h3>
                  <p className="founders-story-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius sequi commodi dignissimos optio, beatae, eos
                    necessitatibus nisi. Nam cupiditate consectetur nostrum qui!
                    Repellat natus nulla, nisi aliquid, asperiores impedit
                    tempora sequi est reprehenderit cumque explicabo, dicta.
                  </p>
                  <p className="founders-story-text">
                    Rem nihil ullam totam ea voluptas quibusdam repudiandae id
                    ut at iure! Totam, a! Our journey began with a simple
                    belief: great design can change the world.
                  </p>
                </div>

                <div className="founders-team">
                  <div className="founder-card" data-animate>
                    <div className="founder-info">
                      <div className="founder-avatar founder-avatar-1"></div>
                      <div className="founder-details">
                        <h4 className="founder-name">Sarah Johnson</h4>
                        <p className="founder-role">Creative Director</p>
                      </div>
                    </div>
                  </div>

                  <div className="founder-card" data-animate>
                    <div className="founder-info">
                      <div className="founder-avatar founder-avatar-2"></div>
                      <div className="founder-details">
                        <h4 className="founder-name">Mike Chen</h4>
                        <p className="founder-role">Lead Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" ref={ctaRef} data-section="cta">
        <div className="cta-content">
          <h2 className="cta-title" data-animate>
            Ready to Create <span className="text-accent">Together?</span>
          </h2>
          <p className="cta-description" data-animate>
            Let's bring your vision to life with our creative expertise and
            innovative solutions.
          </p>
          <button className="btn-cta" data-animate>
            Start Your Project
            <ArrowRight size={24} className="btn-arrow" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-main">Creative</span>
            <span className="logo-accent">animals</span>
          </div>
          <p className="footer-tagline">Designing a Better World Today</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;