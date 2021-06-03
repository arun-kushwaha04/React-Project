import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const {name,job,image,text} = people[index];
  return (
    <article>
      <div className="img">
        <img src={image} alt="user image" />
        <div className="quote-icon">

        <FaQuoteRight />
        </div>
      </div>
        <h4>{name}</h4>
        <p className="job">{job}</p>
        <p>{text}</p>
      <div className="nav">
        <div className="nav-dir"><FaChevronLeft className="prev-btn"></FaChevronLeft></div>
        <div className="nav-dir"><FaChevronRight className="next-btn"></FaChevronRight></div>
      </div>
      <button className="btn">Suprise Me</button>

    </article>
  );
};

export default Review;
