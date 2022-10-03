import './App.css';

import TestGame from './components/TestGame';
import Botones from './components/Botones';
import Kombatient from './components/Kombatient';
import Header from './components/Header';


function App() {
  return (

    
      <TestGame>
        <Header/>
        <div className="App">
        <Kombatient/>

        <Botones/>
        </div>
      </TestGame>
      

   
    
  );
}

export default App;
