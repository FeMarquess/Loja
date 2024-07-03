import React, { useState } from 'react';

interface Produto {
    id:string
    name: string;
    price: number;
    category: string;
    brand: string;
}

interface Props {
    produtos: Produto[];
    setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>;
}

function Ordenar({ produtos, setProdutos }: Props) {
    const [ordem, setOrdem] = useState<"asc" | "desc">("asc");
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropDown = () => setIsOpen(!isOpen)

    const handleOptionClick = (option: "asc" | "desc") => {
        setOrdem(option);
        setIsOpen(false);
        ordenarProdutos(option);
    }

    const ordenarProdutos = (ordem: "asc" | "desc") => {
        const produtosOrdenados = [...produtos].sort((produtoA, produtoB) => {
            return ordem === "asc" ? produtoA.price - produtoB.price : produtoB.price - produtoA.price;
        });
        setProdutos(produtosOrdenados);
    }; 

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-lg border border-gray-300 shadow-sm px-4 py-2 font-medium"
                    onClick={toggleDropDown}
                >
                    {ordem === "asc" ? "Preço de Baixo para Alto" : "Preço de Alto para Baixo"}
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06-1.06l.01.02a.75.75 0 01-.01 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01-.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                >
                    <div className="py-1">
                        <button
                            className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                            onClick={() => handleOptionClick("asc")}
                        >
                            Preço de Baixo para Alto
                        </button>
                        <button
                            className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                            onClick={() => handleOptionClick("desc")}
                        >
                            Preço de Alto para Baixo
                        </button>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}

export default Ordenar;