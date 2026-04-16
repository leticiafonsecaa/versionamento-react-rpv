import {use, useEffect, useState} from 'react';

export default function Ex06() {
    const [users, setUsers] = useState<any[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    }, []);

    const filtrados = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

    return(
        <div className="p-8 flex flex-col gap-4">
            <h1>Exercicio 06</h1>
            <p>Aqui você vai fazer o Search de Usuários</p>

            <input
            className="p-2 content rounded-md border border-zinc-300"
            type= 'text'
            placeholder= 'Buscar usuário'
            value= {search}
            onChange= {(e) => setSearch(e.target.value)}
            />

            {filtrados.map((user) => (
                <div className="p-2 content rounded-md border border-zinc-300" key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}