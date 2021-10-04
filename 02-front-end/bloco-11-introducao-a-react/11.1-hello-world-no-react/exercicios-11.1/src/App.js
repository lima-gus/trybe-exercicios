import logo from './logo.svg';
import './App.css';

const myTasks = ['first', 'second', 'third']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul>
      {myTasks.map(Task)}
    </ul>
  );
}

export default App;
