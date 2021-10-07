import React from 'react';
import './App.css';

function handleClick() {
  console.log('Clicou no primeiro botão!')
}

function handleClick2() {
  console.log('Clicou no segundo botão!')
}

function handleClick3() {
  console.log('Clicou no terceiro botão!')
}

class App extends React.Component {
  render() {
    return (
    <div>
      <button onClick={handleClick}>Meu botão</button>
      <button onClick={handleClick2}>Meu botão</button>
      <button onClick={handleClick3}>Meu botão</button>
    </div>
    )
  }
}

export default App;