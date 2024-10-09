import React from 'react'


const Productlayout= ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      {children}
      <h1>This content  OR Layout only present on the Product folder only </h1>
    </div>
  )
}

export default Productlayout
