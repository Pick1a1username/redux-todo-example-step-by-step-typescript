import React from 'react';

import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <AddTodo />
      <VisibleTodoList/>
    </React.Fragment>
  );
}

export default App;
