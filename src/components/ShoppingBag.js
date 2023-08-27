import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ShoppingBag = ({shoppingBag, totalPrice, addTotalPrice, removeItemFromBag }) =>{
  console.log(shoppingBag)

  useEffect(() => {
    addTotalPrice();
  }, [])

  const items = shoppingBag?.map(item => {
    return (
    <article key={item.id} id={item.id} className='item'>
      <img src={item.image} className='item__img' />
      <span className='item__info'>
        <h4 className='item__title'>{item.type}</h4>
        <div className='item__details'>
          <div className='item__detail item__specs'>
            <p className='item__spec'>Size: {item.size}</p>
            <p className='item__spec'>Color: {item.color}</p>
            <p className='item__spec'>Unit Price: ${item.price}</p>
          </div>
          <div className='item__detail item__counter'>
            <span className="material-icons-round counter__icon">remove</span>
            {item.quantity}
            <span className="material-icons-round counter__icon">add</span>
          </div>
          <p className='item__detail item__price'>${item.price * item.quantity}</p>
        </div>
      </span>
      <span className="material-icons-round item__delete" onClick={(e) => removeItemFromBag(e)}>close</span>
    </article>)
  })

  return (
    <div className='bag'>
      <h1>EverUse</h1>
      <h2>Shopping Bag</h2>
      <section className='bag__items'>
        {items}
      </section>
      <section className='bag__summary'>
        <h3>Request Summary</h3>
        <div className='bag__subtotal'>
          <p>Order Subtotal:</p>
          <p>${totalPrice}</p>
        </div>
        <NavLink to='/checkout' className='bag__button'>Continue to Request</NavLink>
      </section>
    </div>
  )
}

export default ShoppingBag;