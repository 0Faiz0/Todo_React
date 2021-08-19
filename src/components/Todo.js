import React from 'react';
import { FaCheck,FaTrash } from "react-icons/fa";
//import { Container } from './TodoElement';

const Todo = ({text, todo, Todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(Todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(Todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    }

    return(
            <div className="todo">
                <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
                <button onClick={completeHandler} className="done"><FaCheck className="check-icon"/></button>
                <button onClick={deleteHandler} className="delete"><FaTrash className="delete-icon"/></button>
            </div>
    );
}

export default Todo;