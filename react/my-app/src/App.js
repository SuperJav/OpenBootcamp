import logo from './logo.svg';
import './App.css';
// import Greenting from './components/pure/Greenting.jsx';
// import GreentingF from './components/pure/GreentingF.jsx';
import TaskListComponent from './components/container/task_list.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greenting name="Javielito"/> */}
        {/* <GreentingF name="Anna"/> */}
        <TaskListComponent/>
      </header>
    </div>
  );
}

export default App;
