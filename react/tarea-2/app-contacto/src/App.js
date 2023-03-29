import './App.css';
import git from './icons/github.png'
import instagram from './icons/instagram.png'
import linkedin from './icons/linkedin.png'
//import Persons from './components/Personas_list';
import Form from './components/form/Form';
function App() {

  return (
    <div className="App">
      {/* <Persons/> */}
      <Form/>
      <footer>
          <div className='footer-container'>
              <h4 id='dev'>Developer by Javi super 🧑🏽‍💻</h4>
              <hr className='barra'/>
              <div id='container-icons'>
                <a href='https://github.com/SuperJav?tab=repositories'><img className='icons' src={git} alt='icon-gitHub'></img></a>
                <a href='https://www.instagram.com/javisuper_/'><img className='icons'  src={instagram} alt='icon-instagram'></img></a>
                <a href='https://www.linkedin.com/in/javielito-ramirez-brioso-53402321b/'><img className='icons'  src={linkedin} alt='icon-linkedin'></img></a>
              </div>
          </div>
      </footer>
    </div>
  );
}

export default App;
