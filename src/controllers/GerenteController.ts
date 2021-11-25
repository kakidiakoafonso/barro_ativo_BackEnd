import {Request,Response} from "express"
import GerenteService from "../service/GerenteService"

const service = new GerenteService()
class GerenteController 
{
    async create(request:Request,response:Response) 
    {
        const novoGerente = request.body
        try 
        {
            const gerenteCriado = await service.create(novoGerente)
            if(gerenteCriado=== 0)
            {
                response.send("Email ou cpf ja usado")
            }
            if(gerenteCriado=== 1)
            {
                response.send("Gerente nao criado")
            }
            response.send(gerenteCriado)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async read(request:Request,response:Response) 
    {
        try 
        {
            const gerentes = await service.read()
            if(gerentes=== 0)
            {
                response.send("Sem usuarios")
            }
            if(gerentes=== 1)
            {
                response.send("Usuario nao criado")
            }
            response.send(gerentes)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async update(request:Request,response:Response) 
    {
        const dadosGerentes = request.body
        const id = "0d1d9eaf-d5b0-4512-8d47-e3e7105a9320"
        try 
        {
            const gerenteAtualizado = await service.update(dadosGerentes,id)
            if(gerenteAtualizado=== 0)
            {
                response.send("Email ou cpf ja usado")
            }
            if(gerenteAtualizado=== 1)
            {
                response.send("Usuario nao criado")
            }
            response.send(gerenteAtualizado)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async delete(request:Request,response:Response) 
    {
        const id = "e67a8b8f-01ac-421a-8ec5-c15c87601c33"
        try 
        {
            const gerenteRemovido = await service.delete(id)
            if(gerenteRemovido=== 0)
            {
                response.send("Erro do servidor")
            }
            if(gerenteRemovido=== 1)
            {
                response.send("Usuario nao existe")
            }
            response.send(gerenteRemovido)
        } catch (error) 
        {
            response.send(error)
        }
    }
}
export = GerenteController