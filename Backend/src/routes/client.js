import express from "express";
import clientController from "../controllers/clientController.js";

const router = express.Router();

router.route("/")
.get(clientController.getAllClients)
.post(clientController.insertClient)

router.route("/:id")
.get(clientController.getClientById)
.put(clientController.updateClient)
.delete(clientController.deleteClient)

export default router;