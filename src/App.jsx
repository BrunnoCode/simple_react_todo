import { v4 } from "uuid";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tarefas") || []),
  );

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(taskTitle, taskDescription) {
    const newTasks = {
      id: v4(),
      title: taskTitle,
      description: taskDescription,
      isCompleted: false,
    };
    setTasks([...tasks, newTasks]);
  }

  return (
    <div className="w-screen h-screen bg-purple-300 flex justify-center p-6 ">
      <div className="w-[500px] space-y-6">
        <h1 className="text-3xl font-bold text-purple-800 text-center font-mono">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}
// AULA PAROU NA HORA 1:31 h
export default App;
