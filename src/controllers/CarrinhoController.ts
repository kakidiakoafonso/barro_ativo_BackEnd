import { Request, Response } from "express";
import CarrinhoService from "../service/CarrinhoService";

const service = new CarrinhoService()

class CarrinhoController {

    async create(request:Request,response:Response){

        const carrinho = request.body

        try {
            const newcarrinho = await service.create(carrinho)
            if(carrinho=== 0)
            {
                response.send("Somoting Happen")
            }
            if(carrinho=== 1)
            {
                response.send("carrinho n efectuado")
            }
            response.status(201).send(newcarrinho)
        } catch (error) {
            
        }
    }
    async readProductAndNameUser(request:Request,response:Response) 
    {
     
        try 
        {
            const carrinhos = await service.readNameUser()
            if(carrinhos=== 0)
            {
                response.send("Sem pedidos")
            }
            if(carrinhos=== 1)
            {
                response.send("pedidos nao criado")
            }
            response.send(carrinhos)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async GetAllProduct(request:Request,response:Response) 
    {
     
        try 
        {
            const carrinhos = await service.readAllProdutc()
            if(carrinhos=== 0)
            {
                response.send("Sem pedidos")
            }
            if(carrinhos=== 1)
            {
                response.send("pedidos nao criado")
            }
            response.send(carrinhos)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async read(request:Request,response:Response) 
    {
        try 
        {
            const carrinhos = await service.read()
            if(carrinhos=== 0)
            {
                response.send("Sem carrinhos")
            }
            if(carrinhos=== 1)
            {
                response.send("carrinhos nao criado")
            }
            response.send(carrinhos)
        } catch (error) 
        {
            response.send(error)
        }
    }
    async update(request:Request,response:Response) 
    {
        const carrinho = request.body
        const Idcarrinho = request.params.id

        try {
            const carrinhoActualizado = await service.update(carrinho,Idcarrinho)
            if(carrinhoActualizado=== 0)
            {
                response.send("Somoting Happen")
            }
            if(carrinhoActualizado=== 1)
            {
                response.send("carrinho n efectuado")
            }
            response.status(201).send(carrinhoActualizado)
        } catch (error) {
            
        }
    }
    async delete(request:Request,response:Response) 
    {
        const carrinho = request.body
        const Idcarrinho = request.params.id

        try {
            const carrinhodeletado = await service.delete(Idcarrinho)
            if(carrinhodeletado=== 0)
            {
                response.send("Somoting Happen")
            }
            if(carrinhodeletado=== 1)
            {
                response.send("carrinho n efectuado")
            }
            response.status(201).send({msg:"Item removido",carrinho:carrinhodeletado})
        } catch (error) {
            
        }
    }
}

export = CarrinhoController