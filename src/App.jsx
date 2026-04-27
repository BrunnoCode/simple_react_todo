import { v4 } from 'uuid'
import AddTask from './components/AddTask'
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

function onTaskClick(taskId){
  const newTasks = tasks.map(task => {
    if (task.id === taskId) {
      return {...task, isCompleted: !task.isCompleted}
    }
    return task;
  })
  setTasks(newTasks)
}

function onDeleteTaskClick(taskId){
  const newTasks = tasks.filter(task => task.id != taskId)
  setTasks(newTasks)
}

function onAddTaskSubmit(taskTitle, taskDescription){
  const newTasks = {
    id: v4(),
    title: taskTitle,
    description: taskDescription,
    isCompleted: false,
  } 
  setTasks([...tasks, newTasks]);
}

   return (
     <div className='w-screen h-screen bg-purple-300 flex justify-center p-6 '>
      <div className='w-[500px] space-y-6'>
        <h1 className='text-3xl font-bold text-purple-800 text-center font-mono'>Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
     </div>
   )
}

export default App;