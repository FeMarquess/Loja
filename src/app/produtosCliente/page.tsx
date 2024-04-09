"use client"
import React, { useState, useEffect } from 'react';
import ListaProdutos from '../components/listaProdutos';

function OutraPagina() {
    const [produtos, setProdutos] = useState([]);


    return (
        <div>
            <ListaProdutos produtos={produtos} />
        </div>
    );
}

export default OutraPagina;
