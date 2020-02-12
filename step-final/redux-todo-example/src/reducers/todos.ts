import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { addTodo } from '../actions'

type Todo = {
    id: number,
    text: string,
    completed: boolean
}

let nextTodoId = 0

export interface todosReducerState extends Array<Todo> { }

export const todosReducerInitialState: todosReducerState = []

export const todosReducer = reducerWithInitialState(todosReducerInitialState)
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

