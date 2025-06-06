import './LoadingSpinner.css'
import LoadingSpinnerGif from '../../assets/loading.gif'

function LoadingSpinner(){
    return(
        
            <div className="loading-overlay-container jc-center d-flex al-center jc-">
                <img src={LoadingSpinnerGif} alt="Loading" height="80px" />
            </div>                    
    )
}

export default LoadingSpinner;