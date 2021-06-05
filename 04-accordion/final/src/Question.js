import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  const [isExpanded,setExpanded] = useState(false);
  return (
    <section className="question">
      <header>  
        <h4>{title}</h4>
        <button className="btn" onClick = {() => setExpanded(!isExpanded)}>
          {isExpanded?<AiOutlineMinus/>:<AiOutlinePlus/>}
        </button>
      </header>
      {isExpanded && <p>{info}</p>}
    </section>
  );
};

export default Question;
