import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface PesquisaProps {
    aoTermoPesquisa: (termoPesquisa: string) => void;
}

export default function Pesquisa({ aoTermoPesquisa }: PesquisaProps) {
    const [termoPesquisa, setTermoPesquisa] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        aoTermoPesquisa(termoPesquisa);
        setTermoPesquisa("");
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTermoPesquisa(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    value={termoPesquisa}
                    onChange={handleInputChange}
                />
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}
