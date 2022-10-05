import './App.css';

import TestGame from './components/TestGame';
import Botones from './components/Botones';
import Kombatient from './components/Kombatient';
import Header from './components/Header';
import Score from './components/Score';


function App() {
  return (

    
      <TestGame>
        <Header/>
        <div className="App">
        <Kombatient/>
        <div className='bottom'>
          <Botones/>
          <Score/>
        </div>
        
        </div>
      </TestGame>
      

   
    
  );
}

export default App;
