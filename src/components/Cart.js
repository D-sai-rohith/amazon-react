import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cart = () => {
  const [cartItems,setItems] = useState()
  const getItems = async () =>
  {
    const formData = new FormData()
    formData.append('user_id',1234)
    const response = await axios.post('https://manojkoravangi.com/amazonapi/get-carts.php',formData)
    if(response){
        
        if(response.data)
        {
            setItems(response.data.data)
            console.log(response.data.data)
        }
    }
  }
  useEffect(()=>{
    getItems()
  },[])
  return (
  <>
  <h4>Cart Items</h4>
  <div className='d-flex flex-wrap'>
    
    {cartItems?(
       cartItems.map((product) => (
      <div className='col-3 p-2'> <div className='p-3 shadow rounded'>
        <img className='w-75 h-50' src={product.images}></img>
            <p>{product.name.slice(0,100)}...<a className='text-decoration-none'>more</a></p>
        </div></div>
       ))
    ):<h3>Add Items to cart</h3>}
  </div>
  <button className='btn btn-success m-5 '>Place order</button>
  </>
  )
}

export default Cart