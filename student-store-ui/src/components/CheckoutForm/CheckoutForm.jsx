import React from 'react'
import "./CheckoutForm.css"

import { BsFillArrowRightCircleFill, BsFillCartPlusFill, BsFillArrowLeftCircleFill, BsFillInfoCircleFill } from "react-icons/bs"
import { MdPayment } from "react-icons/md"


export default function CheckoutForm(props) {
  return (
    <div className='checkout-form'>
      <span>
        <b>Payment Info</b>
        < MdPayment />
      </span>
      <div className='payment'>
        <form className='payment-form'>
          <label>Name</label>
          <input type="text" onChange={(event) => { props.handleOnCheckoutFormChange(event.target.name, event.target.value) }} placeholder="Enter your name..."></input>
          <label>Email</label>
          <input type="text" onChange={(event) => { props.handleOnCheckoutFormChange(event.target.name, event.target.value) }} placeholder="student@codepath.org"></input>
          <i>I agree to the terms and services</i>
          <button type="submit" onClick={props.handleOnSubmitCheckoutForm}>Check Out</button>
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
