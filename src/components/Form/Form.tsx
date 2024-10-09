
import React from 'react'
import './Form.css'
const Form = () => {
  return (
   <>
     <div className="container">
        <form className="simple-form">
            <h2>Simple Form</h2>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <button type="submit">Submit</button>
        </form>
    </div>
   </>
  );
}

export default Form;
