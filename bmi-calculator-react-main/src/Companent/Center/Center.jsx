import React from 'react'
import { NavLink } from 'react-router-dom'



function Center(){
    return(

        <div className='div'>

            <NavLink to='/email'>Email</NavLink>
            <NavLink to='/adress'>Adress</NavLink>
        </div>
    )
}

export default Center;