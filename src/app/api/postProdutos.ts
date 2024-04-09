import axios from "axios"
import api from "@/services/api"

const API_BASE_URL = 'http://localhost:3333';

export const AdicionarProduto = async (produtos: { nome:string, preço:number, categoria:string, marca:string } ) => {
    try{
        const response = await axios.post(`${API_BASE_URL}/produtos`, produtos)
        return(response.data)
    } catch (error) {
        console.log(error)
    }    
}