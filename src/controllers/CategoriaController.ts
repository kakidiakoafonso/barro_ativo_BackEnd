import {Request,Response} from "express"
import categoriaService from "../service/CategoriaService"


const service = new categoriaService()
class CategoriaController 
{
    async create(request:Request,response:Response) 
    {
        const novocategoria = request.body
        try 
        {
            const categoriaCriado = await service.create(novocategoria)
            if(categoriaCriado=== 0)
            {
                response.send("Categoria Ja Criada")
            }
            if(categoriaCriado=== 1)
            {
                response.send("Categoria N Criada")
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
            const categorias = await service.read()
            if(categorias=== 0)
            {
                response.send("Sem usuarios")
            }
            if(categorias=== 1)
            {
                response.send("Usuario nao criado")
            }
            response.send(categorias)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async update(request:Request,response:Response) 
    {
        const dadoscategoria = request.body
        const idcategoria = request.params.id
        try 
        {
            const categoriaAtualizado = await service.update(dadoscategoria,idcategoria)
            if(categoriaAtualizado=== 0)
            {
                response.send("Categoria ja usada")
            }
            if(categoriaAtualizado=== 1)
            {
                response.send("Usuario nao criado")
            }
            response.send(categoriaAtualizado)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async delete(request:Request,response:Response) 
    {
        const idcategoria = request.params.id
        try 
        {
            const comerioRemovido = await service.delete(idcategoria)
            if(comerioRemovido=== 0)
            {
                response.send("Erro do servidor")
            }
            if(comerioRemovido=== 1)
            {
                response.send("Categoria nao existe")
            }
            response.send(comerioRemovido)
        } catch (error) 
        {
            response.send(error)
        }
    }
}
export = CategoriaController