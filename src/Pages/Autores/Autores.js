import React, {Component, Fragment} from 'react';
import Header from '../../Components/Header/Header';
import DataTable from '../../Components/DataTable/DataTable';
import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/PopUp';

class Autores extends Component {
	constructor(props){
		super(props);

		this.state = {
			nomes:[],
			titulo: 'Autores'
				
		};
	}

	componentDidMount(){
		ApiService.ListaNomes()
		.then(res => {
			if(res.message === 'sucess'){
			PopUp.exibeMensagem('sucess', 'Autores Listados com Sucesso');
			this.setState({nomes: [...this.state.nomes,...res.data]});
			}
		}).catch(err => PopUp.exibeMensagem('error', 'Falha na comunicação com o servidor para Listar os Autores'));
	}

	render(){
		return(
			<Fragment>
			 <Header/>
			   <div className='container'>
			     	<h1>Página de Autores</h1>
			    	<DataTable dados={this.state.autores} titulo={this.state.titulo} colunas={['nome']} />
			   </div>
			</Fragment>		
			);
		}
	}


export default Autores;