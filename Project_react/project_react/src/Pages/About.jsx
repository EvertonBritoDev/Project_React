import AboutText from "../Components/AboutText/AboutText";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import Banner from "../Components/Banner/Banner";


function About(){
    return(
        <>
            <Header />
            <Banner title="About" image="Photo.jpg"/>
            
            <div className="container">
                
                <AboutText />
            </div>
            
            <Footer />
        </>
    )
}

export default About;