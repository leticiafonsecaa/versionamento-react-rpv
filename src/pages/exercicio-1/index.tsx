import {useState} from 'react';

export default function Ex01() {

    const [dark, setDark] = useState(false);

    return(
        <div className="p-8 flex flex-col gap-4
        " style={{backgroundColor: dark ? '#333' : '#fff', color: dark ? '#fff' : '#000', height: '100vh'}}>
            <h1>Exercicio 01</h1>
            <p>Aqui você vai fazer o Theme Toggle</p>
            <button onClick={() => setDark(!dark)}>
                {dark ? 'Modo Claro' : 'Modo Escuro'}
            </button>
        </div>
    )
}