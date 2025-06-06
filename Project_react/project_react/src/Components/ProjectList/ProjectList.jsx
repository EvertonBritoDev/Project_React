import {useState, useEffect} from 'react';
import './ProjectList.css';
//Assets

import LikeOutLine from '../../assets/like_no.svg'
import LikedYes from '../../assets/like_yes.svg'

//utils
import { getApiData } from '../../Services/apiServices';
import Buttons from '../Buttons/Buttons.jsx'


function ProjectList(){
    const [projects, setProjects] = useState();
    const [favProject,setFavProject] = useState([])
    
    const handleSavedProject = (id) => {
             setFavProject((prevFavProjects) => {
                if (prevFavProjects.includes(id)){
                    const filterArray = prevFavProjects.filter((projectID) =>{ projectID !== id})
                    sessionStorage.setItem('favProjects',JSON.stringify(filterArray))
                    return prevFavProjects.filter((projectID) => projectID !== id)
                }else{
                    sessionStorage.setItem('favProjects',JSON.stringify([...prevFavProjects,id]))
                    return [...prevFavProjects,id]
                }                    
            })
        }
    useEffect(() => {
        const fetchData = async () =>{
            try {
                const projectResponse = await getApiData('projects')
                setProjects(projectResponse);
            } catch  {
                setProjects([])
            }
        }
        fetchData();
    }, []);
    useEffect(() => {
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
        if(savedFavProjects){
            setFavProject(savedFavProjects)
        }
    },[])
    return(
        <div className="projects-section" >
            <div className="projects-hero">
                <h2>
                    Follow Our Projects
                </h2>
                <p>
                    It is a long established fact that a reader will be distracted by the of readable content of page  
                    lookings at its layouts  points.
                </p>
            </div>
            <div className='projects-grid'>
                {
                    projects ?
                        projects.map((projects) =>  (
                            <div className='projects-card d-flex jc-center al-center fd-column' key={projects.id}>
                                <div 
                                    className='thumb tertiary-background'
                                    style={{backgroundImage: `url(${projects.thumb})`}}
                                ></div>
                                <h3>{projects.title}</h3>
                                <p>{projects.subtitle}</p>
                                <Buttons onClick={() => handleSavedProject(projects.id)}>
                                    <img src={favProject.includes(projects.id) ? LikedYes : LikeOutLine  }/>
                                </Buttons>
                                
                            </div>                        
                        ))
                    : 
                    null
                }            
            </div>
        </div>
    )
}

export default ProjectList;