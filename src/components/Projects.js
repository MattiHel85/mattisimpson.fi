import * as React from 'react';
import './Projects.css'

const Projects = () => {
    const projects = [
        {
            name: "Teamfinder",
            url: "https://teamfinder.netlify.app",
            comment: "React front end for football teams REST API"
        },
        {
            name: "Teamfinder API",
            url: "https://football-teams-rest-api-assignment.onrender.com/api/",
            comment: "Rest API assignment built as part of my Full Stack course at Laurea"
        },
        {
            name: "Say Hello",
            url: "https://say-hello-laurea-to00bs65-3003-guestbook.onrender.com/",
            comment: "Guestbook app built as part of my Full Stack course at Laurea - the guestbook resets everyday because the messages are saved to a json file and not to a database"
        }
    ]
    return (
        <div> 
            <h2>
                Projects
            </h2>
            {projects.map(project => 
                <div className='projectCard'>
                    <h3>{project.name}</h3>
                    <h5>{project.comment}</h5>
                    <a href={project.url} target='_blank'>Visit project</a>
                </div>
            )}
        </div>
    );
}

export default Projects;