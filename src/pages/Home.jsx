import "../css/Home.css";

const Home = () => {
  return (
    <div className="hero-section">
      <div className="main-heading">
        <h1>Creative Animal</h1>
      </div>
      <div className="sub-heading">
        <svg width="400" height="250" className="circular-text">
          <defs>
            <path
              id="curveTop"
              d="M 50,180 A 150,100 0 0 1 350,180"
              fill="none"
            />
            <path
              id="curveBottom"
              d="M 50,180 A 100,100 0 0 0 350,180"
              fill="none"
            />
          </defs>

          <text fill="white" fontSize="70" fontWeight="bold">
            <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
              TURNING
            </textPath>
          </text>

          <text fill="white" fontSize="70" fontWeight="bold">
            <textPath href="#curveBottom" startOffset="50%" textAnchor="middle">
              IDEAS
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Home;
