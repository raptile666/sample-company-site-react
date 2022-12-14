import React from 'react';
import {PhoneAndroid, MailOutline} from '@mui/icons-material';
import '../styles/Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {

  return (
    <motion.div className='contactMain'
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    >
      <div className='textdiv'>
        <h1>Contact</h1>
        <h4><PhoneAndroid /> <p>Mobil</p> </h4>
        <a href="tel:+36123456789">+36 12 345 6789</a>
        <h4><MailOutline /> <p>E-Mail</p> </h4>
        <a href="mailto:john@sample.sam">john@sample.sam</a>
      </div>

      <div className='formdiv'>
        <form>
          <input type="text" name="user_name" placeholder='Name' required/>
          <input type="email" name="user_email" placeholder='E-Mail' required/>
          <textarea name="message" placeholder='Message' rows={4} />
          <input type="submit" value="Send" required/>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact