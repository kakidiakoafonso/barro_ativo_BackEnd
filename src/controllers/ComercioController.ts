import {Request,Response} from "express"
import ComercioService from "../service/ComercioService"
import {sign} from "jsonwebtoken"

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
            else
            {
                const token = sign(
                    {
                        usuario:comercioCriado
                    },
                    process.env.JWT_SECRET,
                    {
                        subject:JSON.stringify(comercioCriado),
                        expiresIn: '10d'
                    })
                    if(token)
                    {
                        console.log("Token => "+token);
                        const comercio = comercioCriado 
                        return response.status(201).send({token ,comercio})
                        
                    }
                    else
                        return response.status(500).send("Erro ao criar token")
    
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
        const idComercio = request.params.id
        try 
        {
            const comercioAtualizado = await service.update(dadosComercio,idComercio)
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
        const idComercio = request.params.id
        try 
        {
            const comerioRemovido = await service.delete(idComercio)
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