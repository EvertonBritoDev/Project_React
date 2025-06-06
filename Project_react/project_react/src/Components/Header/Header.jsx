import { useState } from 'react'
import {Link} from 'react-router-dom'
//components
import Button from '../Buttons/Buttons'
//Assets
import Logo from '../../assets/dnc-logo.svg'
import './header.css'
function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);        
    }
    return(
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo} /></Link>
                    <div className="mobile-menu">
                        <Button buttonStyle="secondary" onClick={toggleMenu}>
                            Menu
                        </Button>
                    </div>
                    <nav className={`${isOpen ? 'open' : ''}`}>
                        <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={toggleMenu}>
                            x
                        </Button>
                        <ul className="d-flex">
                            <li ><Link to="/">Home </Link></li>
                            <li ><Link to="/about">About</Link></li>
                            <li><Link to="/project">Project</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>                
            </div>            
        </header>
    )
}

export default Header;