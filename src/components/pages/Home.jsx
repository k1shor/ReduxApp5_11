import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

const Home = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [filterResult, setFilterResult] = useState([])

  useEffect(()=>{
    filterItem()
    fetch(`https://fakestoreapi.com/products`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(response=>response.json())
    .then(data=>localStorage.setItem("items",JSON.stringify(data)))
  },[])

  let items = JSON.parse(localStorage.getItem('items'))
  
  const addToCart = item => e => {
    e.preventDefault()
    let cart_item = {
      cart_id: Date.now() + "_" + Math.floor(Math.random()*1E5),
      ...item
    }
    dispatch({type:"ADD_TO_CART", payload: cart_item})
    Swal.fire({
      title: "Congrats!",
      text: `${item.title} has been added to cart.`,
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
      position: 'top-end'
    })
    // console.log(cart_item)
  }

  const filterItem = () => {
    let items = localStorage.getItem('items')?JSON.parse(localStorage.getItem("items")):[]
    setFilterResult(items.filter(item=>item.title.toUpperCase().match(search.toUpperCase()))

    )
  }
  
  return (
    <>


    <div className="container-fluid">

<div className="py-3">
      <input type="search" className='w-50 form-control bg-secondary-subtle m-auto' onChange={(e)=>{
        setSearch(e.target.value)
      }}
      onKeyUp={filterItem} 
      />
</div>
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
{
  filterResult && filterResult.map(item=>{
    return <div class="col">
    <div class="card">
      <img src={item.image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <h5 class="card-title">Price: ${item.price}</h5>
        <h5 class="card-title">Rating: {item.rating.rate}</h5>
        <h5 class="card-title">Count in Stock: {item.rating.count}</h5>

        <p class="card-text">{item.description}</p>
        <button className='btn btn-warning' onClick={addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  </div>
  })
}

    </div>
    </div>
    </>
  )
}

export default Home