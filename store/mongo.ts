import mongoose from "mongoose";
import { config } from "../config";
const Schema = (controllerSchema: any) => {
    return new mongoose.Schema(controllerSchema)
}

const model = (collection: string, schema: any) => {

    return mongoose.model(collection, Schema(schema))

}

async function main() {

    try {
        const response = await mongoose.connect(`${config.DB.MONGO.CONNECTION}`)
    } catch (error: any) {
        throw new Error(error)
    }

}


main().catch(err => console.log(err));



async function insert(data: any, collection: string, schema: any) {
    const modelClass = model(collection, schema)
    debugger
    const modelInstance = new modelClass(data)
    const response = await modelInstance.save()
}

function upsert(data: any, collection: string, schema: any) {

    return insert(data, collection, schema)

}



export default {
    upsert
}
