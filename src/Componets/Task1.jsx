import React, { useState } from 'react'
import "../Style/Task1.css"


import Item from './Item'
import Cart from './Cart'
let im = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202110?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1664576115052"
let product = {
  name:"MacBook",
  id:101,
  des:"The best macbook in market at lowest price.",
  price:20000,
  image:im,
}

const Task1 = () => {

  let [cartCount, setCartCount] = useState([0,0])
  

  const addToCart = () =>{
    let cart = [...cartCount]
    cart[0] +=1
    cart[1] = product.price * cart[0]
    setCartCount(cart)
    
  }

  const resetCart= ()=>{
    let cartReset = [...cartCount]
    cartReset[0]=0
    cartReset[1]=0
    setCartCount(cartReset)
  }

  return (
    <>

      <Cart
            resetCart = {resetCart}
            cartCount = {cartCount}
            
      />

      <div>
        <Item
            id={product.id}
            name={product.name}
            img = {product.image}
            desc = {product.des}
            price = {product.price}
            addToCart={addToCart}
        />
      </div>
    
    </>
  )
}

export default Task1