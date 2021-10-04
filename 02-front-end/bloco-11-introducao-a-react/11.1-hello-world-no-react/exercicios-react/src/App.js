import './App.css';

const myTasks = ['first task', 'second task', 'third task', 'fourth task']

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
