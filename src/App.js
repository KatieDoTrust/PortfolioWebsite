import './App.css';
import SocialIcons from './SocialIcons/SocialList';
import ProjectsContainer from './ProjectsSlider/ProjectsContainer';
import EmailForm from './EmailForm';
import LanguageContainer from './LanguageIcons/LanguageContainer';


function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        Katie Booth - Full Stack Engineer
        <div className="social-container" >
        <SocialIcons/></div>
      </header>
    </div>
    <div className="main-container">
      <img src="/headshot.jpg" height="20%" width="20%" alt="https://unsplash.it/200/200"></img>
        <LanguageContainer/>
      <div className="about-me">
      <p>Software Developer currently working as a Full Stack Engineer at </p><a href="https://www.dotrust.co.uk/">Department of Trust.</a>
      <p>Actuary and Hong Kong resident in a previous life.</p>
      <p>Can be found on a rugby pitch in <a href="https://www.pitchero.com/clubs/broughtonfp/">North Edinburgh</a> when not coding.</p>
      </div>
      <div className="projects-container">
      <h1 style={{ 'textAlign': 'center' }}>Portfolio</h1>
        <ProjectsContainer/>
      </div>
      <div className="email-form-container">
      <h1>Get In Touch</h1>
        <EmailForm/>
      </div>
    </div>
    </>
  );
}

export default App;
