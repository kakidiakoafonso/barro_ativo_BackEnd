import {json, Request,Response} from "express"
import Service from "../service/ComercioService"
import {sign} from 'jsonwebtoken'

const service = new Service()
class ComercioAutenticacao
{
    async login (request:Request,response:Response)
    {
        const {email, senha} = request.body
        const comercioResponse = await service.login(email)
        if(comercioResponse===1)
        {
            return response.send("Usuario nao existente")
        }
        if(comercioResponse===0)
        {
            return response.send("Erro do servidor")
        }
        else
        {
            
            if(senha!==comercioResponse.senha)
            { 
                return response.send("Senha errada")
            }
            const token = sign(
                {
                    comercio:comercioResponse
                },
                process.env.JWT_SECRET,
                {
                    subject:JSON.stringify(comercioResponse),
                    expiresIn: '10d'
                })
            if(token)
            {
                console.log("Token => "+token);
                
                return response.send({token ,comercioResponse})
                
            }
            else
                return response.send("Erro ao criar token")
                
        }

    }
}
export = ComercioAutenticacao