import {Request,Response} from "express"
import { prisma } from "../prisma/prisma"
class UsuarioService
{
    async create(usuario) 
    {
        try 
        {
            const usuarioCriado = await prisma.usuario.create({data:usuario})
            if(!usuarioCriado) return 1
            return usuarioCriado
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
    async read() 
    {
        try 
        {
            const usuarios = await prisma.usuario.findMany()
            if(!usuarios) return 1
            return usuarios
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
    async update(novoUsuario,id) 
    {
        try 
        {
            const usuarioAtualizado = await prisma.usuario.update(
                {
                    data:novoUsuario,
                    where:{id:id}
                })
            if(!usuarioAtualizado) return 1
            return usuarioAtualizado
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
    async delete(id) 
    {
        try 
        {const deletepedido = prisma.pedido.deleteMany({
            where:{idUsuario:id},
          })
          
          const deleteusuario = prisma.usuario.delete({
            where:{id:id}
          })
          const transaction = await prisma.$transaction([deletepedido, deleteusuario])
            if(!transaction) return 1
            return transaction
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
    async login(email:string) 
    {
        try 
        {
            const usuario = await prisma.usuario.findUnique({where:{email:email}})
            if(!usuario) return 1
            return usuario
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
    async AllPedidoUniquerUser(idUser:string) 
    {
        try 
        {
            const usuarios = await prisma.usuario.findMany({
                where:{
                    id:idUser
                },
                include:{
                            pedido:{
                                where: {
                                    estado: 1,
                                  },
                                    include:{
                
                                        carrinho:{
                                            select:{
                
                                                quantidade:true,
                
                                                    produto:{
                                                        select:{
                                                            nome:true,
                                                            foto:true,
                                                            preco:true,
                                                            
                                                        
                                                    }
                                                }
                                            },  
                                               
                                        }
                
                                    }
                            }
                }
            })
            if(!usuarios) return 1
            return usuarios
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
}
export = UsuarioService