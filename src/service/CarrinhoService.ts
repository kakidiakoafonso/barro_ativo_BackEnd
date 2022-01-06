import { prisma } from "../prisma/prisma";

class CarrinhoService{

    async create(carrinho)
    {

        try {
            const carrinhoCrido = await prisma.carrinho.create({
                data:carrinho
                
            })
            if(!carrinhoCrido) return 1
            return carrinhoCrido
        } catch (error) 
        {
            console.log(error);
            return 0
        }

   
    }



    async readAllProdutc() 
    {
     
        
        try 
        {
            const carrinhos = await prisma.carrinho.findMany({
                include: {
                produto: true,
                  }
              })
            if(!carrinhos) return 1
            return carrinhos
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }



    async readNameUser() 
    {
     
        
        try 
        {
            const carrinho = await prisma.carrinho.findMany({
                
                
                include: {
                 
                    pedido: {

                       
                        include:{ 
                            usuario: {
                          
                            select: {
                              nome: true, 
                            },
                          },
                        }
                      },   
                       produto: true, 
                
               
                }
            }
               
            )
            if(!carrinho) return 1
            return carrinho
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
            const carrinhos = await prisma.carrinho.findMany()
            if(!carrinhos) return 1
            return carrinhos
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
    async update(novocarrinho,id) 
    {
        try 
        {
            const carrinhoActualizado = await prisma.carrinho.update(
                {
                    data:novocarrinho,
                    where:{id:id}
                })
            if(!carrinhoActualizado) return 1
            return carrinhoActualizado
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
    async delete(IdCarrinho:string) 
    {
        try 
        {
            const carrinhoDeletado = await prisma.carrinho.delete({where:{id:IdCarrinho}})
            if(!carrinhoDeletado) return 1
            return carrinhoDeletado
        } catch (error) 
        {
            console.log(error);
            return 0
        }
    }
}

export = CarrinhoService