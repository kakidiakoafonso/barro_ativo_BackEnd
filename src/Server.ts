import express from "express"
import "dotenv/config"
import cors from 'cors'
import routeComercio from "./routes/routes.comercio"
import routeGerente from "./routes/routes.gerente"
import routeProduto from "./routes/routes.produto"
import routeUsuario from "./routes/routes.usuario"
import routeUsuarioAuth from "./routes/routes.usuarioAuth"
import routeComercioAuth from "./routes/routes.comercioAuth"
import { AuthCheckUsuario } from "./middleware/AuhtCheckUsuario"
import { AuthCheckComercio } from "./middleware/AuhtCheckComercio"
import routePedido from "./routes/routes.pedido"
import routeCarrinhho from "./routes/routes.carrinho"
import routecategoria from "./routes/routes.categoria"




const port = process.env.PORT || 400
const app = express()
app.use(express.json())
app.use(cors())
app.use("/auth/usuario",routeUsuarioAuth)
app.use("/auth/comercio",routeComercioAuth)
app.use("/usuario",routeUsuario)
app.use("/gerente",routeGerente)
app.use("/comercio",routeComercio)
app.use("/produto",routeProduto)
app.use("/pedido",routePedido)
app.use("/carrinho",routeCarrinhho)
app.use("/categoria",routecategoria)


app.get("/",(req,res)=>
{
    res.sendFile(__dirname+'/public/doc.html')
})
app.get("/teste",(req,res)=>{
    res.send("Bom dia! testando a conexao")
})

app.listen(port,()=>console.log(`Aplicacao rodando na porta ${port}`))
