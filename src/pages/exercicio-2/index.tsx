import { useState } from 'react';

export default function Ex02() {
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState<number[]>([]);

    function aumentar () {
        const novo = count + 1;
        setCount(novo);
        setHistory([...history, novo]);
    }

    function diminuir () {
        const novo = count - 1;
        setCount(novo);
        setHistory([...history, novo]);
    }

    return(
        <div className="p-8 flex flex-col gap-4">
            <h1>Exercicio 02</h1>
            <p>Counter com Histórico</p>

            <p> Contador: {count} </p>

            <div style= {{display: 'flex', gap: '8px'}}>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" onClick={aumentar}>Aumentar</button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" onClick={diminuir}>Diminuir</button>
            </div>
        </div>
    );
}