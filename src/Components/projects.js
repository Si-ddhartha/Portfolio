import React from "react";
import './projects.css'


function Projects(props){
    return (
        <div className="card">
            <div className="project-about">
                <h2>{props.project.title}</h2>
                <p>{props.project.about}</p>
                <div className="project-links">
                    { props.project.github_link && <a href={props.project.github_link}><i class="fa-brands fa-github fa-2xl"></i></a> }
                    { props.project.live_link && < a href={props.project.live_link}><i class="fa-solid fa-link fa-xl"></i></a> }
                </div>
            </div>
            <div className="project-image">
                <img src={require(`../assests/${props.project.img_name}`)} alt="placeholder" />
            </div>
        </div>
    )
}

export default Projects