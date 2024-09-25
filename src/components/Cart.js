import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import SecurityHeaders from '../data/SecurityHeaders'
import userId from '../data/UserId'

const Cart = ({setCount}) => {
  const [cartItems,setItems] = useState()
  const getItems = async () =>
  {
    const formData = new FormData()
    formData.append('user_id',userId)
    const response = await axios.post('https://amazon.indianhackerslab.com/get-carts.php',formData,SecurityHeaders)
    if(response){
        
        if(response.data)
        {
            setItems(response.data.data)
            setCount(response.data.data.length)
        }
    }
  }
  useEffect(()=>{
    getItems()
  },[])
  return (
  <>
  <div className='container'>
  <h4>Cart Items</h4>
  </div>
  <div className='d-flex flex-wrap container'>
    
    {cartItems?(
       cartItems.map((product) => {
      return <CartItem item={product} refresh={getItems}/>
    
})
    ):<h3>Add Items to cart</h3>}
    
  </div>
  <div className='container'>
  <button className='btn btn-success m-5 '>Place order</button>
  </div>
  
  </>
  )
}

export default Cart