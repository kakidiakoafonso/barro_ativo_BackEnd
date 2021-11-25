import {Request,Response} from "express"
import ComercioService from "../service/ComercioService"

const service = new ComercioService()
class GerenteController 
{
    async create(request:Request,response:Response) 
    {
        const novoComercio = request.body
        try 
        {
            const comercioCriado = await service.create(novoComercio)
            if(comercioCriado=== 0)
            {
                response.send("Email ou cpf ja usado")
            }
            if(comercioCriado=== 1)
            {
                response.send("Gerente nao criado")
            }
            response.send(comercioCriado)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async read(request:Request,response:Response) 
    {
        try 
        {
            const comercios = await service.read()
            if(comercios=== 0)
            {
                response.send("Sem usuarios")
            }
            if(comercios=== 1)
            {
                response.send("Usuario nao criado")
            }
            response.send(comercios)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async update(request:Request,response:Response) 
    {
        const dadosComercio = request.body
        const id = "2343e711-8fff-48aa-bc6f-7b5eb9ffd2dc"
        try 
        {
            const comercioAtualizado = await service.update(dadosComercio,id)
            if(comercioAtualizado=== 0)
            {
                response.send("Email ou cpf ja usado")
            }
            if(comercioAtualizado=== 1)
            {
                response.send("Usuario nao criado")
            }
            response.send(comercioAtualizado)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async delete(request:Request,response:Response) 
    {
        const id = "2343e711-8fff-48aa-bc6f-7b5eb9ffd2dc"
        try 
        {
            const comerioRemovido = await service.delete(id)
            if(comerioRemovido=== 0)
            {
                response.send("Erro do servidor")
            }
            if(comerioRemovido=== 1)
            {
                response.send("Usuario nao existe")
            }
            response.send(comerioRemovido)
        } catch (error) 
        {
            response.send(error)
        }
    }
}
export = GerenteController