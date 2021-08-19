import React from 'react';
import { FaPlus } from "react-icons/fa";
//import { Container } from './TodoElement';

const Form = ({setInputText, setTodos, Todos, inputText}) => {

    const InputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const SubmitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...Todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
    };
    return(
            <div className="container">
                <form>
                    <input value={inputText} onChange={InputTextHandler} type="text" className="input" placeholder="What's in your mind" required></input>
                    <button onClick={SubmitTodoHandler} className="add-button" type="submit">
                        <FaPlus className="icon"/>
                    </button>
                    {/*<div className="select">
                        <select name="todos" className="filter-todo">
                            <option value="all">All</option>
                            <option value="completed">completed</option>
                            <option value="uncompleted">uncompleted</option>
                        </select>
                    </div>*/}
                </form>
            </div>
    );
}

export default Form;
