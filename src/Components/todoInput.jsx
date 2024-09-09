import { useEffect } from "react";

function TodoInput({onChange , onClick, value}){
    // console.log("Value in the todo input Component=>", value);
   useEffect(()=>{ 
  
   } ,[onClick])
    return(
        <div>
        <input className='border rounded-sm p-2' 
        type="text" 
        placeholder='Add Todo'
        value = {value}
         onChange={onChange} />
        <button 
        onClick={onClick} 
        disabled = {value === ""}
        style={{ backgroundColor: value === "" && "gray" }}
        className='p-2 ml-2 rounded-sm bg-teal-200'
       >Add</button>

      </div>
    );
}

export default TodoInput;