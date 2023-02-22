import React from 'react'
import { AiFillInstagram, AiFillFacebook, AiFillYoutube, AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>Mad Over Burger</h2>
            <p> We are trying to give you the best taste You can ever experience!</p>
            <br/>
            <em>We give attention to genuine feedback</em>
            <strong>All right recieved @madoverburger</strong>
        </div>
        <aside>
            <h4>Follow Us</h4>
            <a href='#'><AiFillFacebook/></a>
            <a href='#'><AiFillYoutube/></a>
            <a href='#'><AiFillInstagram/></a>
            <a href='#'><AiFillTwitterSquare/></a>
        </aside>
    </footer>
  )
}

export default Footer