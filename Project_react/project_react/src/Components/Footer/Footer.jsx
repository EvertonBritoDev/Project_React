import {Link} from 'react-router-dom'
//Assets
import Logo from '../../assets/dnc-logo.svg'
import brazil from '../../assets/brazil.svg'
import usa from '../../assets/usa.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkdin from '../../assets/linkdin.svg'
import twiter from '../../assets/twiter.svg'
import './footer.css'
import Buttons from '../Buttons/Buttons.jsx'
import { AppContext } from '../../Context/AppContext'
import { useContext } from 'react'

function Footer(){
    const appContext = useContext(AppContext)

    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    } 

    return(
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between ">
                    <div className="footer-logo-col">
                        <img src={Logo} className='footer-logo' />
                        <p className="grey-1-color"> 
                            {appContext.languages[appContext.language].general.footerLogoText}
                        </p>
                        <div className="d-flex social-links">
                            <a href="https://google.com" target='_blank'>
                                <img src={facebook} alt="" />
                            </a>
                            <a href="https://google.com" target='_blank'>
                                <img src={twiter} alt="" />
                            </a>
                            <a href="https://google.com" target='_blank'>
                                <img src={instagram} alt="" />
                            </a>
                            <a href="https://google.com" target='_blank'>
                                <img src={linkdin} alt="" />
                            </a>
                        </div>                        
                    </div>    
                    <div className="d-flex mobile-fd-column">
                        <div className='footer-col'>
                            <h3>
                                {appContext.languages[appContext.language].general.pages}
                            </h3>
                            <ul >
                                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to="/project">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h3> {appContext.languages[appContext.language].menu.contact}</h3>
                            <p className='grey-1-color'>
                                rua. Justino Colbra , 61
                            </p>
                            <p className='grey-1-color'>
                                e-mail@e-mail.com
                            </p>
                            <p className='grey-1-color'>
                                11-9999-9999
                            </p>
                        </div>
                    </div>                
                </div> 
                <div className="d-flex jc-space-between footer-copy">
                    <p className='grey-1-color'>Copyright DNC - 2024</p>
                    <div className='langs-area d-flex'>
                        <Buttons onClick={()=> changeLanguage('br')}>
                            <img src={brazil} height="29px" alt="" />
                        </Buttons>
                        <Buttons onClick={()=> changeLanguage('en')}>
                            <img src={usa} height="29px"  alt="" />
                        </Buttons>                        
                    </div>
                </div>               
            </div>            
        </footer>
    )
}

export default Footer
