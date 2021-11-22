import logo from './logo.svg';
import './App.css';
import CounterComponent from './CounterComponent';

function App(props) {
  return (
    <div className="App">
      <h2>{props.ComponentName} Component</h2>
      <CounterComponent ComponentName="Counter"/>
    </div>
  );
}

export default App;
