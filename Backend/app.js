import express from "express";
import clientRoute from "./src/routes/client.js"
import reservationRoute from "./src/routes/reservation.js"
import swaggerUI from "swagger-ui-express"
import fs from "fs";
import path from "path";

const app = express();

app.use(express.json());

const swaggerDocument = JSON.parse(fs.readFileSync(
    path.resolve("./Documentacion.json"),"utf-8"
))
   
//=================
//  Documentación
//=================
app.use("/api/docs" , swaggerUI.serve , swaggerUI.setup(swaggerDocument));


/****************************** R U T A S *********************************/

app.use("/api/client" , clientRoute)
app.use("/api/reservation" , reservationRoute)

export default app;