import React from "react"
import "./home.css";
import Post from "./Post";
import Resume from "./../../assets/resume.pdf"
import { FiFileText } from "react-icons/fi";

const Home = () => {
    return(
        <section className="home section" id="home">
            <div className="home__container container">
                <div className="home__content">
                    <div className="home__post">
                        <Post/>
                    </div>
                    <div className="home__data">
                        <p className="home__description">Hello, I'm</p>
                        <h1 className="home__title">Fahsai Patesai</h1>
                        <h3 className="home__subtitle">Computer Science</h3>
                        <a download="" href={Resume} className="button resume">My Resume 
                        <div>
                            <FiFileText className="resume-icon"/>
                        </div>
                        </a>
                    </div>
                </div>
            </div> 

        </section>
    )
}

export default Home;