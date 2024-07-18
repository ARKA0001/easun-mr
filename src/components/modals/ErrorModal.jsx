import React from 'react'

export default function ErrorModal({showModal, closeModal, ModalMessage}) {
  return (
    showModal &&
    <div className='modal-container'>
      <div className="modal">
        <div className="message">
            Error
        </div>
        <div className="info">
           {ModalMessage}
        </div>
        <div className="actions">
            <button onClick={closeModal}>Resume</button>
            <button onClick={closeModal}>Restart</button>
        </div>
      </div>
    </div>
  )
}
