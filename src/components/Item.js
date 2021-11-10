import React, { useState } from "react";


function Item({ name, category }) {

  const [cartStatus , setCartStatus] = useState(false)
  const classNameHandler = cartStatus ? "in-cart" : ""
  
  function changeClassName() {
    setCartStatus(!cartStatus)
  }
  return (
    <li className={classNameHandler}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {changeClassName}>Add to Cart</button>
    </li>
  );
}

export default Item;
