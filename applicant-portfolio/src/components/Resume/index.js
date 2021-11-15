import React from 'react';

function Resume() {
    return (
        <section>
            <div className="jumbotron">
                <h1 className="display-6">Resume</h1>
                <button type="button" className="btn btn-outline-primary source-code pl-3 pr-3 mt-3 mb-3">Download Resume</button>
                <h2>Academic</h2>
                <hr className="my-4" />
                <p>
                    University of California, Berkeley
                    Certification for Fullstack Web Developer (Present)
                    <br/>
                    NED University of Engineering & Technology
                    Bachelors of Science in Software Engineering (2016)
                </p>
                <br />
                <h2>Experience</h2>
                <hr className="my-4" />
                <p>
                    Course Hero, Inc. (Redwood City, CA)<br/>
                    June 2019 - July 2020<br/><br/>

                    Metadata Specialist<br/>
                    Performed UI testing for Textbook Solutions, which resulted in filing bugs on JIRA
                    Developed mathematical formulas using KaTEX (Javascript) and debugged KaTEX errors on the question landing page
                    Fixed JSX errors for graphical questions
                    Documented the QA workflow for Textbook Solutions that was used to onboard and train 30+ offshore testers
                    Assisted in data entry for textbook questions to build textbook solutions library
                    Integrated a slack application (Geekbot) that provided automated tracking for daily standups that increased team organization and efficiency
                </p>
                <br />
                <p>
                    Systems Limited<br/>
                    Feb 2017 - December 2017<br/><br/>

                    Associate Software Engineer<br/>
                    Developed login/signup pages written in HTML, CSS, Bootstrap and Javascript for the client (Dubai Taxi Corp.)
                    Updated copy changes for static HTML pages for Dubai Taxi Corp.
                    Attended daily standups and actively participated in scrum ceremonies
                    Worked with project stakeholders on identifying requirements using Agile Scrum methodologies
                </p>
                <h2>Skills</h2>
                <hr className="my-4" />
                <p>
                    React, Node.js, Express.js, Bootstrap, Javascript, JSX, HTML5, CSS3, jQuery

                    Cypress, JEST

                    MySQL

                    JIRA, Asana, GIT, Slack, Postman

                    Scrum
                </p>
            </div>
        </section>
    );
}

export default Resume;