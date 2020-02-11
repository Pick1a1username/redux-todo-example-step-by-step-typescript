import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { addTodo } from '../actions'

type Todo = {
    id: number,
    text: string,
    completed: boolean
}

let nextTodoId = 0

export interface State extends Array<Todo> { }

export const initialState: State = []

export const todosReducer = reducerWithInitialState(initialState)
    .case(addTodo, (state, value ) => {
        return [
            ...state,
            {
              id: nextTodoId++,
              text: value,
              completed: false
            }
        ]   
    })

