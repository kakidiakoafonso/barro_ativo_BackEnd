import {Request,Response} from "express"
import { prisma } from "../prisma/prisma"
class CategoriaService
{
    async create(categoria) 
    {
        try 
        {
            const categoriaCriada = await prisma.categoria.create({data:categoria})

            if(!categoriaCriada) return 1
            return categoriaCriada
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
            const categorias = await prisma.categoria.findMany({})
            if(!categorias) return 1
            return categorias
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
    async update(novocategoria,id) 
    {
        try 
        {
            const categoriaAtualizado = await prisma.categoria.update(
                {
                    data:novocategoria,
                    where:{id:id}
                })
            if(!categoriaAtualizado) return 1
            return categoriaAtualizado
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
    async delete(id:string) 
    {
        try 
        {
            const categoriaDeletado = await prisma.categoria.delete({where:{id:id}})
            if(!categoriaDeletado) return 1
            return categoriaDeletado
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
}
export = CategoriaService