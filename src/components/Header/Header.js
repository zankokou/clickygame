import React from "react";

const Header = props => (
<nav className="navbar">
  <a className="navbar-brand" href="/">Clicky Game</a>
    <h4 id="message">{props.message}</h4>
    <h6 id="scoreBoard">Score: {props.score} | Top Score: {props.topScore}</h6>
</nav>


);

export default Header;
