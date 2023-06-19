import React from 'react';
import './Header.css';

function Header() {
    const element = <a href="https://www.reactjs.org">link</a>
    const a =1;
    const b = 2;
    const expression = <code>{a} + {b} = {a+b}</code>
    console.log(element)
  return (
    <React.Fragment>

    <div className='para'><p>{expression}</p></div>
    <div><p>Hello</p></div>
   
    </React.Fragment>
  )
}

export default Header
