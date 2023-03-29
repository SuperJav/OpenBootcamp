//  
import './App.css';
// import MiConponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo1 from "./hooks/Ejemplo1.jsx"
// import Ejemplo2 from './hooks/Ejemplo2';

// import Greenting from './components/pure/Greenting.jsx';
// import GreentingF from './components/pure/GreentingF.jsx';
import TaskListComponent from './components/container/task_list.jsx';
// import GreetingStyled from './components/pure/GreetingStyled';
// import Father from './components/container/father';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Greenting name="Javielito"/> */}
        {/* <GreentingF name="Anna"/> */}
        {/* <Ejemplo1/> */}
        {/* <Ejemplo2/> */}
        {/* <MiConponenteConContexto/> */}
        {/* <GreetingStyled name="Javielito"/> */}
      {/* </header> */}
      {/* <Father/> */}
      <TaskListComponent/>
    </div>
  );
}

export default App;
