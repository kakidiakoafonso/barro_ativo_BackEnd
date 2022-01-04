import {json, Request,Response} from "express"
import UsuarioService from "../service/UsuarioService"
import {sign} from 'jsonwebtoken'

const usuarioService = new UsuarioService()
class UsuarioAutenticacao
{
    async login (request:Request,response:Response)
    {
        const {email, senha} = request.body
        const usuarioResponse = await usuarioService.login(email)
        if(usuarioResponse===1)
        {
            return response.send("Usuario nao existente")
        }
        if(usuarioResponse===0)
        {
            return response.send("Erro do servidor")
        }
        else
        {
            
            if(senha!==usuarioResponse.senha)
            { 
                return response.send("Senha errada")
            }
            const token = sign(
                {
                    usuario:usuarioResponse
                },
                process.env.JWT_SECRET,
                {
                    subject:JSON.stringify(usuarioResponse),
                    expiresIn: '10d'
                })
            if(token)
            {
                console.log("Token => "+token);
                const usuario = usuarioResponse
                return response.send({token ,usuario})
                
            }
            else
                return response.send("Erro ao criar token")
                
        }

    }
}
export = UsuarioAutenticacao