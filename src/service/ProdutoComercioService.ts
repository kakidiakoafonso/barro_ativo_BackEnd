import {Request,Response} from "express"
import { prisma } from "../prisma/prisma"
class ProdutoComercioService
{
    async create(idProduto:string,idComercio:string) 
    {
        const data = {idProduto:idProduto,idComercio:idComercio}
        try 
        {
            const novo = await prisma.produtoComercio.create({data:{
                idProduto:idProduto,
                idComercio:idComercio
            }, 
            include:{comercio:true,produto:true}})

            if(!novo) return 1
            return novo
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
            const produtosComercio = await prisma.produtoComercio.findMany({include:{comercio:true,produto:true}})
            if(!produtosComercio) return 1
            return produtosComercio
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
    async update(novoElement,id) 
    {
        try 
        {
            const elementAtualizado = await prisma.produtoComercio.update(
                {
                    data:novoElement,
                    include:{comercio:true,produto:true},
                    where:{id:id}
                })
            if(!elementAtualizado) return 1
            return elementAtualizado
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
    async delete(id) 
    {
        try 
        {
            const element = await prisma.produtoComercio.delete({where:{id:id},include:{produto:true}})
            if(!element) return 1
            return element
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }


    //Retorna todos os produtos de um comercio espeifico
    async getComerciosProduto(id:string) 
    {
        try 
        {
            const element = await prisma.produtoComercio.findMany(
                {where:{idComercio:id},
                include:{produto:true,comercio:true}
            })
            if(!element) return 1
            return element
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
}
export = ProdutoComercioService