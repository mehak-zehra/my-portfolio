import React from "react";

const projectsRowOne = [
    {
        title: "Stylo",
        live_link: "https://mehak-stylo.herokuapp.com/",
        code_link: "https://github.com/mehak-zehra/stylo",
        image_url: "/assets/images/fashion-men-subscription-box.jpeg",
        description: "Stylo is an online fashion clothes subscription application",
    },
    {
        title: "Explore Venue",
        live_link: "https://explore-venue.herokuapp.com/",
        code_link: "https://github.com/mehak-zehra/explore-venue",
        image_url: "/assets/images/explore_venue.jpeg",
        description: "This is the explore venue application",
    },
    {
        title: "Weather Dashboard",
        live_link: "https://mehak-zehra.github.io/weather-dashboard/",
        code_link: "https://github.com/mehak-zehra/weather-dashboard",
        image_url: "/assets/images/weather.jpeg",
        description: "This is the weather dashboard application",
    },
]
const projectsRowTwo = [
    {
        title: "Book Lovers",
        live_link: "https://mehak-zehra.github.io/book-lovers/",
        code_link: "https://github.com/mehak-zehra/book-lovers",
        image_url: "/assets/images/book_lovers.jpg",
        description: "This is the book lovers application",
    },
    {
        title: "Javascript Code Quiz",
        live_link: "https://mehak-zehra.github.io/code-quiz-challenge/index.html",
        code_link: "https://github.com/mehak-zehra/code-quiz-challenge",
        image_url: "/assets/images/javascript_quiz.jpeg",
        description: "This is the javascript code quiz application",
    },
    {
        title: "Note Taker",
        live_link: "https://mehak-note-taker.herokuapp.com/",
        code_link: "https://github.com/mehak-zehra/note-taker",
        image_url: "/assets/images/note_taker.jpeg",
        description: "This is the book lovers application",
    },
]

function Projects() {
    return (
        <section>
            <h2 className="mt-3 mb-3">projects</h2>
            <div className="card-deck">
                {projectsRowOne.map((project) => (
                    <div className="card">
                        <a href={project.live_link} target="_blank">
                            <img className="card-img-top" src={project.image_url} height="275" alt="Card image cap" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                            <a href={project.code_link} target="_blank">
                                <button type="button" className="btn btn-outline-primary source-code pl-3 pr-3">Source Code</button>
                            </a>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                ))}
            </div>
            <div className="card-deck mt-5">
                {projectsRowTwo.map((project) => (
                    <div className="card">
                        <a href={project.live_link} target="_blank">
                            <img className="card-img-top" src={project.image_url} height="275" alt="Card image cap" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                            <a href={project.code_link} target="_blank">
                                <button type="button" className="btn btn-outline-primary source-code pl-3 pr-3">Source Code</button>
                            </a>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;