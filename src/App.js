import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Header from './Header';
import Tabela from './Tabela';
import Form from './Formulario';
import PopUp from './PopUp';
import ApiService from './ApiService';

class App extends Component {

constructor(props){
  super(props);

  this.state = {
    autores: [],
  };
}

removeAutor = id =>{
  const { autores } = this.state;

  this.setState({
    autores: autores.filter(autor => {
      return autor.id !==id;
    }),
  }
);

  PopUp.exibeMensagem("error","Autor removido com sucesso");
  ApiService.removeAutor(id);
}

escutadorDeSubmit = autor => {
  ApiService.CriaAutor(JSON.stringify(autor))
  .then(res => res.data)
  .then(autor => {
      this.setState({autores:[...this.state.autores, autor]});
      PopUp.exibeMensagem("sucess","Autor adicionado com sucesso");
  })
}


removeAutor = index => {
  const { autores } = this.state;

  this.setState({
    autores : autores.filter((autor, posAtual)=>{
      return posAtual !== index;
    }),
  });
}

componentDidMount(){
  ApiService.ListaAutores()
  .then(res => {
    this.setState({autores:[...this.state.autores, ...res.data]})
  });
}

render(){


  return(
    <Fragment>
      <Header/>
        <div className="container mb-10">
           <h1>TechBook Store</h1>
          <Tabela autores = {this.state.autores} removeAutor = {this.removeAutor} />
          <Form escutadorDeSubmit={this.escutadorDeSubmit}/>
     </div>
    </Fragment>
    );
  }
}
export default App;
