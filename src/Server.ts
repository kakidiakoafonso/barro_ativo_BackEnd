import express from "express"
import "dotenv/config"
import cors from 'cors'
import routeComercio from "./routes/routes.comercio"
import routeGerente from "./routes/routes.gerente"
import routeGerenteComercio from "./routes/routes.gerenteComercio"
import routeProduto from "./routes/routes.produto"
import routeProdutoComercio from "./routes/routes.produtoComercio"
import routeUsuario from "./routes/routes.usuario"
import routeUsuarioAuth from "./routes/routes.usuarioAuth"
import routeComercioAuth from "./routes/routes.comercioAuth"
import { AuthCheckUsuario } from "./middleware/AuhtCheckUsuario"
import { AuthCheckComercio } from "./middleware/AuhtCheckComercio"




const port = process.env.PORT || 400
const app = express()
app.use(express.json())
app.use(cors())
app.use("/auth/usuario",routeUsuarioAuth)
app.use("/auth/comercio",routeComercioAuth)
app.use("/usuario",routeUsuario)
app.use("/gerente",routeGerente)
app.use("/comercio",routeComercio)
// app.use("/comerciogerente",routeGerenteComercio)
app.use("/produto",routeProduto)
app.use("/produtocomercio",routeProdutoComercio)


app.get("/",(req,res)=>
{
    res.sendFile(__dirname+'/public/doc.html')
})
app.get("/teste",(req,res)=>{
    res.send("Bom dia! testando a conexao")
})

app.listen(port,()=>console.log(`Aplicacao rodando na porta ${port}`))
