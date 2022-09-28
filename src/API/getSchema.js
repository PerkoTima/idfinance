import axios from "axios";

export async function getSchema(){
    const response = await axios.get("../schema/schema.json")


    fetch('../schema/schema.json')
    .then(res => res.json())
    .then(data => console.log(data))

    return response
}

