import './App.css';
import Todo from './todo/Todo';
import {useState, useEffect} from 'react';

function App() {
  const [todos , setTodos] = useState([]);
  useEffect(() => {
    console.log(todos)
  }, todos)
  return (
    <>
    <section className='todoapp'>
    <header className="header">
      <h1>Todos</h1>
    </header>

   <Todo addTodos={setTodos} todos={todos}/>
    
  </section>
  </>
  );
}

export default App;
