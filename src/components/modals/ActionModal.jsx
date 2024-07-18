import React from 'react'

export default function ActionModal({showModal, closeModal, modalMessage, resumeAction}) {
  return (
    showModal &&
    <div className='modal-container'>
      <div className="modal">
        <div className="message">
            Action
        </div>
        <div className="info">
           {modalMessage}
        </div>
        <div className="actions">
            <button onClick={closeModal}>Restart</button>
            <button onClick={resumeAction} className='resume-button'>Resume</button>
        </div>
      </div>
    </div>
  )
}
