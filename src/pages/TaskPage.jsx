import { CircleArrowLeft } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";

function TaskPage() {
  const [searchParam] = useSearchParams();
  const title = searchParam.get("title");
  const description = searchParam.get("description");
  const navigate = useNavigate()

  return (
    <div className="w-screen h-screen bg-purple-300 flex justify-center p-6 ">
   

      <div className='w-[500px] space-y-6'>
        <div className="flex justify-center relative mb-6">
          <button className="absolute left-0 top-0 bottom-0 text-purple-700"
           onClick={() => navigate(-1)}
          >
            <CircleArrowLeft />
          </button>
          <h1 className='text-3xl font-bold text-purple-800 text-center font-mono'>Detalhes da Tarefa</h1>
        </div>
        
        <div className="space-y-4 p-6 bg-purple-900 shadow-xl rounded-md flex flex-col">
          <h2 className="text-xl text-white font-bold">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
        
      </div>
     </div>
  );
}

export default TaskPage;
