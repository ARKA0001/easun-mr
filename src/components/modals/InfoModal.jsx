import React from 'react'

export default function InfoModal({showModal, closeModal, modalMessage, downloadAction}) {
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
            <button onClick={downloadAction}>Download Now</button>
        </div>
      </div>
    </div>
  )
}
