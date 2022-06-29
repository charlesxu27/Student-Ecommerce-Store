import * as React from "react"
import "./Sidebar.css"
import { BsFillArrowRightCircleFill, BsFillCartPlusFill, BsFillArrowLeftCircleFill, BsFillInfoCircleFill } from "react-icons/bs"
import { MdPayment } from "react-icons/md"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Sidebar(props) {
  const handleOnClick = (event) => {
    console.log("Clicked Sidebar button!")
    console.log(props.isOpen)
    if (!props.isOpen) {
      document.getElementById("sidebar").classList.remove("closed")
      document.getElementById("sidebar").classList.add("open")
      props.setIsOpen(true)

    } else {
      document.getElementById("sidebar").classList.add("closed")
      document.getElementById("sidebar").classList.remove("open")
      props.setIsOpen(false)
    }
  }


  return (
    <section className="sidebar closed" id="sidebar">
      <div className="wrapper" id="wrapper">
        <button className="toggle-button button closed" onClick={handleOnClick}><p className="material-icons">
          {!(props.isOpen) ? <BsFillArrowRightCircleFill /> : <BsFillArrowLeftCircleFill />}
        </p></button>
        <div className="shopping-cart">
          {props.isOpen ? <ShoppingCart shoppingCart={props.shoppingCart} subTotal={props.subTotal} products={props.products} handleOnCheckoutFormChange={props.handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm} isCheckedOut={props.isCheckedOut} setIsCheckedOut={props.setIsCheckedOut} /> :
            <div className="cart-icons">
              <span className="cart-icon icon button">
                <i className="material-icons" onClick={handleOnClick}><BsFillCartPlusFill /></i>
              </span>
              <span className="cart-icon icon button">
                <i className="material-icons" onClick={handleOnClick}><MdPayment /></i>
              </span>
              <span className="cart-icon icon button">
                <i className="material-icons" onClick={handleOnClick}><BsFillInfoCircleFill /></i>
              </span>
            </div>}
        </div>
      </div>
    </section>
  )
}

