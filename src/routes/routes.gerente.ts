import {Router} from "express"
import Gerentecotroller from "../controllers/GerenteController"
const routeGerente = Router()

const controller = new Gerentecotroller()
routeGerente.post("/",controller.create)
routeGerente.get("/",controller.read)
routeGerente.put("/:id",controller.update)
routeGerente.delete("/:id",controller.delete)

export default routeGerente