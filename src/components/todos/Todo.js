import React from 'react'

const Todo = props => {
  return (
    <div>
        {/* When we click the button we want to be able to delete this particular todo. At the moment, our todos are just strings, stored in an array. Since that is all we have to work with, we add an onClick attribute to the new button. To keep this component small, we can provide an anonymous function in-line: */}
        {/* <span>{props.text}</span><button onClick={() => props.delete(props.text)}>DELETE</button> */}
        <span>{props.todo.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  )
}

export default Todo; 

// So, what is happening here? We're providing a definition for an anonymous function. Inside the definition, we're calling props.delete, and passing in the only other prop available, props.text.

// Back in our connected TodosContainer, when this delete button is clicked, the value of props.text is passed into our dispatched action as the payload.

// There is a console.log in our reducer that displays actions. Clicking the delete button should log an action with the todo's text content as the payload.
