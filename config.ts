import dotenv from 'dotenv'
dotenv.config()
export const config = {
    ACCESS_TOKEN:process.env.ACCESS_TOKEN ?? '',
    PORT:process.env.PORT ?? 3000,
    SERVER_DOMAIN: process.env.SERVER_DOMAIN ?? 'localhost',
    INTEGRATOR_ID: procees.env.INTEGRATOR_ID,
    SITE_DOMAIN: process.env.SITE_DOMAIN ?? "localhost" ,
    GMAIL_APIKEY:process.env.GMAIL_APIKEY,
    DB:{
        MONGO:{
		USERNAME:process.env.MONGO_USERNAME,
		PASSWORD:process.env.MONGO_PASSWORD
        }
    }

}
