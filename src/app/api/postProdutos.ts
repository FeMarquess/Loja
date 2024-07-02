import axios from "axios"
import api from "@/services/api"

const API_BASE_URL = 'http://localhost:3333';

export const VisualizarProduto = async () => {
    try{
        const response = await axios.get(`${API_BASE_URL}/products`)
        return(response.data.products)
    } catch (error) {
        console.log(error)
    }    
}

export const AdicionarProduto = async (produtos: { name:string, price:number, category:string, brand:string } ) => {
    try{
        const response = await axios.post(`${API_BASE_URL}/products`, produtos)
        return(response.data)
    } catch (error) {
        console.log(error)
    }    
}

export const PesquisarProduto = async (termoPesquisa:string, page: number) => {
    try{
        const response = await axios.get(`${API_BASE_URL}/products/name/${termoPesquisa}/${page}`)
        return(response.data)
    } catch (error) {
        console.log(error)
    }    
}

export const EditarProduto = async (produtos: { id:string, name: string, price: number, category: string, brand: string }) => {
    try{
        const response = await axios.put(`${API_BASE_URL}/products/${produtos.id}`, produtos)
        return(response.data)
    } catch (error) {
        console.log("produto não editado")
    }    
}

export const DeletarProduto = async (id:string) => {
    try{
        const response = await axios.delete(`${API_BASE_URL}/products/${id}`)
        return(response.data)
    } catch (error) {
        console.log("produto não deletado")
    }    
}

export const ProdutoCarrinhoPost = async (id:string) => {
    try{
        const response = await axios.post(`${API_BASE_URL}/productsCart/${id}`)
        return(response.data)
    } catch (error) {
        console.log("produto não deletado")
    }    
}

export const ProdutoCarrinho = async () => {
    try{
        const response = await axios.get(`${API_BASE_URL}/productsCart`)
        return(response.data.products)
    } catch (error) {
        console.log(error)
    }    
}