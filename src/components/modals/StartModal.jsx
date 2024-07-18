import React from 'react'

export default function StartModal({showModal, closeModal, modalMessage, runAction}) {
  return (
    showModal &&
    <div className='modal-container'>
      <div className="modal">
        <div className="message">
            Start Test
        </div>
        <div className="info">
           {modalMessage}
        </div>
        <div className="actions">
            <button onClick={runAction} className='resume-button'>Run</button>
        </div>
      </div>
    </div>
  )
}
