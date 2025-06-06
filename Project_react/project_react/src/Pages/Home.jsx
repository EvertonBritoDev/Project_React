import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Buttons from "../Components/Buttons/Buttons";
import Hero from "../Components/Hero/Hero";
import ProjectsList from "../Components/ProjectList/ProjectList";


function Home(){
    return(
        <>
            <Header />
            <Buttons buttonStyle="primary" arrow>Olá</Buttons>
            <div className="container">
                <Hero />
                <ProjectsList />
            </div>
            
            <Footer />
        </>
    )
}

export default Home;