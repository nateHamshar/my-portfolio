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
          <p className="about-desc">I am a passionate front end developer, driven by building beautiful and functional website and web apps. I love to learn new things about coding, and push myself to learn more every day. And when I'm not coding, I have this crazy dog to play with!</p>
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
          <img className="project-image" src={require("./images/temp-image.webp")} alt="temp img"/>
          <p className='project-desc'>This will be a small description of the project that will be here. Probably will include a reason for why the project was made. Then I will note the tools that were used.</p>
          <div className='links-div'>
            <a href="google.com" target="_blank" rel="noreferrer" className="live-project">Live Project</a>
            <a href="google.com" target="_blank" rel="noreferrer" className="project-code">Source Code</a>
          </div>
        </div>
        <div className="project-container">
          <img className="project-image" src={require("./images/temp-image.webp")} alt="temp img"/>
          <p className='project-desc'>This will be a small description of the project that will be here. Probably will include a reason for why the project was made. Then I will note the tools that were used.</p>
          <div className='links-div'>
            <a href="google.com" target="_blank" rel="noreferrer" className="live-project">Live Project</a>
            <a href="google.com" target="_blank" rel="noreferrer" className="project-code">Source Code</a>
          </div>
        </div>
        <div className="project-container">
          <img className="project-image" src={require("./images/temp-image.webp")} alt="temp img"/>
          <p className='project-desc'>This will be a small description of the project that will be here. Probably will include a reason for why the project was made. Then I will note the tools that were used.</p>
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
