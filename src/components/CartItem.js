import axios from 'axios'
import React, { useEffect, useState } from 'react'
import userId from '../data/UserId'
import SecurityHeaders from '../data/SecurityHeaders'

const CartItem = ({item,refresh}) => {
    
    const deleteItem = async ()=>{
        const data = new FormData()
        data.append("cart_id",item.cart_id)
        const res = await axios.post("https://amazon.indianhackerslab.com/delete-cart.php",data,SecurityHeaders)
        if(res)
        {
            console.log(res)
            refresh()
        }
    }
   
    
  return (
   
    <> <div className='col-3 p-2'> <div className='p-3 shadow rounded'>
        <img className='w-75 h-50' src={item.images}></img>
            <p>{item.name.slice(0,100)}...<a className='text-decoration-none'>more</a></p>
            <button className='btn btn-danger' onClick={()=>deleteItem()}>Delete</button>
        </div></div>
   
    </>
  )
}

export default CartItem