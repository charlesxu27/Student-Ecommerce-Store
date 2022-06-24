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
      <div className='cart-table'>
        <table>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Cost</th>
          </tr>
          <tr>
            <td>Cheetos</td>
            <td>3</td>
            <td>1.50</td>
            <td>4.50</td>
          </tr>
          <tr>
            <td>Coconut Water</td>
            <td>1</td>
            <td>1.0</td>
            <td>1.0</td>
          </tr>
        </table>
      </div>
      <div className='cart-invoice'>
        <tr>
          <td>Subtotal </td>
          <td>4.18</td>
        </tr>
        <tr>
          <td>Taxes and Fees </td>
          <td>0.50</td>
        </tr>
        <hr></hr>
        <tr>
          <td>Total </td>
          <td>4.68</td>
        </tr>
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
