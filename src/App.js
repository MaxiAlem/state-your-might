import './App.css';

import TestGame from './components/TestGame';
import Botones from './components/Botones';
import Kombatient from './components/Kombatient';


function App() {
  return (

    <div className="App">
      <TestGame>
        <Kombatient/>

        <Botones/>

      </TestGame>
      

   
    </div>
  );
}

export default App;
