import {Request,Response} from "express"
import { prisma } from "../prisma/prisma"
class ComercioService
{
    async create(comercio) 
    {
        try 
        {
            const comercioCriado = await prisma.comercio.create({data:comercio})

            if(!comercioCriado) return 1
            return comercioCriado
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
            const comercios = await prisma.comercio.findMany()
            if(!comercios) return 1
            return comercios
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
    async update(novoComercio,id) 
    {
        try 
        {
            const comercioAtualizado = await prisma.comercio.update(
                {
                    data:novoComercio,
                    where:{id:id}
                })
            if(!comercioAtualizado) return 1
            return comercioAtualizado
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
            const comercioDeletado = await prisma.comercio.delete({where:{id:id}})
            if(!comercioDeletado) return 1
            return comercioDeletado
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
            const comercio = await prisma.comercio.findUnique({where:{email:email}})
            if(!comercio) return 1
            return comercio
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
}
export = ComercioService