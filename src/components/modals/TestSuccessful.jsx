import React from 'react'

export default function TestSuccessful({showModal, closeModal}) {
  return (
    showModal &&
    <div className='modal-container'>
      <div className="modal">
        <div className="message">
            Testing
        </div>
        <div className="info">
           Start ADS LED Testing
        </div>
        <div className="actions">
            <button onClick={closeModal}>Start Testing</button>
        </div>
      </div>
    </div>
  )
}
