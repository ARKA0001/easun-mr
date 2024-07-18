import React from 'react'

export default function InfoModal({showModal, closeModal, modalMessage}) {
  return (
    showModal &&
    <div className='modal-container'>
      <div className="modal">
        <div className="message">
            Information
        </div>
        <div className="info">
           {modalMessage}
        </div>
        <div className="actions">
            <button onClick={closeModal}>Start Testing</button>
        </div>
      </div>
    </div>
  )
}
