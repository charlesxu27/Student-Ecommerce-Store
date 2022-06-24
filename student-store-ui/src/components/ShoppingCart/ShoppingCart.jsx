import React from 'react'
import { useEffect } from 'react'
import './ShoppingCart.css'
import { BsFillArrowRightCircleFill, BsFillCartPlusFill, BsFillArrowLeftCircleFill, BsFillInfoCircleFill } from "react-icons/bs"
import { MdPayment } from "react-icons/md"

export default function ShoppingCart(props) {

  useEffect(() => {
    let tempSum = 0
    props.shoppingCart.map((item) => {
      let price = props.products[item.itemId - 1].price
      let quantity = item.quantity
      tempSum += (price * quantity)
    })
    console.log(`This is the subtotal: ${tempSum}`)
    document.getElementById("subtotal").replaceWith(tempSum.toFixed(2))
    document.getElementById("taxes").replaceWith((tempSum * 0.0875).toFixed(2))
    document.getElementById("total").replaceWith((tempSum + (tempSum * 0.0875)).toFixed(2))
  }, [props.shoppingCart])

  return (
    <div className='shoppingcart'>
      <span>
        <b>Shopping Cart</b>
        < BsFillCartPlusFill />
      </span>
      <div className='cart-table'>
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
            {!props.shoppingCart ? console.log("Empty Shopping Cart") :
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
      </div>
      <div className='cart-invoice'>
        <table>
          <tbody>
            <tr>
              <td>Subtotal </td>
              <td id="subtotal">0</td>
            </tr>
            <tr>
              <td>Taxes and Fees </td>
              <td id="taxes">0</td>
            </tr>
            <tr>
              <td>Total </td>
              <td id="total">0</td>
            </tr>
          </tbody>
        </table>
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
