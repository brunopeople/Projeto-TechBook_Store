import validador from 'validator';

class FormValidator {

	constructor(validacoes){
		// validacoes é um array especifico do formulário com regras 
		this.validacoes = validacoes;
	}

	valida(state){

		let validacao = this.valido();

		this.validacoes.forEach(regra => {
			//Se o campo não tiver sido marcado
			//anteriormente como inválido por uma regra.
			if(!validacao[regra.campo].isInvalid){

				//Determina o valor do campo, o método a ser invocado
				//e os argumentos opcionais pela definição da regra
				const campoValor = state[regra.campo.toString()];
				const args = regra.args || [];
				//if ternário para estar preparado caso
				//alguém passe o método direto sem ser string

				const metodoValidacao = typeof regra.metodo ===  'string' ?
				validador[regra.metodo] : regra.metodo;

				//invoca o método específico da regra
				if(metodoValidacao(campoValor,...args, state) !== regra.validoQuando){
					validacao[regra.campo] = {
						isInvalid: true,
						message: regra.mensagem
					};

					validacao.isInvalid = false;
				}
			}
		});

	return validacao; 
	}

	valido(){
		const validacao = {};
		this.validacoes.map(regra => (
			validacao[regra.campo] = {isInvalid: false, message: ''}
		));

		return {isValid: true,...validacao};
	}
}

export default FormValidator 
	

