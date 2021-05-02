import React from 'react';
import { useState } from 'react';

export default function Navbar() {
    const[navstate, setNav] = useState(0)
    const[divwidth, setDivwidth] = useState('')
 
    function showhide(){
        if(navstate === 0){
            setDivwidth('100%')
            setNav(1)
        }else{
            setDivwidth('0px')
            setNav(0)
        }

    }
    return (
        <div>

            <div className='maindiv' style={{width: divwidth}}>
                <button onClick={showhide}><i class="fas fa-bars"></i></button>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}
