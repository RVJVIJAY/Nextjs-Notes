"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import './order.css'
const Order = () => {
    const router=useRouter();
    const handleclick=()=>{
      toast.success("Order placed successfully", {
        className: "custom-toast", 
        progressClassName: "custom-toast-progress-bar", 
      });
        console.log('order placed successfull')
        router.push('/')
        // router.back()  // it move to previous working page 
        // router.replace('/') 
        // router.forward()
    }
  return (
    <div>
      Order page
      <button onClick={handleclick}>add to cart</button>
    </div>
  )
}

export default Order
