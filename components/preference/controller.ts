
import { Order } from '../../models/order.model'
import { Preference } from '../../models/preference.model'
import { PreferenceId } from '../../models/preferenceId.models'
import payments from '../../payments'


const collection = 'preferences'
const controller  = (injectedStore:any) => {
    const store = injectedStore
    const upsert = async (data:Order) => {
        console.log(data)
        const {preference,shipment} = data
        
        const preferenceId =  await payments.createPreference(preference) as PreferenceId
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