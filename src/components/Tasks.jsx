import { CircleArrowRight } from "lucide-react";


function  Tasks(props){
  return(
    <div>
      <ul className="space-y-4 p-6 bg-purple-900 shadow-xl rounded-md">
        {props.tasks.map((task) =>
          <li key={task.id} className="flex gap-2">
          <button className="text-white text-left bg-purple-700 font-bold rounded-md p-2 w-full">
            {task.title}
          </button>
          <button className="rounded-md text-purple-400">
            <CircleArrowRight />
          </button>
          </li>
        )}
      </ul>
    </div>
  )
}


export default Tasks;