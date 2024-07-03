import React, { useState } from "react";
import { AdicionarProduto } from "../api/postProdutos";

interface ListaProdutosProps {
    aoProdutoSubmetido: (name: string, price: number, category: string, brand: string) => void;
}

export default function FormProdutos({ aoProdutoSubmetido }: ListaProdutosProps) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (!isNaN(Number(value))) {
            setPrice(value);
        }
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value);
    };

    const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBrand(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const priceNumero = parseFloat(price);
        if (!isNaN(priceNumero)) {
            aoProdutoSubmetido(name, priceNumero, category, brand);
            setName("");
            setPrice("");
            setCategory("");
            setBrand("");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex justify-between">
                <div className=" p-2">
                    <label>Nome: </label>
                    <input
                        className=" border-2 border-inherit rounded-md"
                        required
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="p-2">
                    <label>Preço: </label>
                    <input
                        className=" border-2 border-inherit rounded-md"
                        required
                        type="string"
                        id="price"
                        value={price}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="p-2">
                    <label>Categoria: </label>
                    <input
                        className=" border-2 border-inherit rounded-md"
                        required
                        type="text"
                        id="category"
                        value={category}
                        onChange={handleCategoryChange}
                    />
                </div>
                <div className="p-2">
                    <label>Marca: </label>
                    <input
                        className=" border-2 border-inherit rounded-md"
                        required
                        type="text"
                        id="brand"
                        value={brand}
                        onChange={handleBrandChange}
                    />
                </div>
                <button className="form-btn p-2" type="submit" >Adicionar</button>
            </form>
        </div>
    );
};
