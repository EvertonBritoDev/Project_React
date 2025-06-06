
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Banner/Banner";
import ContactForm from "../Components/ContactForm/ContactForm";


function contact(){
    return(
        <>
            <Header />
            <Banner title="Contact" image="Photo.jpg"/>
            
            <div className="container">
                
                <ContactForm />
            </div>
            
            <Footer />
        </>
    )
}

export default contact;