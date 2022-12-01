import { sendEmail } from "../../mail";

const collection = 'notifications'
const controller  = (injectedStore:any) => {
    const store = injectedStore

    const upsert = async (req:any) => {

    const data = {
        body: req.body,
        headers: req.headers,
      };
      if (data.body) {
        sendEmail(data,'Notifacion MercadoPago');

        store.upsert(data,collection)
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