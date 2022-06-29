import React from 'react'
import "./CheckoutForm.css"

import { BsFillArrowRightCircleFill, BsFillCartPlusFill, BsFillArrowLeftCircleFill, BsFillInfoCircleFill } from "react-icons/bs"
import { MdPayment } from "react-icons/md"


export default function CheckoutForm(props) {

  const today= new Date().toLocaleString('en-US', { timeZone: 'UTC' });

  const calculateTotal = () => {
    let tempSum = 0
    props.shoppingCart.map((item) => {
      let price = props.products[item.itemId - 1].price
      let quantity = item.quantity
      tempSum += (price * quantity)
    })
    return tempSum
  }

  if (props.isCheckedOut) {
    return (
      <div className='checkout-response'>
        <b>CUSTOMER RECEIPT</b>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {!props.shoppingCart ? console.log("No items purchased") :
              props.shoppingCart.map((item, index) => {
                let product = props.products[item.itemId - 1]
                console.log(999, product)
                return (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{item.quantity}</td>
                    <td>{product.price}</td>
                    <td>{item.quantity * product.price}</td>
                  </tr>)
              })
            }
          </tbody>
        </table>
        <b>Total: {calculateTotal()}</b>
        <b>Created at: {today}</b>
      </div>
    )
  } else {
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
}
