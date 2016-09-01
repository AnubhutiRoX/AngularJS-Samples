import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component{
	render(){
		return(
			<nav className="navbar navbar-inverse">
			  <div className="container-fluid">
				<div className="navbar-header">
				  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				  </button>
				  <a className="navbar-brand" href="#">ShopSmart</a>
				</div>
				<div className="collapse navbar-collapse" id="myNavbar">
				  <ul className="nav navbar-nav">
					<li className="dropdown">
						<a className="dropdown-toggle" data-toggle="dropdown" href="#">Electronics<span className="caret"></span></a>
						<ul className="dropdown-menu">
							<li><a href="#">Mobile</a></li>
							<li className="dropdown">
								<a className="dropdown-toggle" data-toggle="dropdown" href="#">Camera<span className="caret"></span></a>
							</li>
							<li><a href="#"></a></li>
							<li><a href="#"></a></li>
						</ul>
					</li>
					<li className="dropdown">
					  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Apparels<span className="caret"></span></a>
					  <ul className="dropdown-menu">
						<li><a href="#">Men Apprarel</a></li>
						<li><a href="#">Women Apparel</a></li>
						<li><a href="#">Kids</a></li>
					  </ul>
					</li>
					<li><a href="#">Gift Cards</a></li>
					<li><a href="#">Contact Us</a></li>
				  </ul>
				  <ul className="nav navbar-nav navbar-right">
					<li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
					<li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
				  </ul>
				</div>
			  </div>
			</nav>
		);
	}
}
export default Menu;