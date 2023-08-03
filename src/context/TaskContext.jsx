import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/tasks';

// el que almacena los componentes
  export const TaskContext = createContext()
//este es el componente que engloba a los componentes
export function TaskContextProvider(props) {  
    const [tasks, setTasks] = useState([])

    function createTask(task){
        // copia el arreglo de tareas y le añadimos una  nueva tarea, se le asignamos al setTask
        setTasks([...tasks, {
          title: task.title,
          id: tasks.length,
          description: task.description,
        }])
      }


    function deleteTask(taskId){
        console.log(taskId)
        setTasks(tasks.filter(task => task.id !== taskId))
      } 

      useEffect(() => {
        setTasks(data)
  
      }, [])


  return (
    <TaskContext.Provider value={{
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask,
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}
