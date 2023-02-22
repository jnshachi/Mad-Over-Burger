import React from "react";
import Cheeseburger from "../../assets/cheeseBurger.png";
import Cheeseburger_fries from "../../assets/Burger+Fries.png";
import Cheeseburger_combo from "../../assets/Burger+Fries+coke.png";
import { Link } from "react-router-dom";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value}></input>
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const increment = (item) => {};
  const decrement = (item) => {};
  return (
    <section className="cart">
      <main>
        <CartItem 
            title={"Cheese Burger"} 
            img={Cheeseburger} 
            value={0}
            increment={()=>increment(1)}
            decrement = {()=>decrement(1)} 
        />
        <CartItem 
            title={"Cheese Burger with fries"} 
            img={Cheeseburger_fries} 
            value={0}
            increment={()=>increment(2)}
            decrement = {()=>decrement(2)} 
        />
        <CartItem 
            title={"Cheese Burger combo"} 
            img={Cheeseburger_combo} 
            value={0}
            increment={()=>increment(3)}
            decrement = {()=>decrement(3)} 
        />

        <article>
          <div>
            <h4> Sub Total</h4>
            <p>Rs.{2000}</p>
          </div>
          <div>
            <h4> Tax</h4>
            <p>Rs.{2000*0.18}</p>
          </div>
          <div>
            <h4> Shipping Charge</h4>
            <p>Rs.{20}</p>
          </div>
          <div>
            <h4> Total</h4>
            <p>Rs.{2000 + 2000*0.18 + 20}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
