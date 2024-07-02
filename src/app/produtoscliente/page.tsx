"use client"
import React, { useState, useEffect } from 'react';
import { PesquisarProduto } from '../api/postProdutos';

interface ProdutosClienteProps {
    termoPesquisa: string;
}

export default function ProdutosCliente({ termoPesquisa }: ProdutosClienteProps) {
    const [produtosPesquisados, setProdutosPesquisados] = useState<{ id: string; name: string; price: number; category: string; brand: string }[]>([]);

    const getProdutos = async (termoPesquisa: string) => {
        try {
            const produtosRecebidos = await PesquisarProduto(termoPesquisa, 1);
            setProdutosPesquisados(produtosRecebidos);
            console.log('Produtos recebidos:', produtosRecebidos);
            console.log(termoPesquisa)
        } catch (error) {
            console.error('Erro ao obter produtos:', error);
        }
    };

    useEffect(() => {
        getProdutos(termoPesquisa);
    }, [termoPesquisa]);

    return (
        <div>
            <h4>Lista de Produtos:</h4>
                {produtosPesquisados.map((produto) => (
                    <div key={produto.id}>
                        <div>
                            {produto.name}: R$ {produto.price}: {produto.category}: {produto.brand}{" "}
                        </div>
                    </div>
                ))}
        </div>
    );
}
