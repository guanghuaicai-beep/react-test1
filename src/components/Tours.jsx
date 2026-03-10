import React from 'react'
import {tours} from "../../data";
import Title from "./title";
import Tour from "./Tour"
const Tours = () => {
    return (
        <section className="section tours" id="tours">
            <Title title='featured' subtitle='tours'/>
            <div className="tour-center">
                {tours.map((tour)=>{
                    return <Tour key={tour.id} {... tour} />;
                })}
            </div>
        </section>
    );
};

export default Tours