import { CheckIcon, CircleArrowRight, LucideTrash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task-description?${query.toString()}`);
  }
  return (
    <div>
      <ul className="space-y-4 p-6 bg-purple-900 shadow-xl rounded-md">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`text-white text-left bg-purple-700 font-bold p-2 w-full rounded-md flex items-center gap-2 ${task.isCompleted && "line-through text-purple-200"}`}
            >
              {task.isCompleted && <CheckIcon />}
              {task.title}
            </button>
            <button
              onClick={() => onSeeDetailsClick(task)}
              className="text-purple-400"
            >
              <CircleArrowRight />
            </button>
            <button
              className="text-purple-300"
              onClick={() => onDeleteTaskClick(task.id)}
            >
              <LucideTrash2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
