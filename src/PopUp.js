
import M from 'materialize-css';

const PopUp = {
	exibeMensagem:(status, msg) => {
		if(status === "sucess")
		M.toast({html: msg, classes:"green",displayLength: 2000})

		if(status === "error")
		M.toast({html: msg, classes:"red", displayLength: 2000})
	}
}

export default PopUp;
