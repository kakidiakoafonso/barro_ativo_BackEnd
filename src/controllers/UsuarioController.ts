import {Request,Response} from "express"
import UsuarioService from "../service/UsuarioService"
import {usuarioTokenGenerator} from "../jobs/webtoken"
import {sign} from 'jsonwebtoken'


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
            else
            {
               
            const tokenGenerated = await usuarioTokenGenerator(usuarioCriado)
            if(tokenGenerated.status==="error")
                return response.status(500).send("Erro ao criar token")
            else
            {
                const usuario = usuarioCriado 
                const token = tokenGenerated.data
                return response.status(201).send({token ,usuario})
            }
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
        const idUsuario = request.params.id
        try 
        {
            const usuarioCriado = await service.update(dadosUsuario,idUsuario)
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
        const idUsuario = request.params.id
        try 
        {
            const usuarioRemovido = await service.delete(idUsuario)
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