import {Request,Response} from "express"
import ProdutoService from "../service/ProdutoService"
import ProdutoComercioService from "../service/ProdutoComercioService"

const produtoService = new ProdutoService()
const produtoComercioService = new ProdutoComercioService()



interface Provider {
    region: string,
    country: string,
    locale: string,
    company: string
}

class GerenteController 
{
    async create(request:Request,response:Response) 
    {
        const idComercio = request.body.comercio.id
        console.log(idComercio);
        
        
        const novoProduto = 
        {
            nome: request.body.nome,
            foto: request.body.foto,
            descricao: request.body.descricao,
            preco: request.body.preco,
            quantidade: request.body.quantidade
        }
        try 
        {
            const produtoCriado = await produtoService.create(novoProduto)
            if(produtoCriado=== 0)
            {
                response.send("Email ou cpf ja usado")
            }
            if(produtoCriado=== 1)
            {
                response.send("Gerente nao criado")
            }
            if(produtoCriado!==1 &&produtoCriado!==0)
            {
                let idProduto = produtoCriado.id
                let idComercio = request.body.comercio.id
                
                const novoProdutoComercio = await produtoComercioService.create(idProduto,idComercio)
                if(novoProdutoComercio=== 0)
                {
                    return response.send("Erro ao criar relacao, ja existe")
                }
                if(novoProdutoComercio=== 1)
                {
                    return response.send("Erro ao criar relacao, nao criado")
                }
                return response.send(produtoCriado)
            }
        } catch (error) 
        {
            response.send(error)
        }
    }
    async read(request:Request,response:Response) 
    {
        try 
        {
            const produtos = await produtoService.read()
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
            const produtoAtualizado = await produtoService.update(dadosProdutos,id)
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
            const produtoRemovido = await produtoService.delete(id)
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