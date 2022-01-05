import {Request,Response} from "express"
import { prisma } from "../prisma/prisma"
class GernteService
{
    async create(gerente) 
    {
        try 
        {
            const gerenteCriado = await prisma.gerente.create({data:gerente})

            if(!gerenteCriado) return 1
            return gerenteCriado
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
            const gerentes = await prisma.gerente.findMany({include:{comercio:true}})
            if(!gerentes) return 1
            return gerentes
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
    async update(novoGerente,id) 
    {
        try 
        {
            const gerenteAtualizado = await prisma.gerente.update(
                {
                    data:novoGerente,
                    where:{id:id}
                })
            if(!gerenteAtualizado) return 1
            return gerenteAtualizado
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
            const gerenteDeletado = await prisma.gerente.delete({where:{id:id}})
            if(!gerenteDeletado) return 1
            return gerenteDeletado
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
}
export = GernteService