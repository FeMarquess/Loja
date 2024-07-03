"use client";
import React, { useEffect, useState } from 'react';
import { PesquisarProduto } from '../../../api/postProdutos';

interface Produto {
    id: string;
    name: string;
    price: number;
    category: string;
    brand: string;
}

const ProdutosCliente: React.FC = ({ params }) => {
    const termoPesquisa = params.termoPesquisa;
    const [produtos, setProdutos] = useState<Produto[] | null>(null);

    useEffect(() => {
        teste();
    }, []);
    
const teste = async () => {
    try {
        const produtosRetornados = await PesquisarProduto(termoPesquisa, 1);
        console.log(produtosRetornados)
        setProdutos(produtosRetornados.products); 
    } catch (error) {
        console.error('Erro ao pesquisar produto:', error);
    }  
};

    if (!produtos || produtos.length === 0) {
        return (
            <div>
                Não foi encontrado nenhum produto para {termoPesquisa}
            </div>
        );
    }

    return (
        <div>
            <h4>Lista de Produtos para {termoPesquisa}:</h4>
            {produtos.map((produto) => (
                <div key={produto.id}>
                    <div>
                        {produto.name}: R$ {produto.price}: {produto.category}: {produto.brand}{" "}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProdutosCliente;