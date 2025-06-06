
//Assets

import './Buttons.css'
import WhiteArrow from '../../assets/Seta_to_Right.svg'
function butttons({arrow, buttonStyle, loading, children,...props}){
    return(
        <button className={`button ${buttonStyle}`} {...props}>
            {children} {arrow && <img src={WhiteArrow} />}
        </button>
        
    )
}

export default butttons;