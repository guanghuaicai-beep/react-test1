import React from 'react'
import aboutImg from "../assets/hero.png";
import Title from "./title";
const About = () => {
    return (
        <section className="section about" id="about">
            <Title title='about' subtitle='us' />
            <div className="about-center">
                <div className="about-img">
                    <img src={aboutImg} alt="" />
                </div>
                <article className="about-info">
                    <h3>expore the difference</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <a href="" className="btn">read more</a>
                </article>
            </div>
        </section>
    );
};

export default About

