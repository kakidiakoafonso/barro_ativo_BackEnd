import {Router} from "express"
import comercioCotroller from "../controllers/ComercioController"
const routeComercio = Router()

const controller = new comercioCotroller()
routeComercio.post("/",controller.create)
routeComercio.get("/",controller.read)
routeComercio.put("/:id",controller.update)
routeComercio.delete("/:id",controller.delete)

export default routeComercio