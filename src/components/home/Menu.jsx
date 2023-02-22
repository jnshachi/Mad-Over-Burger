import React from "react";
import MenuCard from "./MenuCard";
import Cheeseburger from "../../assets/cheeseBurger.png";
import Cheeseburger_fries from "../../assets/Burger+Fries.png";
import Cheeseburger_combo from "../../assets/Burger+Fries+coke.png";


const Menu = () => {
  const addToCartHandler = (ItemNum) => {};
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          ItemNum={1}
          burgerSrc={Cheeseburger}
          price={69}
          title="Cheese Burger"
          handler={addToCartHandler}
          delay = {0}
        />
        <MenuCard
          ItemNum={2}
          burgerSrc={Cheeseburger_fries}
          price={159}
          title="Cheese Burger with fries"
          handler={addToCartHandler}
          delay ={0.2}
        />
        <MenuCard
          ItemNum={3}
          burgerSrc={Cheeseburger_combo}
          price={200}
          title="Cheese Burger Combo"
          handler={addToCartHandler}
          delay={0.4}
        />  
      </div>
    </section>
  );
};

export default Menu;
