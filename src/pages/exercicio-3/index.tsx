import { useState } from 'react';

export default function Ex03() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleLogin () {
        if (email === '' || senha === '') {
            alert('Preencha todos os campos');
        } else {
            alert('Login feito!');
        }
    }
     return(
        <div className="p-8 flex flex-col gap-4">
            <h1>Exercicio 03</h1>
            <p>Esse é um Formulário de Login</p>

            <input 
            className="border border-zinc-300 px-4 py-2 rounded"
            type= 'text'
            placeholder= 'Email'
            value= {email}
            onChange= {(e) => setEmail(e.target.value)}
            />

            <input
            className="border border-zinc-300 px-4 py-2 rounded"
            type= 'password'
            placeholder= 'Senha'
            value= {senha}
            onChange= {(e) => setSenha(e.target.value)}
            />

            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" onClick={handleLogin}>
            Entrar
            </button>
        </div>
    );
}