import { Router } from "express";
import PedidoController from "../controllers/PedidoController"
import { AuthCheckUsuario } from "../middleware/AuhtCheckUsuario";

const routePedido = Router()

const controller = new PedidoController()
routePedido.post("/",AuthCheckUsuario,controller.create)
routePedido.get("/",controller.read)
routePedido.delete("/:id",controller.delete)
routePedido.put("/:id",controller.update)
routePedido.get("/:id",controller.readById)
routePedido.get("/statusActive",controller.readActivePedido)

export default routePedido