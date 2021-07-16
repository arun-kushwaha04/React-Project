import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks,setShowLinks] = useState(false);
  const refDivContainer = useRef(null);
  const refLink = useRef(null);
  useEffect(()=>{
    const linksHeight = refLink.current.getBoundingClientRect().height;
    if(showLinks){
      refDivContainer.current.style.height = `${linksHeight}px`;
    }else{
      refDivContainer.current.style.height = `0px`;
    }
  },[showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
            <FaBars/>
          </button>
        </div>
        <div className="links-container" ref={refDivContainer}>
          <ul className="links" ref={refLink}>
            {links.map(element => {
              const {id,url,text} = element;
              return(
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map(element => {
            const {id,url,icon} = element;
            return(
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
