import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useRouter } from "next/navigation"; // Corrigido para useRouter
interface PesquisaProps {
    aoTermoPesquisa: (termoPesquisa: string) => void;
}

export default function Pesquisa({ aoTermoPesquisa }: PesquisaProps) {
    const [termoPesquisa, setTermoPesquisa] = React.useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        aoTermoPesquisa(termoPesquisa);
        console.log(termoPesquisa)
        try {
            setTermoPesquisa('');
            router.push(`/produtoscliente/${termoPesquisa}`);
        } catch (error) {
            console.error('Erro ao pesquisar produto:', error);
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTermoPesquisa(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="rounded-full bg-white px-2 mx-2 h-[30px]"
                    type="text"
                    placeholder="Pesquisar..."
                    value={termoPesquisa}
                    onChange={handleInputChange}
                />
                <button className="text-white rounded-full px-4 py-1" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div>
    )
}