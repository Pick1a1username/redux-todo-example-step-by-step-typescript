import { combineReducers, createStore } from 'redux'
import { todosReducer, State } from './reducers/todos'

export type AppState = {
  state: State
}

const store = createStore(
    combineReducers<AppState>({
      state: todosReducer
    })
)

export default store