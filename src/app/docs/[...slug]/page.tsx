import React from 'react'

const Arrayofdata = ({params}:{params:{slug:string[]}}) => {
  return (
    <div>
     <h1>one:{params.slug[0]}</h1> 
    <h1>two:{params.slug[1]}</h1>
    </div>
  )
}

export default Arrayofdata
