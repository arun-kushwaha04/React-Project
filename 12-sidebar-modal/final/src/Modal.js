import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {UseGlobal} from './context'
const Modal = () => {
  const {isModalOpen,closeModal} = UseGlobal();
  return (
    <div className={`${isModalOpen?'modal-overlay show-modal':'modal-container'}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}> 
          <FaTimes/>
        </button>
      </div>
    </div>
  )
}

export default Modal
