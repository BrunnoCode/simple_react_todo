import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParam] = useSearchParams();
  const title = searchParam.get("title");
  const description = searchParam.get("description");

  return (
    <div className="w-screen h-screen bg-purple-300 flex justify-center p-6 ">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default TaskPage;
