import React from 'react';

import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div className="todo-app">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
