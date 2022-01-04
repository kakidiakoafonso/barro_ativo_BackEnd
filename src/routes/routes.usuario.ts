import {Router} from "express"
import Usuariocotroller from "../controllers/UsuarioController"
const routeUsuario = Router()

const controller = new Usuariocotroller()
routeUsuario.post("/",controller.create)
routeUsuario.get("/",controller.read)
routeUsuario.put("/:id",controller.update)
routeUsuario.delete("/:id",controller.delete)

export default routeUsuario