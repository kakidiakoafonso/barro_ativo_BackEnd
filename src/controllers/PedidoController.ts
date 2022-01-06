import { Request, Response } from "express";
import PedidoService from "../service/PedidoService";

const service = new PedidoService()

class PedidoController {

    async create(request:Request,response:Response){

        const {id} = request.body.usuario

        try {
            const newPedido = await service.create({idUsuario:id})
            if(newPedido=== 0)
            {
                response.send("Somoting Happen")
            }
            if(newPedido=== 1)
            {
                response.send("Pedido n efectuado")
            }
            response.status(201).send(newPedido)
        } catch (error) {
            
        }
    }

    async PedidosActivos(request:Request,response:Response) 
    {
        try 
        {
            const pedidos = await service.pedidosActivos()
            if(pedidos=== 0)
            {
                response.send("Sem pedidos")
            }
            if(pedidos=== 1)
            {
                response.send("pedidos nao criado")
            }
            response.send(pedidos)
        } catch (error) 
        {
            response.send(error)
        }
    }


    async read(request:Request,response:Response) 
    {
        try 
        {
            const pedidos = await service.read()
            if(pedidos=== 0)
            {
                response.send("Sem pedidos")
            }
            if(pedidos=== 1)
            {
                response.send("pedidos nao criado")
            }
            response.send(pedidos)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async readById(request:Request,response:Response) 
    {
        let idPedido = request.params.id
        try 
        {
            const pedidoApagado = await service.readById(idPedido)
            if(pedidoApagado=== 0)
            {
                response.send("Sem pedidos")
            }
            if(pedidoApagado=== 1)
            {
                response.send("pedidos nao apagado")
            }
            response.send(pedidoApagado)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async delete(request:Request,response:Response) 
    {
        let idPedido = request.params.id
        try 
        {
            const pedidoApagado = await service.delete(idPedido)
            if(pedidoApagado=== 0)
            {
                response.send("Sem pedidos")
            }
            if(pedidoApagado=== 1)
            {
                response.send("pedidos nao apagado")
            }
            response.send(pedidoApagado)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async update(request:Request,response:Response) 
    {
        let idPedido = request.params.id
        const pedidoUpdate = request.body
        try 
        {
            const pedidoAtualizado = await service.update(pedidoUpdate,idPedido)
            if(pedidoAtualizado=== 0)
            {
                response.send("Sem pedidos")
            }
            if(pedidoAtualizado=== 1)
            {
                response.send("pedidos nao atualizado")
            }
            response.send(pedidoAtualizado)
        } catch (error) 
        {
            response.send(error)
        }
    }
}

export = PedidoController