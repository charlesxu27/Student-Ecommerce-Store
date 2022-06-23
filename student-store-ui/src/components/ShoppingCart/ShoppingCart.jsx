import React from 'react'
import './ShoppingCart.css'
import { BsFillArrowRightCircleFill, BsFillCartPlusFill, BsFillArrowLeftCircleFill, BsFillInfoCircleFill } from "react-icons/bs"
import { MdPayment } from "react-icons/md"

export default function ShoppingCart() {
  return (
    <div className='shoppingcart'>
      <span>
        <b>Shopping Cart</b>
        < BsFillCartPlusFill />
      </span>
      <div className='cart-invoice'>
        TO BE FILLED OUT
      </div>
      <span>
        <b>Payment Info</b>
        < MdPayment />
      </span>
      <div className='payment'>
        <form className='payment-form'>
          <label>Name</label>
          <input type="text" placeholder="Enter your name..."></input>
          <label>Email</label>
          <input type="text" placeholder="student@codepath.org"></input>
          <i>I agree to the terms and services</i>
          <button type="submit">Check Out</button>
        </form>
      </div>
      <span>
        <b>Checkout Info</b>
        < BsFillInfoCircleFill />
      </span>
      <i>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.
      </i>

    </div>
  )
}
