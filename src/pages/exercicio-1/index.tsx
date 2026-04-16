import {useState} from 'react';
import Link from "next/link";

export default function Ex01() {

    const [dark, setDark] = useState(false);

    return(
        <div className="p-8 flex flex-col gap-4
        " style={{backgroundColor: dark ? '#333' : '#fff', color: dark ? '#fff' : '#000', height: '100vh'}}>
            <Link href="/" className="w-fit border px-4 py-2 rounded">Voltar</Link>
            
            <h1>Exercicio 01</h1>
            <p>Theme Toggle</p>
            <button onClick={() => setDark(!dark)} className="p-2 content rounded-md border border-zinc-300 w-[500px]">
                {dark ? 'Modo Claro' : 'Modo Escuro'}
            </button>
        </div>
    )
}