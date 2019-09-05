import React from 'react';

const Header = () => {
	return(

		<nav>
			<div className="nav-wrapper indigo lighten-2">
			 <a href="/" className="brande-logo ml-3">Techbook Store</a>
			 <ul id="nav-mobile" className="right">
				<li><a href="/">Autores</a></li>
				<li><a href="/">Livros</a></li>
				<li><a href="/">Sobre</a></li>
			 </ul>
			</div>
		</nav>
	)
}

export default Header; 