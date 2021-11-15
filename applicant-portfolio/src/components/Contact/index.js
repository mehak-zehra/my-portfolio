import React from "react";

const projectsRowOne = [
    {
        title: "Explore Venue",
        live_link: "",
        code_link: "",
        image_url: "/assets/images/explore_venue.jpeg",
        description: "This is the explore venue application",
    },
    {
        title: "Book Lovers",
        live_link: "",
        code_link: "",
        image_url: "/assets/images/book_lovers.jpg",
        description: "This is the book lovers application",
    },
    {
        title: "Weather Dashboard",
        live_link: "",
        code_link: "",
        image_url: "/assets/images/weather.jpeg",
        description: "This is the weather dashboard application",
    },
]
const projectsRowTwo = [
    {
        title: "Javascript Code Quiz",
        live_link: "",
        code_link: "",
        image_url: "/assets/images/javascript_quiz.jpeg",
        description: "This is the javascript code quiz application",
    },
    {
        title: "Note Taker",
        live_link: "",
        code_link: "",
        image_url: "/assets/images/note_taker.jpeg",
        description: "This is the book lovers application",
    },
    {
        title: "Desi Apparel",
        live_link: "",
        code_link: "",
        image_url: "/assets/images/desi_apparel.jpeg",
        description: "This is the weather dashboard application",
    },
]

function Contact() {
    return (
        <section>
            <h2 className="mt-3 mb-3">contact</h2>
            <form>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" id="name" placeholder="John Smith" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address:</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </section>
    )
}

export default Contact;