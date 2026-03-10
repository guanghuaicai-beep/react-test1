import React from 'react'
const Tour = ({img,date,title,info,icon,location,duration,cost}) => {
    return (
    <div className="tour-card">
        <div className="tour-img-container">
            <img src={img} alt="" className="innerimg" />
            <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
            <div className="tour-title">
                <h4>{title}</h4>
            </div>
            <p className="p1">{info}</p>
            <div className="tour-footer">
                <p><span><i className={icon}></i></span>{location}</p>
                <p>{duration}</p>
                <p>{cost}</p>
            </div>
        </div>
    </div>
    );
};

export default Tour