import {Request,Response} from "express"
import produtoService from "../service/ProdutoService"

const service = new produtoService()
class GerenteController 
{
    async create(request:Request,response:Response) 
    {
        const novoProduto = request.body
        try 
        {
            const produtoCriado = await service.create(novoProduto)
            if(produtoCriado=== 0)
            {
                response.send("Email ou cpf ja usado")
            }
            if(produtoCriado=== 1)
            {
                response.send("Gerente nao criado")
            }
            response.send(produtoCriado)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async read(request:Request,response:Response) 
    {
        try 
        {
            const produtos = await service.read()
            if(produtos=== 0)
            {
                response.send("Sem usuarios")
            }
            if(produtos=== 1)
            {
                response.send("Usuario nao criado")
            }
            response.send(produtos)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async update(request:Request,response:Response) 
    {
        const dadosProdutos = request.body
        const id = request.params.id
        try 
        {
            const produtoAtualizado = await service.update(dadosProdutos,id)
            if(produtoAtualizado=== 0)
            {
                response.send("Email ou cpf ja usado")
            }
            if(produtoAtualizado=== 1)
            {
                response.send("Usuario nao criado")
            }
            response.send(produtoAtualizado)
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
            const produtoRemovido = await service.delete(id)
            if(produtoRemovido=== 0)
            {
                response.send("Erro do servidor")
            }
            if(produtoRemovido=== 1)
            {
                response.send("Usuario nao existe")
            }
            response.send(produtoRemovido)
        } catch (error) 
        {
            response.send(error)
        }
    }
}
export = GerenteController