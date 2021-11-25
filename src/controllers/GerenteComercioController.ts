import {Request,Response} from "express"
import GerenteComercioService from "../service/GerenteComercioService"

const service = new GerenteComercioService()
class GerenteComercioController 
{
    async create(request:Request,response:Response) 
    {
        const novoGerenteComercio = request.body
        try 
        {
            const gerenteComercioCriado = await service.create(novoGerenteComercio)
            if(gerenteComercioCriado=== 0)
            {
                response.send("Email ou cpf ja usado")
            }
            if(gerenteComercioCriado=== 1)
            {
                response.send("Gerente nao criado")
            }
            response.send(gerenteComercioCriado)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async read(request:Request,response:Response) 
    {
        try 
        {
            const gerenteComercios = await service.read()
            if(gerenteComercios=== 0)
            {
                response.send("Sem usuarios")
            }
            if(gerenteComercios=== 1)
            {
                response.send("Usuario nao criado")
            }
            response.send(gerenteComercios)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async update(request:Request,response:Response) 
    {
        const dadosGerenteComercio = request.body
        const id = "0d1d9eaf-d5b0-4512-8d47-e3e7105a9320"
        try 
        {
            const gerenteComercioAtualizado = await service.update(dadosGerenteComercio,id)
            if(gerenteComercioAtualizado=== 0)
            {
                response.send("Email ou cpf ja usado")
            }
            if(gerenteComercioAtualizado=== 1)
            {
                response.send("Usuario nao criado")
            }
            response.send(gerenteComercioAtualizado)
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
            const gerenteComerRemovido = await service.delete(id)
            if(gerenteComerRemovido=== 0)
            {
                response.send("Erro do servidor")
            }
            if(gerenteComerRemovido=== 1)
            {
                response.send("Usuario nao existe")
            }
            response.send(gerenteComerRemovido)
        } catch (error) 
        {
            response.send(error)
        }
    }
}
export = GerenteComercioController