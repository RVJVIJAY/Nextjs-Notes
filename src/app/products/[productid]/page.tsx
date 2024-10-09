import React from 'react'
interface Productid{
    productid:number
    
}
interface Individual{
    params:Productid
}
const Individualproduct = ({params}:Individual) => {
  return (
    <div>
      Product :{params.productid}
    </div>
  )
}

export default Individualproduct
