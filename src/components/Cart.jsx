import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const getdata = useSelector((state) => state.cartReducer.carts);
  console.log(getdata);


  return (
   <>
   <h1>Cart Product</h1>

{
    getdata.map((item) => {
        return(
            <>
            <p>{item.rname}</p>
            </>
        )
    })
}

   </>

    
  )
}

export default Cart