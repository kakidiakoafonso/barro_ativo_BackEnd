import {Request,Response,NextFunction} from "express"
import { verify } from "jsonwebtoken"

interface Ipayload {
    sub:string
}
export async function AuthCheckUsuario (request:Request,response:Response,next:NextFunction)
{
    const bearerToken = request.headers.authorization
    const token = bearerToken.split(" ")[1]

    
    if(!token)
    {
        return response.status(401).json(
        {error:"Token vazio"}
        )
    }
    try 
    {
        verify(token, process.env.JWT_SECRET,(erro,dados)=>{
            if(erro) 
            {
                return response.status(401).
                json({error:"Erro na verificacao do token"})
            }
            request.body.usuario = dados.usuario
            next()
            
        })
        
        
    } 
    catch (error) {
        return response.status(401).json(
            {errorCode:"Token expirado"}
            )
    }
}