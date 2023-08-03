import {useContext} from 'react'
import  {TaskContext} from '../context/TaskContext'
function TaskCard({task}) {

    const {deleteTask} = useContext(TaskContext)
  // function mostarAlerta(){
  //   alert(task.id)
  // }
  return (
  
      <div className='bg-gray-800 text-white p-3 rounded-md' >
      <h1 className='text-xl font-bold capitalize'>{task.title}</h1>  
      <p className='text-gray-500 text-sm'>{task.description}</p>  
      <button className='bg-red-400 px-3 py-2 rounded-md mt-4 hover:bg-red-300' onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
    

  );
}

export default TaskCard