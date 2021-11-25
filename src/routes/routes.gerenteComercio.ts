import {Router} from "express"
import GerenteComerciocotroller from "../controllers/GerenteComercioController"
const routeGerenteComercio = Router()

const controller = new GerenteComerciocotroller()
routeGerenteComercio.post("/",controller.create)
routeGerenteComercio.get("/",controller.read)
routeGerenteComercio.put("/",controller.update)
routeGerenteComercio.delete("/",controller.delete)

export default routeGerenteComercio