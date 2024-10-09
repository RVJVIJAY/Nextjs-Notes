import React from 'react'
interface Data{
    mobile:number,
    review:number
}
interface Param{
    params:Data
}
const Review = ({params}:Param) => {
  return (
    <div>
      {`mobile is : ${params.mobile}`} && {`review is ${params.review}`}
    </div>
  )
}

export default Review
