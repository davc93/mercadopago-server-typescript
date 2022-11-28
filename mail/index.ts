import nodemailer from 'nodemailer'
import { config } from '../config';

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail(data:unknown,subject:string) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: '', // generated ethereal user
      pass: config.GMAIL_APIKEY, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"web site 👻" <>', // sender address
    to: "", // list of receivers
    subject: subject, // Subject line
    text: `${JSON.stringify(data)}`, // plain text body
    html: `
    <h3>Notificacion desde tu servidor de pagos de mercadopago en davc93</h3>
    <span>${JSON.stringify(data)}</span>
    
    `, // html body
  });
  return info
}
