import api from "@/services/api"

export const VisualizarProduto = async () => {
    try{
        const response = await api.get(`/products`)
        return(response.data.products)
    } catch (error) {
        console.log(error)
    }    
}

export const AdicionarProduto = async (produtos: { name:string, price:number, category:string, brand:string } ) => {
    try{
        const response = await api.post(`/products`, produtos)
        return(response.data)
    } catch (error) {
        console.log(error)
    }    
}

export const PesquisarProduto = async (termoPesquisa:string, page: number) => {
    try{
        const response = await api.get(`/products/name/${termoPesquisa}/${page}`)
        return(response.data)
    } catch (error) {
        console.log(error)
    }    
}

export const EditarProduto = async (produtos: { id:string, name: string, price: number, category: string, brand: string }) => {
    try{
        const response = await api.put(`/products/${produtos.id}`, produtos)
        return(response.data)
    } catch (error) {
        console.log("produto não editado")
    }    
}

export const DeletarProduto = async (id:string) => {
    try{
        const response = await api.delete(`/products/${id}`)
        return(response.data)
    } catch (error) {
        console.log("produto não deletado")
    }    
}

export const ProdutoCarrinhoPost = async (id:string) => {
    try{
        const response = await api.post(`/productsCart/${id}`)
        return(response.data)
    } catch (error) {
        console.log("produto não deletado")
    }    
}

export const ProdutoCarrinho = async () => {
    try{
        const response = await api.get(`/productsCart`)
        return(response.data.products)
    } catch (error) {
        console.log(error)
    }    
}