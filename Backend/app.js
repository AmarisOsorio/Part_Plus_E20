import express from "express";
import clientRoute from "./src/routes/client.js"
import reservationRoute from "./src/routes/reservation.js"

const app = express();

app.use(express.json());


/****************************** R U T A S *********************************/

app.use("/api/client" , clientRoute)
app.use("/api/reservation" , reservationRoute)



export default app;