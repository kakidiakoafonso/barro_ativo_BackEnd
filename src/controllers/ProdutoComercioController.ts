import {Request,Response} from "express"
import ProdutoComercioService from "../service/ProdutoComercioService"
import ProdutoService from "../service/ProdutoService"

const service = new ProdutoComercioService()
const produtoService = new ProdutoService()
class ProdutoComercioController 
{
    async create(request:Request,response:Response) 
    {
        const {idProduto,idComercio} = request.body
        
                const produtoComercioCriado = await service.create(idProduto,idComercio)
                if(produtoComercioCriado===0)
                {
                    return response.send("Email ou cpf ja usado")
                }
                if(produtoComercioCriado=== 1)
                {
                    return response.send("Gerente nao criado")
                }
                return response.send(produtoComercioCriado)
           
    }
    async read(request:Request,response:Response) 
    {
        try 
        {
            const produtoComercios = await service.read()
            if(produtoComercios=== 0)
            {
                response.send("Sem usuarios")
            }
            if(produtoComercios=== 1)
            {
                response.send("Usuario nao criado")
            }
            response.send(produtoComercios)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async update(request:Request,response:Response) 
    {
        const dadosProdutoComercio = request.body
        const id = "0d1d9eaf-d5b0-4512-8d47-e3e7105a9320"
        try 
        {
            const produtoComercioAtualizado = await service.update(dadosProdutoComercio,id)
            if(produtoComercioAtualizado=== 0)
            {
                response.send("Email ou cpf ja usado")
            }
            if(produtoComercioAtualizado=== 1)
            {
                response.send("Usuario nao criado")
            }
            response.send(produtoComercioAtualizado)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async delete(request:Request,response:Response) 
    {
        const id = request.params.id
        try 
        {
            const produtoComercioRemovido = await service.delete(id)
            if(produtoComercioRemovido=== 0)
            {
                return response.send("Erro do servidor")
            }
            if(produtoComercioRemovido=== 1)
            {
                return response.send("Usuario nao existe")
            }

             const removeProduto = await produtoService.delete(produtoComercioRemovido.idProduto)
                if(removeProduto)
                    return response.send(produtoComercioRemovido)
                else
                    return response.send("Dados removidos")
            
        } catch (error) 
        {
            response.send(error)
        }
    }


    //Retorna todos os produtos de um comercio
    async getComerciosProduto(request:Request,response:Response) 
    {
        const id = String(request.params.id)
        try 
        {
            const produtosDesteComercio = await service.getComerciosProduto(id)
            if(produtosDesteComercio=== 0)
            {
                response.send("Erro do servidor")
            }
            if(produtosDesteComercio=== 1)
            {
                response.send("Usuario nao existe")
            }
            response.send(produtosDesteComercio)
        } catch (error) 
        {
            response.send(error)
        }
    }
}
export = ProdutoComercioController