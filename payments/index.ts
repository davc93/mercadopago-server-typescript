import mercadopago from "mercadopago";
import { config } from "../config";
import { Preference } from "../models/preference.model";

const configure = () => {
  mercadopago.configurations.setAccessToken(config.ACCESS_TOKEN);
  mercadopago.configure({
    access_token: config.ACCESS_TOKEN,
    integrator_id: config.INTEGRATOR_ID,
  });
};

const createPreference = async (clientPreference: Preference) => {
  const preference:Preference = {
    ...clientPreference,
    back_urls: {
      success: `${config.SITE_DOMAIN}/payments/success`,
      failure: `${config.SITE_DOMAIN}/payments/failure`,
      pending: `${config.SITE_DOMAIN}/payments/pending`,
    },
    auto_return: "approved",
    notification_url: `${config.SERVER_DOMAIN}/notification_url`,
    external_reference: "",
  };

  const response = await mercadopago.preferences.create(preference);
  const data = {
    id: response.body.id,
  };
  return data;
};

export default {
  configure,
  createPreference,
};
