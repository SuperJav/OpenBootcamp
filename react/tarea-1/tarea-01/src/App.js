import './App.css';
import InfoPersona from './components/InfoPersona';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InfoPersona name="Javielito" lastName="Ramirez Brioso" email="Example@super.com" conect={true} />
      </header>
    </div>
  );
}

export default App;
