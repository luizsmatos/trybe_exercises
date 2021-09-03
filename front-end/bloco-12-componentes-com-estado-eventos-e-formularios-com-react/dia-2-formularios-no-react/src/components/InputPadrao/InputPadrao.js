import React from "react";

class InputPadrao extends React.Component {
  render() {
    const { text, styleClass, styleClassGroup, handleChange, name, value, type, min, max } =
      this.props;
    return (
      <div className={styleClassGroup}>
        <label htmlFor={name}>{text}</label>
        <input
          className={ styleClass }
          name={name}
          id={name}
          type={type}
          value={value}
          onChange={handleChange}
          required
          minLength={min}
          maxLength={max}
        />
        
      </div>
    );
  }
}

export default InputPadrao;
