import React from 'react';

const tasks = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar']

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

class ToDo extends React.Component {
  render() {
    return (
    <div>
      <ul>
        {tasks.map((value) => Task(value))}
      </ul>
    </div>
    )
  }
}

export default ToDo