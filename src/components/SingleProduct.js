import React, { useState } from 'react'
import SecurityHeaders from '../data/SecurityHeaders'
import axios from 'axios'
import userId from '../data/UserId'
import { Modal, Offcanvas } from 'react-bootstrap'

const SingleProduct = ({item,setNumber}) => {
  const [show,setShow] = useState(false)
  const [cart,setCart] = useState(false)
  const [offcanvas,setOffcanvas] = useState(false)
    const addToCart = async ()=>{
      setNumber()
      setOffcanvas(true)
        if(userId===null || userId==="null")
        {
            setShow(true)
        }else{
          const data = new FormData()
        data.append("user_id",userId)
        data.append("quantity",1)
        data.append("product_id",item.product_id)
        const res = await axios.post("https://amazon.indianhackerslab.com/insert-cart.php",data,SecurityHeaders);
        if(res)
        {
          if(res.data.status==="success")
          {
            setCart(true)
          }
        }
        }
        
    }
    
  return (
    
    <>
     <Offcanvas show={offcanvas} onHide={()=>setOffcanvas(false)} placement='end'>
        <Offcanvas.Header closeButton>
          Your item in cart
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div class="card">
  <img class="card-img-top" src={item.images} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p>{item.price}</p>
    <button className='btn btn-warning' onClick={()=>window.location.replace("/cart")}>View Cart</button>
  </div>
</div>
        </Offcanvas.Body>
      </Offcanvas>
          <Modal show={show} onHide={()=>setShow(false)}>
      
      <Modal.Body>
    <p>Login to Continue</p>
  </Modal.Body>
      
    </Modal>
    {/* <Modal show={cart} onHide={()=>setCart(false)}>
      
      <Modal.Body>
    <p>Item added into cart</p>
  </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-warning' onClick={()=>setCart(false)}>OK</button>
      </Modal.Footer>
    </Modal> */}
    <div class="card">
  <img class="card-img-top" src={item.images} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p>{item.price}</p>
     <a href="#" class="btn btn-warning" onClick={()=>addToCart()}>Add to cart</a>
  </div>
</div>
    </>
  )
}

export default SingleProduct