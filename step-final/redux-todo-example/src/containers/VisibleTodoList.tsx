import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

import { Dispatch } from "redux";

import { AppState } from "../store";

import { toggleTodo } from '../actions'

export interface VisibleTodoListHandler {
  onTodoClick(id: number): void
}

const mapStateToProps = (appState: AppState) => {
  return {
    todos: appState.todosReducer
  }
}

const mapDispatchToProps = ( dispatch: Dispatch ) => {
  return {
    onTodoClick: (id: number) => { dispatch(toggleTodo(id)) }
  }
}


const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList