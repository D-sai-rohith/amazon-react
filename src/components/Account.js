import { CircularProgress } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Account = () => {
  const [data,setData] = useState()
  const Logout = ()=>{
    localStorage.removeItem('user_id')
    window.location.replace("/")
  }
  const userData = async () =>
    {
        
        const formdata = new FormData()
        const userid=localStorage.getItem("user_id")
        formdata.append('user_id',userid)
        const response = await axios.post("https://amazon.indianhackerslab.com/get-account.php",formdata)
        if(response)
        {
            if(response.data)
            {
              if(response.data.data)
              setData(response.data.data[0])
              console.log(response.data.data[0])
            }
        }
    }
    
    useEffect(()=>{
        userData()},[])
  return (
    <div>
      {data?<><p>{data.email}</p>
      <p>{data.first_name} {data.last_name}</p></>:<CircularProgress/>}
      <button className='btn' onClick={()=>Logout()}>Logout</button>
    </div>
  )
}

export default Account