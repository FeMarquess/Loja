import React, { useState } from "react";

interface ListaProdutosProps {
    aoProdutoSubmetido: (nome: string, preço: number, categoria: string, marca: string) => void;
}

export default function FormProdutos({ aoProdutoSubmetido }: ListaProdutosProps) {
    const [nome, setNome] = useState("");
    const [preço, setPreço] = useState("");
    const [categoria, setCategoria] = useState("");
    const [marca, setMarca] = useState("");

    const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNome(e.target.value);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (!isNaN(Number(value))) {
            setPreço(value);
        }
    };

    const handleCategoriaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategoria(e.target.value);
    };

    const handleMarcaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMarca(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const preçoNumero = parseFloat(preço);
        if (!isNaN(preçoNumero)) {
            aoProdutoSubmetido(nome, preçoNumero, categoria, marca);
            setNome("");
            setPreço("");
            setCategoria("");
            setMarca("");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nome: </label>
                <input
                    required
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={handleNomeChange}
                />
                <label>Preço: </label>
                <input
                    required
                    type="string"
                    id="preço"
                    value={preço}
                    onChange={handleInputChange}
                />
                <label>Categoria: </label>
                <input
                    required
                    type="text"
                    id="categoria"
                    value={categoria}
                    onChange={handleCategoriaChange}
                />
                <label>Marca: </label>
                <input
                    required
                    type="text"
                    id="marca"
                    value={marca}
                    onChange={handleMarcaChange}
                />
                <button className="form-btn" type="submit">+</button>
            </form>
        </div>
    );
};
