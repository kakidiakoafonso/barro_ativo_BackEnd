import express from "express"
import routeComercio from "./routes/routes.comercio"
import routeGerente from "./routes/routes.gerente"
import routeGerenteComercio from "./routes/routes.gerenteComercio"
import routeUsuario from "./routes/routes.usuario"

const app = express()
app.use(express.json())
app.use("/usuario",routeUsuario)
app.use("/gerente",routeGerente)
app.use("/comercio",routeComercio)
app.use("/comerciogerente",routeGerenteComercio)

app.listen(400,()=>console.log("Aplicacao rodando na porta 400"))