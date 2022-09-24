import './App.css';
import { faGithub, faJs, faCss3, faHtml5, faReact, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <div className="welcome" id='welcome'>
        <h1 className='name'>Hi! I'm <span className="my-name">Nate</span>,</h1>
        <p className="desc">and I'm a front end web developer.</p>
      </div>
      <div className="about" id='about'>
        <div className="col-one">
          <h1 className='about-header'>About Me</h1>
          <p className="about-desc">I am a passionate front end developer driven by building beautiful and functional websites and web apps. I love to learn new things about coding, and push myself to learn more every day. And when I'm not coding, I have this crazy dog to play with!</p>
        </div>
        <div className="col-two">
          <div className='image-container'>
            <img className='about-img' src={require("./images/hera.jpg")} alt="Queen Hera" />
          </div>
        </div>
      </div>
      <div className="skills" id='skills'>
        <div className="icon-list">
          <FontAwesomeIcon icon={faGithub} className="icons"/>
          <FontAwesomeIcon icon={faGitAlt} className="icons"/>
          <FontAwesomeIcon icon={faJs} className="icons"/>
          <FontAwesomeIcon icon={faReact} className="icons"/>
          <FontAwesomeIcon icon={faCss3} className="icons"/>
          <FontAwesomeIcon icon={faHtml5} className="icons"/>
        </div>
        <div className="list">
          <h1 className='skills-header'>My Skills</h1>
          <ul className='skills-list'>
            <li>HTML5, CSS3, and JS</li>
            <li>Experience using D3, SASS, Boostrap, Semantic UI, and other libraries</li>
            <li>Most comfortable using the React, but always looking to expand my knowledge</li>
            <li>Using APIs, with Axios</li>
            <li>Version control with Git - <a rel="noreferrer" target="_blank" href='https://github.com/nateHamshar' className='gitLink'>My GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="projects" id='projects'>
        <h1 className="projects-header">Projects I've Worked On</h1>
        <div className='project-section'>
        <div className="project-container">
          <img className="project-image" src={require("./images/business.jpg")} alt="temp img"/>
          <p className='project-desc'>A business tracker that keeps track of sales and expenses. Created using React, and uses Firebase to store all of the data. </p>
          <div className='links-div'>
            <a href="https://natehamshar.github.io/business-tracker/" target="_blank" rel="noreferrer" className="live-project">Live Project</a>
            <a href="https://github.com/nateHamshar/business-tracker/" target="_blank" rel="noreferrer" className="project-code">Source Code</a>
          </div>
        </div>
        <div className="project-container">
          <img className="project-image" src={require("./images/pokedex.JPG")} alt="temp img"/>
          <p className='project-desc'>This Pokedex allows a user to search for a pokemon and get some info about them. This is a React project, and uses a public API to get the data.</p>
          <div className='links-div'>
            <a href="https://natehamshar.github.io/offbrand-pokedex/" target="_blank" rel="noreferrer" className="live-project">Live Project</a>
            <a href="https://github.com/nateHamshar/offbrand-pokedex/" target="_blank" rel="noreferrer" className="project-code">Source Code</a>
          </div>
        </div>
        <div className="project-container">
          <img className="project-image" src={require("./images/temp-image.webp")} alt="temp img"/>
          <p className='project-desc'>This will be a small description of the project that will be here. Probably will include a reason for why the project was made.</p>
          <div className='links-div'>
            <a href="google.com" target="_blank" rel="noreferrer" className="live-project">Live Project</a>
            <a href="google.com" target="_blank" rel="noreferrer" className="project-code">Source Code</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
