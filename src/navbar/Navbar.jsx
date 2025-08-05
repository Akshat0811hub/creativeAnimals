import '../navbar/Navbar.css'
import { NavLink } from 'react-router-dom';
import '../../public/logo.png'

const Navbar = () => {
  return (
    <div className='main-header'>
        <div className="logo">
            <img src="logo.png" alt="" />
        </div>
        <div className="header">
            <ul>
                <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
                
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar