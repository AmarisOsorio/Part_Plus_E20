/**
 * Campos:
 *   name
 *   email
 *   password
 *   phone
 *   age
 */

import { Schema , model } from "mongoose";

const clientSchema = new Schema({
    name: {
    type: String,
      require: true,
      maxLength: 50
    },
    email: {
      type: String,
      require: true,
      maxLength: 100
    },
    password: {
        type: String,
        maxLength: 8
    },
    phone: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true
    }
},{
    timestamps: true,
    strict: false
});

export default model("Client", clientSchema);