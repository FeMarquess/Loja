"use client"
import React, { useState, useEffect } from 'react';
import FormProdutos from "../components/formProdutos"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Pesquisa from '../components/pesquisa';
import Ordenar from '../../../src/app/components/ordenar';
import api from '@/services/api';

export default function Produtos() {
    const [produtos, setProdutos] = useState<{ nome: string; preço: number; categoria: string; marca: string }[]>([]);
    const [editandoIndex, setEditandoIndex] = useState<number | null>(null);
    const [novoNome, setNovoNome] = useState<string>("");
    const [novoPreço, setNovoPreço] = useState<number>(0);
    const [novaCategoria, setNovaCategoria] = useState<string>("");
    const [novaMarca, setNovaMarca] = useState<string>("");
    const [termoPesquisa, setTermoPesquisa] = useState("");

    const handleProdutoSubmetido = (nome: string, preço: number, categoria: string, marca: string) => {
        const novoProduto = { nome, preço, categoria, marca };
        setProdutos([...produtos, novoProduto]);
    };

    const handleExcluirProduto = (index: number) => {
        const novosProdutos = produtos.filter((_, i) => i !== index);
        setProdutos(novosProdutos);
    };

    const handleEditarProduto = (index: number, produto: { nome: string; preço: number; categoria: string; marca: string }) => {
        setEditandoIndex(index);
        setNovoNome(produto.nome);
        setNovoPreço(produto.preço);
        setNovaCategoria(produto.categoria);
        setNovaMarca(produto.marca);
    };

    const handleSalvarEdicao = () => {
        if (editandoIndex !== null) {
            const produtosAtualizados = [...produtos];
            produtosAtualizados[editandoIndex] = {
                nome: novoNome,
                preço: novoPreço,
                categoria: novaCategoria,
                marca: novaMarca
            };
            setProdutos(produtosAtualizados);
            setEditandoIndex(null);
        }
    };

    console.log(api.get("/products"))



    return (
        <div>
            <h1>Produtos</h1>
            <div>
                <Ordenar produtos={produtos} setProdutos={setProdutos} />
                <Pesquisa aoTermoPesquisa={setTermoPesquisa} />
            </div>
            <FormProdutos aoProdutoSubmetido={handleProdutoSubmetido} />
            <div>
                <h4>Lista de Custos Fixos:</h4>
                <div>
                    {produtos.map((produto, index) => (
                        <li key={index}>
                            {editandoIndex === index ? (
                                <div>
                                    <form>
                                        <input value={novoNome} onChange={(e) => setNovoNome(e.target.value)} />
                                        <input value={novoPreço} type="string" onChange={(e) => setNovoPreço(parseFloat(e.target.value.replace(',', '.')))} />
                                        <input value={novaCategoria} onChange={(e) => setNovaCategoria(e.target.value)} />
                                        <input value={novaMarca} onChange={(e) => setNovaMarca(e.target.value)} />
                                        <button onClick={handleSalvarEdicao}>Salvar</button>
                                    </form>
                                </div>
                            ) : (
                                <div>
                                    {produto.nome}: R$ {produto.preço.toFixed(2)}: {produto.categoria}: {produto.marca}
                                    <button onClick={() => handleExcluirProduto(index)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                    <button onClick={() => handleEditarProduto(index, produto)}>
                                        Editar
                                    </button>
                                </div>
                            )}
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}

