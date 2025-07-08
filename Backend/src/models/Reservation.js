/**
 * Campos:
 *   clientID
 *   vehicle
 *   service
 *   status
 */

import { Schema , model } from "mongoose";

const reservationSchema = new Schema({
    clientID: {
      type: Schema.Types.ObjectId,
      ref: "Client",
      require: true
    },
    vehicle: {
      type: String,
      require: true,
      maxLength: 100
    },
    service: {
      type: String,
      require: true,
      maxLength: 100
    },
    status: {
        type: String,
        require: true
    }
},{
    timestamps: true,
    strict: false
});

export default model("Reservation", reservationSchema);