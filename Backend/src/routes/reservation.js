import express from "express";
import reservationController from "../controllers/reservationController.js";

const router = express.Router();

router.route("/")
.get(reservationController.getAllReservation)
.post(reservationController.insertReservation)

router.route("/:id")
.get(reservationController.getReservationById)
.put(reservationController.updateReservation)
.delete(reservationController.deleteReservation)

export default router;