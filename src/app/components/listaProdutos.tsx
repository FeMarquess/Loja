import React, { useState } from "react"

interface ListaProdutosProps {
    produtos: {
        nome: string;
        preço: number;
        categoria: string;
        marca: string;
    }[];
}

const ListaProdutos: React.FC<ListaProdutosProps> = ({ produtos}) =>{

    return (
        <ul>
            {produtos.map((produto, index) => (
                <li key={index}>
                        <div>
                            {produto.nome}: R$ {produto.preço.toFixed(2)}: {produto.categoria}: {produto.marca}{" "}
                        </div>
                </li>
            ))}

        </ul>
    )
}

export default ListaProdutos;