import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import ProjectsList from "../Components/ProjectList/ProjectList";
import Banner from "../Components/Banner/Banner";


function Projects(){
    return(
        <>
            <Header />
            <Banner title="Projects" image="Photo.jpg"/>
            
            <div className="container">
                
                <ProjectsList />
            </div>
            
            <Footer />
        </>
    )
}

export default Projects;