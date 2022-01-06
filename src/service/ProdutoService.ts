import {Request,Response} from "express"
import { prisma } from "../prisma/prisma"
class ComercioService
{
    async create(produto) 
    {
        try 
        {
            const produtoCriado = await prisma.produto.create({data:produto})

            if(!produtoCriado) return 1
            return produtoCriado
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
            const produtos = await prisma.produto.findMany(
                {include:
                    {comercio:{
                        select:{id:true,nome:true,foto:true,status:true}
                    },categoria:true}})
            if(!produtos) return 1
            return produtos
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
    async update(novoProduto,id) 
    {
        try 
        {
            const produtoAtualizado = await prisma.produto.update(
                {
                    data:novoProduto,
                    where:{id:id}
                })
            if(!produtoAtualizado) return 1
            return produtoAtualizado
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
    async delete(id:string) 
    {
        try 
        {  const deletecarrinho = prisma.carrinho.deleteMany({
            where:{idProduto:id},
          })
          
          const deleteproduto = prisma.produto.delete({
            where:{id:id}
          })
          const transaction = await prisma.$transaction([deletecarrinho, deleteproduto])
            if(!transaction) return 1
            return transaction
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
}
export = ComercioService