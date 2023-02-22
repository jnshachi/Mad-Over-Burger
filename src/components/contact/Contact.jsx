import React from 'react'
import {motion} from 'framer-motion';
import burger from "../../assets/MaharajaBurger.png"

const Contact = () => {
  return (
    <section className='contact'>
        <motion.form>
            <h2>Contact Us</h2>
            <input type="text" placeholder='Name'></input>
            <input type="email" placeholder='Email'></input>

            <textarea placeholder='Message' cols = '30' rows ='10'></textarea>
            <button type='Submit'>Send</button>
        </motion.form>

        <motion.div className='contactFormBorder'>
          <motion.div>
            <img src={burger} alt='burger'></img>
          </motion.div>
        </motion.div>
    </section>
  )
}

export default Contact