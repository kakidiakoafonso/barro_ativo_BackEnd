import express from "express"
import "dotenv/config"
import routeComercio from "./routes/routes.comercio"
import routeGerente from "./routes/routes.gerente"
import routeGerenteComercio from "./routes/routes.gerenteComercio"
import routeProduto from "./routes/routes.produto"
import routeProdutoComercio from "./routes/routes.produtoComercio"
import routeUsuario from "./routes/routes.usuario"
import routeUsuarioAuth from "./routes/routes.usuarioAuth"
import { AuthCheckUsuario } from "./middleware/AuhtCheckUsuario"

const app = express()
app.use(express.json())
app.use("/auth",routeUsuarioAuth)
app.use("/usuario",routeUsuario)
app.use("/gerente",routeGerente)
app.use("/comercio",routeComercio)
app.use("/comerciogerente",routeGerenteComercio)
app.use("/produto",routeProduto)
app.use("/produtocomercio",routeProdutoComercio)

app.get("/teste",AuthCheckUsuario, (req,res)=>{
    const {usuario} = req.body
    res.send(usuario)
})
app.get("/ola",(req,res)=>{
    res.send("Bom dia! testandoa a conexao")
})

app.listen(400,()=>console.log("Aplicacao rodando na porta 400"))
