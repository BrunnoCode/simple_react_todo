import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-purple-900 shadow-xl rounded-md flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="rounded-md border-purple-300 outline-purple-300 px-4 py-2"
        value={title} onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="rounded-md border-purple-300 outline-purple-300 px-4 py-2"
        value={description} onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="bg-purple-500 rounded-md px-4 py-2 text-white font-medium"
          
          onClick={() => {
          if (!title.trim() || !description.trim()){
            return alert("Preencha todos os campos");
          }
          onAddTaskSubmit(title, description)
          setTitle("")
          setDescription("")
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
