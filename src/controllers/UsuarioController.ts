import {Request,Response} from "express"
import UsuarioService from "../service/UsuarioService"

const service = new UsuarioService()
class Usuariocotroller 
{
    async create(request:Request,response:Response) 
    {
        const novoUsuario = request.body
        try 
        {
            const usuarioCriado = await service.create(novoUsuario)
            if(usuarioCriado=== 0)
            {
                response.send("Email ou cpf ja usado")
            }
            if(usuarioCriado=== 1)
            {
                response.send("Usuario nao criado")
            }
            response.send(usuarioCriado)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async read(request:Request,response:Response) 
    {
        try 
        {
            const usuarios = await service.read()
            if(usuarios=== 0)
            {
                response.send("Sem usuarios")
            }
            if(usuarios=== 1)
            {
                response.send("Usuario nao criado")
            }
            response.send(usuarios)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async update(request:Request,response:Response) 
    {
        const dadosUsuario = request.body
        const id = "e67a8b8f-01ac-421a-8ec5-c15c87601c33"
        try 
        {
            const usuarioCriado = await service.update(dadosUsuario,id)
            if(usuarioCriado=== 0)
            {
                response.send("Email ou cpf ja usado")
            }
            if(usuarioCriado=== 1)
            {
                response.send("Usuario nao criado")
            }
            response.send(usuarioCriado)
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
            const usuarioRemovido = await service.delete(id)
            if(usuarioRemovido=== 0)
            {
                response.send("Erro do servidor")
            }
            if(usuarioRemovido=== 1)
            {
                response.send("Usuario nao existe")
            }
            response.send(usuarioRemovido)
        } catch (error) 
        {
            response.send(error)
        }
    }
}
export = Usuariocotroller