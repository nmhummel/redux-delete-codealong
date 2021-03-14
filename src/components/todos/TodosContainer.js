import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => {
    return this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)
  }
  // added todo to key={id}
  // The change is minimal, but this set up is actually better. Previously, key was based off the index provided by map. Now its using our randomly generated ID, and is less prone to errors in the virtual DOM. We'll need both todo.id and todo.text to be passed into Todo so we pass both down as the object, todo.

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

// Now, TodosContainer will have access to this.props.delete, which can take in an argument and send it as the action's payload. We can then pass this.props.delete down to Todo, so that each Todo component rendered will have access to our 'DELETE_TODO' action.