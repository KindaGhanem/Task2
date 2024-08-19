

import { useState } from 'react'
import './NavBarr.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarChart } from '@fortawesome/free-regular-svg-icons'
import SceduleCommon from './../../component/SceduleCommon/SceduleCommon'


export default function NavBarr ()
{
  const [menuOpen , setMenuOpen] = useState(false)

    return(
        <nav className= 'Navbar'>
            <h3>VILLA</h3>
          <div>
            <FontAwesomeIcon icon={faBarChart} className='Bars' onClick={() =>{
              setMenuOpen(!menuOpen);
            }} />
          </div>
          <ul className = {menuOpen ? "open" : "" } >
            <li><a href='#'>Home</a></li>
            <li><a href='#properties'>Proprties</a></li>
            <li><a href='#'>Proprties Details</a></li>
            <li><a href='#contact'>Contact Us</a></li>
          </ul>
          <SceduleCommon  /> 
        </nav>
) }