import React from 'react'
import {Link} from 'react-router-dom'
import myLogo from '../images/frdb.png'
import '../App.css'



export default function NavBar() {
   return(
      <nav>
         <img className='nav--logo' src={myLogo} alt='Logo' />
   <ul>
   <li>
      <Link to="/"><button className='btn--nav'>Home</button></Link>
   </li>
   <li>
      <Link to="/recipes"><button className='btn--nav'>Recipes</button></Link>
   </li>
   <li>
      <Link to="/addRecipe"><button className='btn--nav'>Add Recipe</button></Link>
   </li>
   <li>   
      <Link to="/favorites"><button className='btn--nav'>Favorites</button></Link>
   </li>
   </ul>
      </nav>
   )
}