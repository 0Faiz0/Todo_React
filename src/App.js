import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Loader from './components/Loader';
//import {Container} from './components/TodoElement';

function App() {

  const [inputText,setInputText] = useState("");
  const [Todos,setTodos] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4500)
  }, [])

  return (
    <>
    {
      loading ?

      <Loader/>

      :

      <div className="App">

        <div className="head"><h1>TODO <span>APP</span></h1></div>
        <Form Todos={Todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
        <TodoList setTodos={setTodos} Todos={Todos}/>
      </div>
    }
    </>
  );
}

export default App;
