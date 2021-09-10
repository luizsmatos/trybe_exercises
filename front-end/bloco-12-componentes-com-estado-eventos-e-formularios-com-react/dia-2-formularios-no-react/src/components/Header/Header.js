import React from "react";
import './header.css'

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="hero container">
          <header>
            <h1 className="title text-center">Submeter Curriculo.</h1>
            <p className="title text-center">
              <em>Preencha as informacoes abaixo:</em>
            </p>
          </header>
        </div>
        <hr />
      </>
    );
  }
}

export default Header;
