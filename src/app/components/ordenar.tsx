import React, { useState } from 'react';

interface Produto {
    nome: string;
    preço: number;
    categoria: string;
    marca: string;
}

interface Props {
    produtos: Produto[];
    setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>;
}

function Ordenar({ produtos, setProdutos }: Props) {
    const [ordem, setOrdem] = useState<"asc" | "desc">("asc");


    const ordenarProdutosAscendentes = () => {
        const produtosOrdenados = [...produtos].sort((produtoA, produtoB) => {
            return produtoA.preço - produtoB.preço;
        });
        setProdutos(produtosOrdenados);
    }; 

    const ordenarProdutosDecrescentes = () => {
        const produtosOrdenados = [...produtos].sort((produtoA, produtoB) => {
            return produtoB.preço - produtoA.preço;
        });
        setProdutos(produtosOrdenados);
    }; 


    return (
        <div>
            <button onClick={ordenarProdutosAscendentes}>
                Ordenar ascendente
            </button>
            <button onClick={ordenarProdutosDecrescentes}>
                Ordenar decrescentes
            </button>
        </div>
    );
}

export default Ordenar;