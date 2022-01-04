import { Router } from "express";
import CarrinhoController from "../controllers/CarrinhoController";

const routeCarrinhho= Router()

const controller = new CarrinhoController()
routeCarrinhho.post("/",controller.create)
routeCarrinhho.get("/",controller.read)
routeCarrinhho.put("/:id",controller.update)
routeCarrinhho.delete("/:id",controller.delete)
routeCarrinhho.get("/nameUser",controller.readProductAndNameUser)
routeCarrinhho.get("/product",controller.GetAllProduct)


export default routeCarrinhho