import { combineReducers, createStore } from 'redux'

import { todosReducer, todosReducerState } from './reducers/todos'
import { visibilityFilterReducer } from './reducers/visibilityFilter'

export type AppState = {
    todosReducer: todosReducerState,
    visibilityFilterReducer: string
}

const store = createStore(
    combineReducers<AppState>({
        todosReducer: todosReducer,
        visibilityFilterReducer: visibilityFilterReducer
    })
)

export default store