import React from 'react'
import { FaBars } from 'react-icons/fa'
import {UseGlobal} from './context'
const Home = () => {
  const {openSideBar,openModal} = UseGlobal();
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSideBar}>
        <FaBars/>
      </button>
      <button className="btn" onClick={openModal}>
        modal
      </button>
    </main>
  )
}

export default Home
