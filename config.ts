import dotenv from 'dotenv'
dotenv.config()
export const config = {
    ACCESS_TOKEN:process.env.ACCESS_TOKEN ?? '',
    PORT:process.env.PORT ?? 5000,
    SERVER_DOMAIN: process.env.SERVER_DOMAIN ?? 'localhost',
    INTEGRATOR_ID: process.env.INTEGRATOR_ID,
    SITE_DOMAIN: process.env.SITE_DOMAIN ?? "localhost" ,
    GMAIL:{
        EMAIL: process.env.EMAIL,
        APIKEY:process.env.APIKEY
    },
    DB:{
        MONGO:{
        NAME:process.env.DB_NAME,
		USERNAME:process.env.MONGO_USERNAME,
		PASSWORD:process.env.MONGO_PASSWORD, 
        }
    }

}
