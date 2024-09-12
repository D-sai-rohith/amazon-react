import { Rating, useScrollTrigger } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetails = () => {
    const params = useParams()
    const productid = params.id
    const [productData,setData]=useState()
    console.log(productid)
    const addItems = async () =>
    {
            const formData = new FormData()
            formData.append('user_id',1234)
            formData.append('quantity',1)
            formData.append('product_id',productData.product_id)
            const response = await axios.post('https://manojkoravangi.com/amazonapi/insert-cart.php',formData)
            if(response)
            {
                console.log(response)
            }
    }
    const details = async () =>
    {
        const formData = new FormData()
        formData.append('product_id',productid)
        console.log(productid)
        const response =await axios.post('https://manojkoravangi.com/amazonapi/get-product-details.php',formData)
        if(response)
        {
            if(response.data){
               
                setData(response.data.data)
            }
        }
    }
    useEffect(() => {
        details()
    },[])
  return (
    <div>
       {productData?
        (<div className='d-flex flex-row'>
            <div className='w-50'>
            <img src={productData.images} className='w-100'></img>
        </div>
        <div className='w-50 pt-5 p-3'>
            <h5>{productData.name}</h5>
            <div className='d-flex flex-row justify-content-between'>
            <div>
            <Rating value={productData.rating}>{productData.ratings} ratings</Rating>
            {/* <p>{productData.ratings} ratings</p> */}
            </div>
            <p>Available Stock:{productData.stock_quantity}</p>
            <button className='btn btn-info' onClick={()=>{addItems()}}>Add to Cart</button>
            </div>
            </div>
        </div>
       )
        
        :<p>Details</p>}
    </div>
  )
}

export default ProductDetails