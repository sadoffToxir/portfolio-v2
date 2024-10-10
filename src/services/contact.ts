import { emailJsPublicKey,emailJsServiceId, emailJsTemplateId } from '@constants/const'
import emailjs from '@emailjs/browser';

const sendEmail = async (data: Record<string, string>) => {
  try {
    emailjs.send(emailJsServiceId, emailJsTemplateId, data, emailJsPublicKey);
  } catch (error) {
    console.error(error);
    return error;
  }
}

export default { sendEmail }