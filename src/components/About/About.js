import React from "react";
import "./about.css"
import AboutImg from "./../../assets/aboutImg.png"
import Info from "./Info";

const About =  () => {
    return(
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img"/>

                <div className="about__data">
                    <Info/>
                    <h3 className="about__description">
                    Hello! My name is Fahsai Patesai. I'm 4th Student of Computer Science studying in Software engineer at Thammasat University.
                    </h3>
                </div>
            </div> 
        </section>
    )
}

export default About;