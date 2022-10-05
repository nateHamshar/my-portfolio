import './App.css';
import { faGithub, faJs, faCss3, faHtml5, faReact, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <div className="welcome" id='welcome'>
        <h1 className='name'>Hi! I'm <span className="my-name">Nate</span>,</h1>
        <p className="desc">and I'm a web developer.</p>
      </div>
      <div className="about" id='about'>
        <div className="col-one">
          <h1 className='about-header'>About Me</h1>
          <p className="about-desc">I am a passionate front end developer with a drive to build beautiful and functional websites and web apps. I love to learn new things about coding, and push myself to learn more every day. And when I'm not coding, I have this crazy dog to play with!</p>
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
            <li>Most comfortable using React, but always looking to expand my knowledge</li>
            <li>Comfortable working with APIs, and using Axios</li>
            <li>Version control with Git - <a rel="noreferrer" target="_blank" href='https://github.com/nateHamshar' className='gitLink'>My GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="projects" id='projects'>
        <h1 className="projects-header">Projects I've Worked On</h1>
        <div className='project-section'>
        <div className="project-container">
          <img className="project-image" src={require("./images/business.jpg")} alt="business tracker"/>
          <p className='project-desc'>A business tracker that keeps track of sales and expenses. This project was created using React, and uses Firebase to store all of the data. </p>
          <div className='links-div'>
            <a href="https://natehamshar.github.io/business-tracker/" target="_blank" rel="noreferrer" className="live-project">Live Project</a>
            <a href="https://github.com/nateHamshar/business-tracker/" target="_blank" rel="noreferrer" className="project-code">Source Code</a>
          </div>
        </div>
        <div className="project-container">
          <img className="project-image" src={require("./images/pokedex.JPG")} alt="pokedex"/>
          <p className='project-desc'>This Pokedex allows a user to search for a pokemon and get some info about them. This is a React project, and uses a public API to get the data.</p>
          <div className='links-div'>
            <a href="https://natehamshar.github.io/offbrand-pokedex/" target="_blank" rel="noreferrer" className="live-project">Live Project</a>
            <a href="https://github.com/nateHamshar/offbrand-pokedex/" target="_blank" rel="noreferrer" className="project-code">Source Code</a>
          </div>
        </div>
        <div className="project-container">
          <img className="project-image" src={require("./images/money.JPG")} alt="money counting app"/>
          <p className='project-desc'>An interactive learning game designed to help practice counting money. A React project that uses states to keep track of user inputs. </p>
          <div className='links-div'>
            <a href="https://nateHamshar.github.io/interactive-money-counting" target="_blank" rel="noreferrer" className="live-project">Live Project</a>
            <a href="https://github.com/nateHamshar/interactive-money-counting" target="_blank" rel="noreferrer" className="project-code">Source Code</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
