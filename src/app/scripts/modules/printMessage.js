import { findMessages } from "../services/newMessages";
import { inputpalabra } from "./dataDom";



export const printmessageFinder = async () =>{  
    const mesaggeFinder = await findMessages(inputpalabra.value)
    console.log(mesaggeFinder);

  }

 