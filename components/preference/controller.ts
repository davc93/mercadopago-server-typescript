
import payments from '../../payments'


const collection = 'preferences'
const controller  = (injectedStore:any) => {
    const store = injectedStore
    const upsert = async (data:any) => {
        const preference =  await payments.createPreference(data)
        store.upsert(preference,collection)
        return preference
    }

    return {
        upsert
    }
}



export default controller