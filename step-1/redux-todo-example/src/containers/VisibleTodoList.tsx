import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

import { Dispatch } from "redux";

import { AppState } from "../store";

export interface VisibleTodoListHandler {}

const mapStateToProps = (appState: AppState) => {
  return {
    todos: appState.state
  }
}

const mapDispatchToProps = ( dispatch: Dispatch) => {
  return {}
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList