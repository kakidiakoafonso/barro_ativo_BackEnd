import {Router} from "express"
import produtoComercioCotroller from "../controllers/ProdutoComercioController"
const routeProdutoComercio = Router()

const controller = new produtoComercioCotroller()

//CRUD
routeProdutoComercio.post("/",controller.create)
routeProdutoComercio.get("/",controller.read)
routeProdutoComercio.put("/",controller.update)
routeProdutoComercio.delete("/:id",controller.delete)

//Especificos
routeProdutoComercio.get("/:id",controller.getComerciosProduto)

export default routeProdutoComercio