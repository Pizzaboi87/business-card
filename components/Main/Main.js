import React from 'react';

const Main = () => {
    return (
        <div className="maindiv">
            <h1 className="name">Peter Weiser</h1>
            <h2 className="profession">Frontend Developer</h2>
            <h3 className="site">
                <a href="https://peterweiser.com">
                peterweiser.com
                </a>
            </h3>
            <a href="mailto:peterweiser87@gmail.com" target="_blank">
                <button className="email">
                    <i className="fa-solid fa-envelope"></i>
                    Email
                </button>
            </a>
            <div className="about">
                <h1>About</h1>
                <p>Hi, my name is Peter Weiser. I was born and raised in a little Hungarian town Kisvarda, but after Spain and Czechia, at present reside in Athens, Greece.
                </p>
            </div>
            <div className="interest">
                <h1>Interests</h1>
                <p>I originally graduated from the University of Kaposvár as an actor. Being a very technical-oriented person, I became interested in web development and began to learn it on my own.
                </p>
            </div>
        </div>
    )
}

export default Main;