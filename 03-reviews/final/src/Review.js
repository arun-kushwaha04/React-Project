import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const {name,job,image,text} = people[index];

  const prevFun = (index) => {
    setIndex( index === 0 ? people.length - 1 : index-1)
  }
  const nextFun = (index) => {
    setIndex((index+1)%people.length);
  }
  return (
    <article>
      <div className="img-div">
        <img src={image} alt="user" />
        <div className="quote-icon">
        <FaQuoteRight />
        </div>
      </div>
        <h4 className="name">{name}</h4>
        <p className="job">{job}</p>
        <p>{text}</p>
      <div className="nav">
        <div className="nav-dir"><FaChevronLeft className="prev-btn" onClick = {() => prevFun(index)} ></FaChevronLeft></div>
        <div className="nav-dir"><FaChevronRight className="next-btn" onClick = {() => nextFun(index)}></FaChevronRight></div>
      </div>
      <button className="btn" onClick = {() => setIndex(Math.floor((Math.random())*people.length))}>Suprise Me</button>

    </article>
  );
};

export default Review;
