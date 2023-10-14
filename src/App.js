import logo from './rbc.svg';
import './App.css';
import Ribbon from './Ribbon';
import MainPage from './mainPage';

function App() {
  return (
    <body>
        <header>
          <Ribbon/>
          
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
          
        </header>

        <main>
          <MainPage/>
        </main> 
    </body>
  );
}

export default App;
