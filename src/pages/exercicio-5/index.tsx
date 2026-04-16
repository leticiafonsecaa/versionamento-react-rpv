import { useEffect, useState } from "react";
import Link from "next/link";

export default function Ex05() {
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>
        setUsers(data.map((user: { name: string }) => user.name)),
      );
  }, []);

  return (
    <div className="p-8 flex flex-col gap-4">
      <Link href="/" className="w-fit border px-4 py-2 rounded">
        Voltar
      </Link>

      <h1>Exercicio 05</h1>
      <p>Aqui tem Fetch de Usuários</p>
      <ul>
        {users.map((user, index) => (
          <li
            className="p-2 content rounded-md border border-zinc-300"
            key={index}
          >
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}
