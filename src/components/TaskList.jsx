import TaskCard from './TaskCard'
import {useContext} from 'react'
import  {TaskContext} from '../context/TaskContext'

function TaskList() {

  const {tasks}= useContext(TaskContext)

    if (tasks.length === 0){
       return <h1 className=' text-5xl bg-black-400 font-bold'>No hay tareas disponibles</h1>
    }

  return (
    <div className='grid grid-cols-3 gap-2 ">
      
    </div>'>      
        {/* <h1>TaskList</h1> */}
        {/* <hr /> */}
        {tasks.map((task) => (
            <TaskCard  key= {task.id} task={task} />
           ))}
           {/* <hr /> */}
    </div>

  )
}

export default TaskList