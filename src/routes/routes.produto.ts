import {Router} from "express"
import produtoCotroller from "../controllers/ProdutoController"
import { AuthCheckComercio } from "../middleware/AuhtCheckComercio"
const routeProduto = Router()

const controller = new produtoCotroller()
routeProduto.post("/",AuthCheckComercio,controller.create)
routeProduto.get("/",controller.read)
routeProduto.put("/:id",controller.update)
routeProduto.delete("/:id",controller.delete)

export default routeProduto