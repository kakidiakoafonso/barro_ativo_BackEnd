import {Router} from "express"
import Comerciocotroller from "../controllers/ComercioAutenticacaoController"
const routeComercioAuth = Router()

const controller = new Comerciocotroller()
routeComercioAuth.post("/",controller.login)

export default routeComercioAuth