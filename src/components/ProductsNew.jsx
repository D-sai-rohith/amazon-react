import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SecurityHeaders from '../data/SecurityHeaders'
import SingleProduct from './SingleProduct';
import { Offcanvas } from 'react-bootstrap';

const ProductsNew = ({setNumber}) => {
    const [allProducts,setData] = useState();
    
   
    const products = async ()=>{
        const data = new FormData()
        const res = await axios.post("https://amazon.indianhackerslab.com/get-products.php",data,SecurityHeaders);
        if(res)
        {
            if(res.data.status==="success")
            {
                setData(res.data.products)
            }
        }
    }
    useEffect(()=>{
        products()
    },[])
  return (
    <>
    
    <div className='d-flex flex-wrap container'>
    {
        allProducts?allProducts.map((item)=>(
           <div className='col-3 p-2 box-shadow'>
            <div>
             <SingleProduct setNumber={setNumber} item={item}/>
             </div>
           </div>
        )):<>nonne</>
    }
    </div>
    
    </>
  )
}

export default ProductsNew