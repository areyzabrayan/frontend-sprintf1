import { findMessages } from "../services/newMessages"
import { filter, inputpalabra } from "./dataDom"

const printMessageFinder = async() => {
    
    const dataFinder = await findMessages(inputpalabra.value);
    console.log(dataFinder);
}
