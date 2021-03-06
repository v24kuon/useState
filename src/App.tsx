import logo from './logo.svg';
import './App.css';
import UseState1 from './components/UseState1';
import UseState2 from './components/UseState2';
import UseState3 from './components/UseState3';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
        <UseState1 />
        <UseState2 />
        <UseState3 />
      </header>
    </div>
  );
};

export default App;
