import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Shipping = () => {
    const navigate = useNavigate()
    const addressReducer = (state, event) => {
        return {...state, [event.target.name]:event.target.value}
    }
    const [shipping_address, setShippingAddress] = useReducer(addressReducer, 
        localStorage.getItem('shipping_address')?
        JSON.parse(localStorage.getItem('shipping_address'))
        :{}
        )

    const {name, address, alt_address, city, phone} = shipping_address

    const handleSubmit = e =>{
        e.preventDefault()
        localStorage.setItem('shipping_address',JSON.stringify(shipping_address))
        Swal.fire('Confirm!','You are about to place an order.','info')
        .then(result=>{
            if(result.isConfirmed){
                Swal.fire('Success!','Your order has been placed','success')
                .then(()=>navigate('/'))
                localStorage.removeItem('cart_items')
            }
        })
    }

    return (
        <>
            <form className='w-50 p-5 my-5 shadow-lg rounded-3 m-auto'>
                <h4 className='text-center text-decoration-underline'>
                    Shipping Information
                </h4>
                <label htmlFor="name">Name</label>
                <input type="text" className='form-control mb-2' id='name' name='name' onChange={setShippingAddress} value={name}/>
                <label htmlFor="address">Address</label>
                <input type="text" className='form-control mb-2' id='address' name='address' onChange={setShippingAddress} value={address}/>
                <label htmlFor="alt_address">Alternate Address</label>
                <input type="text" className='form-control mb-2' id='alt_address' name='alt_address' onChange={setShippingAddress} value={alt_address}/>
                <label htmlFor="city">City</label>
                <input type="text" className='form-control mb-2' id='city' name='city' onChange={setShippingAddress} value={city}/>
                <label htmlFor="phone">Phone</label>
                <input type="text" className='form-control mb-2' id='phone' name='phone' onChange={setShippingAddress} value={phone} />
                <button className='btn btn-success w-100' onClick={handleSubmit}>Confirm</button>
            </form>
        </>
    )
}

export default Shipping