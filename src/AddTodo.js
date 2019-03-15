import React from 'react';
import { connect } from 'react-redux';

let nextTodoId = 0;
const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
};

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="add-todo">
      <input ref={node => {
        input = node;
      }} className="add-todo__input" placeholder="new todo" onKeyUp={(e) => {
        if (e.keyCode == 13) {
          dispatch(addTodo(input.value));
          input.value = '';
        }
      }}/>
      <button onClick={() => {
        dispatch(addTodo(input.value));
        input.value = '';
      }} className="add-todo__button">
        Add Todo
      </button>
    </div>
  );
};

export default connect()(AddTodo);
