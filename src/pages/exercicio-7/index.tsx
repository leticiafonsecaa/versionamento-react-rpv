import { useState } from "react";
import Link from "next/link";

export default function Ex07() {
  const [task, setTask] = useState("");
  const [list, setList] = useState<any[]>([]);

  function addTask() {
    if (task === "") return;

    setList([...list, task]);
    setTask("");
  }

  function removeTask(index: number) {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  }

  return (
    <div className="p-8 flex flex-col gap-4">
      <Link href="/" className="w-fit border px-4 py-2 rounded">
        Voltar
      </Link>
      <h1>Exercício 07</h1>

      <input
        className="p-2 content rounded-md border border-zinc-300"
        type="text"
        placeholder="Digite uma tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        onClick={addTask}
        className="p-2 content rounded-md border border-zinc-300"
      >
        Adicionar
      </button>

      {list.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
          <button
            onClick={() => removeTask(index)}
            className="p-2 content rounded-md border border-zinc-300"
          >
            Remover
          </button>
        </div>
      ))}
    </div>
  );
}
