import React, { Component } from 'react';
import './App.css';

import Tabela from './Tabela';

class App extends Component {

  state = {
  autores: [
    {
      nome: 'Paulo',
      livro: 'React',
      preco: '1000'
    },

    {
      nome: 'Daniel',
      livro: 'Java',
      preco: '99'
    },

    {
      nome: 'Marcos',
      livro: 'Design',
      preco: '150'
    },

    {
      nome: 'Bruno',
      livro: 'DevOps',
      preco: '100'
    }
  ]
}

removeAutor = index =>{
  const { autores } = this.state;

  this.setState({
    autores: autores.filter((autor, posAtual)=>{
      return posAtual !== index;
    }),
  });
}


render(){
  const { autores, removeAutor } = this.props;
  return(
      
      <table>
        <TableHead />
        <TableBody autores={autores} removeAutor = {removeAutor}/> 
      </table>

    );
  }
}


export default App;
