import {Router} from "express"
import Usuariocotroller from "../controllers/UsuarioAutenticacaoController"
const routeUsuarioAuth = Router()

const controller = new Usuariocotroller()
routeUsuarioAuth.post("/",controller.login)

export default routeUsuarioAuth