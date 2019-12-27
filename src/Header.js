import React from 'react';
import LinkWrapper from './LinkWrapper';
const Header = () => {
	return(
		<nav>
			<div className="nav-wrapper indigo lighten-2">
			 <LinkWrapper to="/" className="brande-logo ml-3">Techbook Store</LinkWrapper>
			 <ul id="nav-mobile" className="right">
				<li><LinkWrapper to="/">Autores</LinkWrapper></li>
				<li><LinkWrapper to="/">Livros</LinkWrapper></li>
				<li><LinkWrapper to="/">Sobre</LinkWrapper></li>
			 </ul>
			</div>
		</nav>
	);
}

export default Header; 