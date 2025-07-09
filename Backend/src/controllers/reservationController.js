import reservationModel from "../models/Reservation.js"
const reservationController = {};


/********************** S E L E C T **************************/


reservationController.getAllReservation = async ( req , res ) => {

    try {
        const reservation = await reservationModel.find().populate("clientID")
        res.status(200).json(reservation)
    } catch (error) {
        console.log("Error" + error)
        res.status(400).json({message: "Internal Error"})
    }

}


/**************** S E L E C T   B Y   I D *********************/


reservationController.getReservationById = async ( req , res ) => {
    
    const reservation = await reservationModel.findById(req.params.id).populate("idClient")
    res.json(reservation)

}


/********************** I N S E R T **************************/


reservationController.insertReservation = async ( req , res ) => {

    try {

        const { clientID , vehicle , service , status } = req.body;

        //Validación de campos vacíos
        if(!clientID || !vehicle || !service || !status) {
            return res.status(400).json({message: "Ingrese los datos"})
        }

        const newReservation = new reservationModel({ clientID , vehicle , service , status })
        await newReservation.save()
        res.json({messaje: "Nuevo reservación guardada!"})

    } catch (error) {
        console.log( "Error" + error )
        res.status(400).json({message: "Internal Error"})
    }

}


/********************** D E L E T E **************************/


reservationController.deleteReservation = async ( req , res ) => {

    try {
        
        await reservationModel.findByIdAndDelete(req.params.id)
        res.json({message: "La reservación se ha eliminado!"})

    } catch (error) {

        console.log("Error" + error )
        res.status(400).json({message: "Internal Error"})

    }

}


/********************** U P D A T E **************************/


reservationController.updateReservation = async ( req , res ) => {
    try {
        
        const { clientID , vehicle , service , status } = req.body;
        const updateClient = await reservationModel.findByIdAndUpdate(req.params.id , { clientID , vehicle , service , status })
        res.json({message: "La reserva se ha actualizado!"});

        //Validación de campos vacíos
        if(!clientID || !vehicle || !service || !status) {
            return res.status(400).json({message: "Ingrese los datos"})
        }

    } catch (error) {
        
        console.log("Error" + error)
        res.status(400).json({message: "Internal Error"})

    }
};

export default reservationController;