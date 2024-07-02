"use client";
import { useState } from 'react';
import { ProdutoCarrinho } from '../api/postProdutos';

export default function ProdutosCarrinho () {
    const [produtos, setProdutos] = useState<{ id: string, name: string, price: number, category: string, brand: string }[]>([]);

    const getProdutos = async () => {
        try {
            const produtosRecebidos = await ProdutoCarrinho();
            setProdutos(produtosRecebidos);
        } catch (error) {
            console.error('Erro ao obter produtos:', error);
        }
    };

    return(
        <div>
            <h4>Carrinho:</h4>
            <ul>
                {produtos.map((produto, index) => (
                    <li key={index}>
                        <div>
                            {produto.name}: R$ {produto.price}: {produto.category}: {produto.brand}{" "}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}