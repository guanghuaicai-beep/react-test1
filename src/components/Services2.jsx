import React from 'react'
import Title from './title';
import Service from './Service';
import { services } from '../../data';

const Services2 = () => {
    return (
        <section className="section services" id="services">
        <Title title='our' subtitle='services'/>
        <div className="service-center">
            {services.map((service)=>{
                return (
                    <Service icon={service.icon}
                    title={service.title}
                    text={service.text}
                    key={service.id}
                    />
                    // <Service {...service} key={service.id}/>
                )
            })};
        </div>
        </section>
    );
};

export default Services2;