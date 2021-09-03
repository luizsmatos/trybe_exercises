import React from "react";
import "./button.css";

class Button extends React.Component {
  render() {
    const { className, children, disabled, onClick } = this.props;
    return (
      <button
        onClick={ onClick }
        className={ `button-text ${ className }` }
        disabled={ disabled }
      >
        { children }
      </button>
    );
  }
}

export default Button;
