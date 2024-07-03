"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Pesquisa from "./pesquisa";
import React, { useState } from "react";

const Navbar = () => {
    const [termoPesquisa, setTermoPesquisa] = useState("");

    
    return (
        <nav className="flex items-center align-center justify-between p-2 bg-purple h-[50px]">
            <button>
                <FontAwesomeIcon className='h-[30px]' icon={faBars} />
            </button>
            <Pesquisa aoTermoPesquisa={setTermoPesquisa} />
            <ul className="flex">
                <li>
                    <Link href="./carrinho"><FontAwesomeIcon className='h-[30px]' icon={faShoppingCart} /></Link>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar;