import React from "react";
import { delay , motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
import bg from "../../assets/MaharajaBurger.png"

const Home = () => {
  const options = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  return (
    <>
      <section className="home">
        <div className="right-half">
          <img src={bg} alt="main" className="img_center" />
        </div>
        <div>
          <motion.h1 {...options}>Mad Over Burger</motion.h1>
          <motion.p {...options} transition={{ delay: 0.2 }}>
            "Experience the ultimate burgerlicious bliss!"
          </motion.p>
        </div>
        <motion.a
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          href="#menu"
        >
          Explore Menu
        </motion.a>
        <div >

        </div>
      </section>
      <Founder />
      <Menu/>
    </>
  );
};

export default Home;
