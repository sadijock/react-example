import {useState, useContext} from 'react'
import  {TaskContext} from '../context/TaskContext'
export default function TaskForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        // const newTask = {
        //     title:title
        // }
        // console.log(newTask)
        createTask({
            title,
            description, 
        });
        setTitle("")
        setDescription("")
    }

  return (
    <div className='max-w-md mx-auto'>
        
        <form action="" onSubmit={handleSubmit} className='bg-slate-500 p-10 mb-5'>
            <h1 className='text-2xl font-bold mb-4 '>TaskForm</h1>
            <input type="text" placeholder="Escribe Tarea"
            onChange={(env)=> setTitle(env.target.value)}
            value={title}
            className='bg-green-400 p-3 w-full mb-2'
            autoFocus
            />

            <textarea placeholder='Escribe la descripcion de la tarea' onChange={(e) => setDescription(e.target.value)}
            value={description}
            className='bg-green-400 p-3 w-full mb-2'
            ></textarea>

            <button className='bg-orange-600 text-white px-3 py-1 w-full'>Guardar</button>
        </form>
    </div>
  )
}
