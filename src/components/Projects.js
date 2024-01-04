import * as React from 'react';
import './Projects.css'

const Projects = () => {
    const projects = [
        {
            name: "Teamfinder",
            url: "https://teamfinder1-0.netlify.app",
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
        },
        {
            name: "FakeShop Inc",
            url: "https://fakeshop-inc.netlify.app/",
            comment: "Front end project built as part of my studies at Integrify using the Platzi Fake Store API"
        },
        {
            name: "FakeStore Inc",
            url: "https://fakestoreinc.netlify.app/",
            comment: "Front end for my full stack project built as part of my studies at Integrify using the backend I built using ASP.NET Core, Entity Framework Core, and PostgreSQL"
        },
        {
            name: "Futistr",
            url: "https://futistr.netlify.app/",
            comment: "Full stack project inspired by the Teamfinder projects I built earlier"
        },
    ]
    return (
        <div> 
            <h2>
                Projects
            </h2>
            <div className='projectCardHolder'>
                {
                    projects.map(project => 
                        <div className='projectCard'>
                            <h3>{project.name}</h3>
                            <h5>{project.comment}</h5>
                            <a href={project.url} target='_blank' rel='noreferrer' >Visit project</a>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Projects;