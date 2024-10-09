import React from 'react'
interface Children{
    children:React.ReactNode
}
const InnerLayout:React.FC<Children> = ({children}) => {
  return (
    <div>
      <h1>Inner Layout</h1>
      <p>when we grp the folder by using () bracket , we no need use the folder url , we can easily grp the folders </p>
      {children}
    </div>
  )
}

export default InnerLayout
