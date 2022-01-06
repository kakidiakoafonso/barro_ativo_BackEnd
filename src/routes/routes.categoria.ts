import {Router} from "express"
import categoriaCotroller from "../controllers/CategoriaController"
const routecategoria = Router()

const controller = new categoriaCotroller()
routecategoria.post("/",controller.create)
routecategoria.get("/",controller.read)
routecategoria.put("/:id",controller.update)
routecategoria.delete("/:id",controller.delete)

export default routecategoria