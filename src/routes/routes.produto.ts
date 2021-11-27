import {Router} from "express"
import produtoCotroller from "../controllers/ProdutoController"
const routeProduto = Router()

const controller = new produtoCotroller()
routeProduto.post("/",controller.create)
routeProduto.get("/",controller.read)
routeProduto.put("/:id",controller.update)
routeProduto.delete("/:id",controller.delete)

export default routeProduto