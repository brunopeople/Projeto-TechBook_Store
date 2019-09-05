import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Formulario from './Formulario';
import Header from './Header';
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
  ],
}

escutadorDeSubmit = autor =>{
  this.setState({ autores : [...this.state.autores, autor]});
}

removeAutor = index => {
  const { autores } = this.state;

  this.setState({
    autores : autores.filter((autor, posAtual)=>{
      return posAtual !== index;
    }),
  });
}


render(){
 
  return(
    <Fragment>
      <Header/>
        <div className="container mb-10">
           <h1>TechBook Store</h1>
          <Tabela autores={this.state.autores} removeAutor = {this.removeAutor}/>
          <Formulario escutadorDeSubmit={this.escutadorDeSubmit}/>
     </div>
    </Fragment>
    );
  }
}
export default App;
