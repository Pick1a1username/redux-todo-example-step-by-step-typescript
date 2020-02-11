import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory()

// id cannot be set in this code....
// So it is moved to the reducer.
// let nextTodoId = 0

// export const addTodo = text => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })

export const addTodo = actionCreator<string>('ADD_TODO')

