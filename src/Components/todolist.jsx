import { useEffect } from "react";

function TodoList ({todos , onDelete , toggleTodo}){
  
    return(
      <>
       {
      todos.map((todo , ind)=>{
        return(
          <div key={todo.id} className='flex bg-slate-50 my-3'>
           <h3 
           onClick={()=> toggleTodo(todo.id)}
           style={{textDecoration : todo.completed && 'line-through'}}
           className='text-2xl text-left py-2 cursor-pointer pl-1 my-2 font-memo font-medium flex-1'>{todo.todo}</h3>
           <button
           onClick={()=> onDelete(todo.id)}
           className='rounded-md p-2 px-4 bg-red-500 text-white  '>Delete</button>
          </div>
        )
      })
    }
      </>
    )
}

export default TodoList;