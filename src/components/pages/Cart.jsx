import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Cart = () => {
  const cart_items = useSelector(state => state.cartStore.cart_items)

  const dispatch = useDispatch()

  const removeFromCart = id => e => {
    e.preventDefault()
    dispatch({ type: "REMOVE_FROM_CART", payload: id })
    Swal.fire({
      title: "Item Removed",
      text: "Item has been removed from cart",
      icon: "info",
      timer: 2000,
      showConfirmButton: false,
      position: "top-right"
    })
  }

  return (
    <>
      <h3 className='text-center mt-3 mb-2 text-decoration-underline'>Cart Items</h3>
      <div className="container">
        {cart_items.length > 0 ?
          <>
            <table className='table table-hover table-bordered text-center align-middle'>
              <thead>
                <tr>
                  <td>S.No.</td>
                  <td>Product Image</td>
                  <td>Product Name</td>
                  <td>Price</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {
                  cart_items && cart_items.map((item, i) => {
                    return <tr key={i}>
                      <td>{i + 1}</td>
                      <td>
                        <img src={item.image} alt="" style={{ height: '100px' }} />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td><button className='btn btn-danger' onClick={removeFromCart(item.cart_id)}>REMOVE</button></td>
                    </tr>
                  })
                }
              </tbody>
            </table>
            <Link className='btn btn-warning' to={'/shipping'}>Checkout</Link>
          </> :
          <div className='alert alert-danger w-50 m-auto text-center'>NO ITEMS IN CART</div>
        }

      </div>

    </>
  )
}

export default Cart