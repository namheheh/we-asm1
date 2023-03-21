import { getAll, get, update, deletet } from "../controller/product.js";
import express from "express";

const routers = express.Router()

routers.get("product", getAll);
routers.get("product/:id", get);
routers.post("product/:id", update);
routers.put("product/:id", deletet);
export default routers;
