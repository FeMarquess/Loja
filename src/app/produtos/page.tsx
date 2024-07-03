"use client";
import React, { useState, useEffect } from 'react';
import FormProdutos from "../../components/formProdutos";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Ordenar from '../../components/ordenar';
import { VisualizarProduto, AdicionarProduto, DeletarProduto, EditarProduto, ProdutoCarrinhoPost } from '../../api/postProdutos';

export default function Produtos() {
    const [produtos, setProdutos] = useState<{ id: string, name: string, price: number, category: string, brand: string }[]>([]);
    const [editandoIndex, setEditandoIndex] = useState<number | null>(null);
    const [novoName, setNovoName] = useState<string>("");
    const [novoPrice, setNovoPrice] = useState<number>(0);
    const [novaCategory, setNovaCategory] = useState<string>("");
    const [novaBrand, setNovaBrand] = useState<string>("");

    useEffect(() => {
        getProdutos();
    }, []);

    const handleProdutoSubmetido = async (name: string, price: number, category: string, brand: string) => {
        const novoProduto = { name, price, category, brand };
        try {
            await AdicionarProduto(novoProduto);
            getProdutos();
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
        }
    };

    const getProdutos = async () => {
        try {
            const produtosRecebidos = await VisualizarProduto();
            setProdutos(produtosRecebidos);
        } catch (error) {
            console.error('Erro ao obter produtos:', error);
        }
    };

    const handleExcluirProduto = async (id: string) => {
        try {
            await DeletarProduto(id);
            getProdutos();
        } catch (error) {
            console.error('Erro ao excluir produto:', error);
        }
    };

    const handleProdutoCarrinho = async (id: string) => {
        try {
            await ProdutoCarrinhoPost(id);
        } catch (error) {
            console.error('Erro ao excluir produto:', error);
        }
    };

    const handleEditarProduto = (index: number, produto: { id: string, name: string, price: number, category: string, brand: string }) => {
        setEditandoIndex(index);
        setNovoName(produto.name);
        setNovoPrice(produto.price);
        setNovaCategory(produto.category);
        setNovaBrand(produto.brand);
    };

    const handleSalvarEdicao = async () => {
        if (editandoIndex !== null) {
            const produtoEditado = {
                id: produtos[editandoIndex].id,
                name: novoName,
                price: novoPrice,
                category: novaCategory,
                brand: novaBrand
            };
            try {
                await EditarProduto(produtoEditado);
                getProdutos();
                setEditandoIndex(null);
            } catch (error) {
                console.error('Erro ao editar produto:', error);
            }
        }
    };

    return (
        <div className='p-4'>
            <FormProdutos aoProdutoSubmetido={handleProdutoSubmetido} />
            <div>
                <div className='flex items-center align-center justify-between py-2 px-2'>
                    <h1 className='text-4xl'>Lista de Produtos:</h1>
                    <Ordenar produtos={produtos} setProdutos={setProdutos} />
                </div>
                <div className='list-none py-4 px-6 bg-slate-200 rounded-3xl'>
                    <div className="grid grid-cols-5 gap-4 p-6">
                        <div className="font-bold">Nome</div>
                        <div className="font-bold">Preço</div>
                        <div className="font-bold">Categoria</div>
                        <div className="font-bold">Marca</div>
                    </div>
                    {produtos.map((produto, index) => (
                        <div className="grid grid-cols-5 gap-4 px-6" key={produto.id}>
                            {editandoIndex === index ? (
                                <div>
                                    <form>
                                        <input value={novoName} onChange={(e) => setNovoName(e.target.value)} />
                                        <input value={novoPrice} type="number" step="0.01" onChange={(e) => setNovoPrice(parseFloat(e.target.value))} />
                                        <input value={novaCategory} onChange={(e) => setNovaCategory(e.target.value)} />
                                        <input value={novaBrand} onChange={(e) => setNovaBrand(e.target.value)} />
                                        <button type="button" onClick={handleSalvarEdicao}><FontAwesomeIcon icon={faPen} /></button>
                                    </form>
                                </div>
                            ) : (
                                <>
                                    <div>
                                        {produto.name}
                                    </div>
                                    <div>
                                        R$ {produto.price}
                                    </div>
                                    <div>
                                        {produto.category}
                                    </div>
                                    <div>
                                        {produto.brand}
                                    </div>
                                    <div >
                                        <button className="px-2" onClick={() => handleExcluirProduto(produto.id)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                        <button className="px-2" onClick={() => handleEditarProduto(index, produto)}>
                                            <FontAwesomeIcon icon={faPen} />
                                        </button>
                                        <button className="px-2" onClick={() => handleProdutoCarrinho(produto.id)}>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
