import logo from './flipp.png';
import './App.css';
import Ribbon from './Ribbon';
import MainPage from './mainPage';

function App() {
  return (
    <>
      <header>
        <Ribbon/>
        
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
        
      </header>

      <main>
        <MainPage/>
      </main> 
    </>
  );
}

export default App;
