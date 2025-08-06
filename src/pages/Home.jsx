import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../css/Home.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const turningRef = useRef(null);
  const ideasRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top center", // when top of wrapper reaches middle of screen
        toggleActions: "play none none none",
      },
    });

    // 1. Rotate
    tl.to([turningRef.current, ideasRef.current], {
      rotation: 360,
      duration: 2,
      ease: "power2.inOut",
    })

      // 2. Fade out and move up slightly
      .to([turningRef.current, ideasRef.current], {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power1.out",
      })

      // 3. Re-appear from bottom
      .fromTo(
        [turningRef.current, ideasRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
        }
      );
  }, []);

  return (
    <div className="hero-section">
      <div className="main-heading">
        <h1>Creative Animal</h1>
      </div>

      <div className="sub-heading" ref={wrapperRef}>
        <div className="svg-wrapper">
          {/* TURNING */}
          <svg viewBox="0 0 500 300" className="circular-text" ref={turningRef}>
            <defs>
              <path
                id="curveTop"
                d="M 100,150 A 150,100 0 0 1 400,150"
                fill="none"
              />
            </defs>
            <text fill="black" fontSize="60" fontWeight="bold">
              <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
                TURNING
              </textPath>
            </text>
          </svg>

          {/* CENTERED TEXT */}
          <div className="brand-info">
            <h2>INTO ICONIC BRANDS</h2>
            <p>
              At Creative Animals, we believe that creativity is the key to
              building unforgettable brands. As a full-service branding and
              advertising agency, we combine innovative ideas with strategic
              insights to craft powerful, compelling narratives that resonate
              with your audience.
            </p>
          </div>

          {/* IDEAS */}
          <svg viewBox="0 0 500 300" className="circular-text" ref={ideasRef}>
            <defs>
              <path
                id="curveBottom"
                d="M 100,200 A 150,100 0 0 0 400,200"
                fill="none"
              />
            </defs>
            <text
              fill="black"
              fontSize="60"
              fontWeight="bold"
              letterSpacing="6"
            >
              <textPath
                href="#curveBottom"
                startOffset="50%"
                textAnchor="middle"
              >
                IDEAS
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
