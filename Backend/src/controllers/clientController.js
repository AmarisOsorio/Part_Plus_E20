import clientModel from "../models/Client.js"
const clientController = {}; 


/********************** S E L E C T **************************/


clientController.getAllClients = async ( req , res ) => {
    try {
        const clients = await clientModel.find()
        res.status(200).json(clients)
    } catch (error) {
        console.log("Error" + error)
        res.status(400).json({message: "Internal Error"})
    }
}


/**************** S E L E C T   B Y   I D *********************/


clientController.getClientById = async ( req , res ) => {
    const clients = await clientModel.findById(req.params.id)
    res.json(clients)
}


/********************** I N S E R T **************************/


clientController.insertClient = async (req , res) => {

    try {
        const { name , email , password , phone , age } = req.body;

        //Validación de campos vacíos
        if(!name || !email || !password || !phone || !age) {
            return res.status(400).json({message: "Ingrese los datos"})
        }

        //validación de longitud
        if(phone.length > 9){
            res.status(400).json({message: "Favor llenar el campo de esta manera: 1234-4567"})
        }

        const newClient = new clientModel({ name , email , password , phone , age })
        await newClient.save()
        res.json({messaje: "Nuevo cliente guardado!"})


    } catch (error) {
        console.log( "Error" + error )
        res.status(400).json({message: "Internal Error"})
    }
    
};


/********************** D E L E T E **************************/


clientController.deleteClient = async (req , res) => {
    try {

        await clientModel.findByIdAndDelete(req.params.id)
        res.json({message: "El registro de cliente se ha eliminado!"})

    } catch (error) {

        console.log("Error" + error)
        res.status(400).json({message: "Internal Error"})

    }
};


/********************** U P D A T E **************************/


clientController.updateClient = async ( req , res ) => {
    try {
        
        const { name , email , password , phone , age } = req.body;
        const updateClient = await clientModel.findByIdAndUpdate(req.params.id , { name , email , password , phone , age })
        res.json({message: "El registro de cliente se ha actualizado!"});

        //Validación de campos vacíos
        if(!name || !email || !password || !phone || !age) {
            return res.status(400).json({message: "Ingrese los datos"})
        }

        //validación de longitud
        if(phone.length > 9){
            res.status(400).json({message: "Favor llenar el campo de esta manera: 1234-4567"})
        }

    } catch (error) {
        
        console.log("Error" + error)
        res.status(400).json({message: "Internal Error"})

    }
};

export default clientController;