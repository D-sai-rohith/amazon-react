import { useScrollTrigger } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const [totalproducts,setProducts] = useState()
    const productaDetails = async () => 
        {
            const response =await axios.post('https://manojkoravangi.com/amazonapi/get-products.php')
            if(response)
            {
                
                if(response.data)
                {
                    if(response.data.data)
                    {
                    setProducts(response.data.data)
                    
                    }

                }
            } 
        }
        useEffect(()=>{
            productaDetails()
        },[]) 
  return (
     
    <>
    <div className='d-flex flex-wrap'>
    
    {totalproducts?totalproducts.map((product)=>(
        
           <div className='p-2 col-3'>
            <div className='col-12 shadow p-3 rounded'>
           <img src={product.images} className='h-50 w-100'></img>
           <h6>{product.name}</h6>
           <div className='d-flex flex-row'>
           <p><b>Price:</b>{product.price}</p><p className='text-decoration-line-through ms-2'>{product.cutoff_price}</p>
           </div>
           <Link to={'/product-details/'+product.product_id}>View details</Link>
           </div>
           </div>
        
    )):<p>No products</p>}
    
    </div>
    </>
  )
}

export default Products