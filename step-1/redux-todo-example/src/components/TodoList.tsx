import React from 'react'

import Todo from './Todo'

type Todo = {
  id: number,
  text: string
}

interface OwnProps {
  todos: Todo[]
}

type Props = OwnProps


const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} />
    ))}
  </ul>
)


export default TodoList