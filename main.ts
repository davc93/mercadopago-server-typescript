import express from 'express'
import cors from 'cors'
import { config } from './config';
import { sendEmail } from './mail';
import preferences from './components/preference/network';
import notifications from './components/notifications/network'
import payments from './payments';


var app = express();


app.set("trust proxy", true);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
payments.configure()

app.use('/create_preference',preferences)
app.use('/notification_url', notifications)
app.listen(config.PORT,()=>{
  console.log('Servidor escuchando peticiones')
});
