import AddTask from './components/AddTask';
import Tasks from './components/Tasks'
import { useState } from 'react'





function App() {

  const [tasks, setTasks] = useState([
  {
    id: 1,
    title: "Estudar demais",
    description: "estou estudando demais",
    isCompleted: false,
  },
   {
    id: 2,
    title: "Estudar React",
    description: "estou estudando React",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Estudar React Native",
    description: "estou estudando React Native",
    isCompleted: false,
  },
])

   return (
     <div className='w-screen h-screen bg-purple-300 flex justify-center p-6'>
      <div className='w-[500px]'>
        <h1 className='text-3xl font-bold text-purple-800 text-center font-mono'>Gerenciador de Tarefas</h1>
        <Tasks tasks={tasks}/>
      
      </div>
     </div>
   )
}

export default App;