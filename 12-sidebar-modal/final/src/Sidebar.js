import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import {UseGlobal} from './context'
const Sidebar = () => {
  const {isSidebarOpen,closeSideBar} = UseGlobal();
  return (
    <aside className={`${isSidebarOpen? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" />
        <div className="close-btn" onClick={closeSideBar}><FaTimes/></div>
      </div>
      <ul className="links">
        {links.map(element => {
          const {id,url,text,icon} = element;
          return(
            <li key={id}>              
              <a href={url}>{icon}{text}</a>
            </li>
          )
        })}
      </ul>
      <ul className="social-icons">
        {social.map(element =>{
          const {id,url,icon}=element;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
