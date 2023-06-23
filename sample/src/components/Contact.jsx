import React from 'react'

function Contact() {
  return (
    <div className='formParent'>
      <form action="" className='formStyle'>

        <label htmlFor="fname">FirstName</label><br/><br/>
        <input type='text' name='firstName' id='firstName'/><br/><br/>

        <label htmlFor="lname">LasstName</label><br/><br/>
        <input type='text' name='lastName' id='lastName'/><br/><br/>

        <label htmlFor="email">Email</label><br/><br/>
        <input type='Email' name='email' id='email'/><br/><br/>

        <button type='submit'>Submit</button>
        
      </form>
    </div>
  )
}

export default Contact
