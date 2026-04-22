import { CircleArrowRight, LucideTrash2 } from "lucide-react";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
  return (
    <div>
      <ul className="space-y-4 p-6 bg-purple-900 shadow-xl rounded-md">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`text-white text-left bg-purple-700 font-bold p-2 w-full rounded-md ${task.isCompleted && 'line-through text-purple-200'}`} >
              {task.title}
            </button>
            <button className="text-purple-400">
              <CircleArrowRight />
            </button>
            <button className="text-purple-300" onClick={() =>onDeleteTaskClick(task.id)}>
              <LucideTrash2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
