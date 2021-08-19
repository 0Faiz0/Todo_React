import React from 'react';
import Todo from './Todo';
//import { Container } from './TodoElement';

const TodoList = ({Todos, setTodos}) => {

    return(
            <div className="todo-container">
                <ul className="todo-list">
                    {Todos.map(todo => (
                        <Todo
                            setTodos={setTodos}
                            Todos={Todos}
                            todo={todo} 
                            text={todo.text} 
                            key={todo.id}
                        />
                    ))}
                </ul>
            </div>
    );
}

export default TodoList;