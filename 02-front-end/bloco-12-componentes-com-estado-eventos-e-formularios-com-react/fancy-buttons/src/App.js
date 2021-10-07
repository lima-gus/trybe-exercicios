import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
  }

  handleClick() {
    console.log(this)
    console.log('Clicou no primeiro botão!')
  }
  
  handleClick2() {
    console.log(this)
    console.log('Clicou no segundo botão!')
  }
  
  handleClick3() {
    console.log(this)
    console.log('Clicou no terceiro botão!')
  }

  render() {
    return (
    <div>
      <button onClick={this.handleClick}>Meu botão</button>
      <button onClick={this.handleClick2}>Meu botão</button>
      <button onClick={this.handleClick3}>Meu botão</button>
    </div>
    )
  }
}

export default App;
