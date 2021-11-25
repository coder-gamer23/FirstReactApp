import './App.css';
import CounterComponent from './CounterComponent';
import CounterApp from './counterfunction';

function App(props) {
  return (
    <div className="App">
      <h2>{props.ComponentName} Component</h2>
      <CounterComponent ComponentName="Counter"/>
      <CounterApp/>
    </div>
  );
}

export default App;
