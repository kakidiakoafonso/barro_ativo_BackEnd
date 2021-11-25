import {Request,Response} from "express"
import { prisma } from "../prisma/prisma"
class GerenteComercioService
{
    async create(data) 
    {
        try 
        {
            const novo = await prisma.gerenteComercio.create({data:data, 
            include:{comercio:true,gerente:true}})

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
            const gerentes = await prisma.gerenteComercio.findMany({include:{comercio:true,gerente:true}})
            if(!gerentes) return 1
            return gerentes
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
            const elementAtualizado = await prisma.gerenteComercio.update(
                {
                    data:novoElement,
                    include:{comercio:true,gerente:true},
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
            const element = await prisma.gerenteComercio.delete({where:{id:id}})
            if(!element) return 1
            return element
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
}
export = GerenteComercioService