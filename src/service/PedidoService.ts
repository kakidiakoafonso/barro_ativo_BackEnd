import { prisma } from "../prisma/prisma";

class PedidoService{

    async create(pedido: any)
    {

        try {
            const pedidoCriado = await prisma.pedido.create({data:pedido})
            if(!pedidoCriado) return 1
            return pedidoCriado
        } catch (error) 
        {
            console.log(error);
            return 0
        }

    }
    async readById(idUsuario: string) 
    {
        try 
        {
            const pedidos = await prisma.pedido.findMany({
                where: { idUsuario: idUsuario },
                include:{carrinho:true}
              })
            if(!pedidos) return 1
            return pedidos
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }

    async getAllactiveStatus(){


        try {
            const pedidos = await prisma.pedido.findMany({
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
                               
                        }, usuario:{
                            select:{
                                nome:true
                            }
                        }

                    }

            })
            if(!pedidos) return 1
            return pedidos
        } catch (error) {
            console.log(error);
            return 0
        }
    }
    async read() 
    {
        try 
        {
            const pedidos = await prisma.pedido.findMany({
                include:{
                    usuario:{
                        select:{id:true,nome:true,foto:true}
                    },
                    carrinho:true
                }
            })
            if(!pedidos) return 1
            return pedidos
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
    async update(novoPedido: any,idPedido: any) 
    {
        try 
        {
            const PedidoActualizado = await prisma.pedido.update(
                {
                    data:novoPedido,
                    where:{id:idPedido}
                })
            if(!PedidoActualizado) return 1
            return PedidoActualizado
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }


    async delete(idPedido: string) 
    {
        try 
        {
            const pedidoDeletado = await prisma.pedido.delete({where:{id:idPedido}})
            if(!pedidoDeletado) return 1
            return pedidoDeletado
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
}

export = PedidoService