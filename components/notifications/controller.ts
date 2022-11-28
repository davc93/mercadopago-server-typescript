import { sendEmail } from "../../mail";

const collection = 'notification'
const controller  = (injectedStore:any) => {
    const store = injectedStore

    const upsert = async (req:any) => {

    const data = {
        body: req.body,
        query: req.query,
        headers: req.header,
      };
      if (data.body) {
        sendEmail(data,'Notifacion MercadoPago App-davc93');

        store.upsert(data,collection,{id:'string'})
        return {
            message:'Todo bien'
        }
      } else {

        return {
            message:'No viene nada'
        }
      }

    }

    return {
        upsert
    }
}



export default controller