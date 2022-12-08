
import payments from '../../payments'


const collection = 'preferences'
const controller  = (injectedStore:any) => {
    const store = injectedStore
    const upsert = async (data:any) => {
        console.log(data)
        const {preference,shipments} = data
        
        const preferenceId =  await payments.createPreference(preference)
        if(store){
            store.upsert({
                preferenceId,
                preference
            
            },collection)
        }
        console.log(preferenceId)
        return preferenceId
    }

    return {
        upsert
    }
}



export default controller