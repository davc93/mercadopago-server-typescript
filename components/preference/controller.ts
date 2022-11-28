
import payments from '../../payments'


const collection = 'preference'
const controller  = (injectedStore:any) => {
    const store = injectedStore
    const upsert = async (data:any) => {
        const preference =  await payments.createPreference(data)
        store.upsert(preference,collection,{id:'string'})
        return preference
    }

    return {
        upsert
    }
}



export default controller