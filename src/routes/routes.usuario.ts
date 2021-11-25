import {Router} from "express"
import Usuariocotroller from "../controllers/UsuarioController"
const routeUsuario = Router()

const controller = new Usuariocotroller()
routeUsuario.post("/",controller.create)
routeUsuario.get("/",controller.read)
routeUsuario.put("/",controller.update)
routeUsuario.delete("/",controller.delete)

export default routeUsuario