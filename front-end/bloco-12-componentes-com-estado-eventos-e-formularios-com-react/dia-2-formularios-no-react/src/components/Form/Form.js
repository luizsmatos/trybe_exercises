import React from "react";
import "./form.css";
import InputPadrao from "../InputPadrao/InputPadrao";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: "",
      email: "",
      cpf: "",
      endereco: "",
      cidade: "",
      estado: "",
      complemento: "",
      curriculo: "",
      cargo: "",
      desccargo: "",
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };
  render() {
    const {
      nome,
      email,
      cpf,
      endereco,
      cidade,
      estado,
      complemento,
      curriculo,
      cargo,
      desccargo,
    } = this.state;

    return (
      // { text, styleClass, handleChange, name, value, type, min, max }
      <form>
        <section className="forms">
          <legend className="title">Informacoes Pessoais</legend>
          <fieldset>
            <div className="form-row">
              <InputPadrao
                type="text"
                text="Nome:"
                name="nome"
                styleClassGroup="col-md-4 mb-3"
                styleClass="form-control"
                handleChange={this.handleChange}
                value={nome.toUpperCase()}
                max={40}
                min={3}
              />
              <InputPadrao
                type="email"
                text="Email:"
                name="email"
                styleClassGroup="col-md-4 mb-3"
                styleClass="form-control"
                handleChange={this.handleChange}
                value={email}
                max={50}
                min={15}
              />
              <InputPadrao
                type="text"
                text="CPF:"
                name="cpf"
                styleClassGroup="col-md-4 mb-3"
                styleClass="form-control"
                handleChange={this.handleChange}
                value={cpf}
                max={11}
                min={11}
              />
              <InputPadrao
                type="text"
                text="Endereco:"
                name="endereco"
                styleClassGroup="col-md-6 mb-3"
                styleClass="form-control"
                handleChange={this.handleChange}
                value={endereco}
                max={200}
                min={1}
              />
                <InputPadrao
                type="text"
                text="Endereco:"
                name="endereco"
                styleClassGroup="col-md-3 mb-3"
                styleClass="form-control"
                handleChange={this.handleChange}
                value={endereco}
                max={200}
                min={1}
              />
                <InputPadrao
                type="text"
                text="Endereco:"
                name="endereco"
                styleClassGroup="col-md-3 mb-3"
                styleClass="form-control"
                handleChange={this.handleChange}
                value={endereco}
                max={200}
                min={1}
              />
            </div>
          </fieldset>
        </section>
      </form>
    );
  }
}

export default Form;
