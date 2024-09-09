import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './Components/todoInput'
import TodoList from './Components/todolist'
import { data } from 'autoprefixer'



function App() {
  const [todo , setTodo] = useState("");
  const [filter , setFilter] = useState('ALL')
  const [todos , setTodos] = useState([
    {
      todo: "Reading Book",
      id : Date.now(),
      completed: false,
    }
  ]);
  
  const handleAddTodo = useCallback(()=>{
  const todosArr = [...todos , {
    todo,
    id : Date.now(),
    completed: false,
  }]

  setTodos([...todosArr])
  setTodo("")
  },[todo]);

  const handleOrDelete = useCallback((id)=>{
    const filter  = todos.filter((data)=> data.id !== id)
    setTodos([...filter]);
  }, [todos])
 
 const handleOrToggleTodo = useCallback((id)=>{
  const todosArr = [...todos]
const todoInd =  todosArr.findIndex((data => data.id == id));
todosArr[todoInd].completed = !todosArr[todoInd].completed
setTodos([...todosArr]);
}, [todos])

const filteredTodos = todos.filter((data) =>{
  if(filter == 'ALL'){
    return true;
  }
  if(filter == 'Completed' && data.completed){
    return true;
  }
  if(filter == 'UnCompleted' && !data.completed){
    return true;
  }
})
  return (
    <div className='w-3/4 mx-auto'>
      <h1 className='font-bold text-3xl'>Todo App</h1>
      <br /><br />
     <TodoInput 
     value = {todo}
    onChange={(e)=>  setTodo(e.target.value)}
     onClick={handleAddTodo} />
     <br /><br />

     <div className='flex justify-around items-center'>
        <button
         onClick={()=> setFilter('ALL')}
         className={`${filter == 'ALL' ? 'bg-teal-600 text-white' : 'bg-teal-100'} p-2 px-4 rounded-sm`}>All</button>
        <button
         onClick={()=> setFilter('Completed')}
         className={`${filter == 'Completed' ? 'bg-teal-600 text-white' : 'bg-teal-100'} p-2 px-4 rounded-sm`}>Completed</button>
        <button
         onClick={()=> setFilter('UnCompleted')}
        className={`${filter == 'UnCompleted' ? 'bg-teal-600 text-white' : 'bg-teal-100'} p-2 px-4 rounded-sm`}>Un Completed</button>
       </div>
    
     <TodoList 
     toggleTodo={handleOrToggleTodo}
     todos={filteredTodos} onDelete = {handleOrDelete} />
    <br /><br /><br />
    <div className='End_heading'>Todo App Made By Ammar Ahmed</div>
    </div>
  )
}

export default App
