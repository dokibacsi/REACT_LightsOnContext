import { useContext } from 'react';
import './App.css';
import Jatekter from './components/Jatekter';
import { KapcsolContext } from './contexts/KapcsolContext';


function App() {
  const{boolList} = useContext(KapcsolContext)
  return (
    <div className="App">
      <header className="App-header">
        <h1>LightOn</h1>
      </header>
      <main>
        <article>
          <Jatekter lista = {boolList}/>
        </article>
      </main>
    </div>
  );
}

export default App;
