import {Router} from "express"
import comercioCotroller from "../controllers/ComercioController"
const routeComercio = Router()

const controller = new comercioCotroller()
routeComercio.post("/",controller.create)
routeComercio.get("/",controller.read)
routeComercio.put("/",controller.update)
routeComercio.delete("/",controller.delete)

export default routeComercio