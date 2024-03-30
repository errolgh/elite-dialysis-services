import React from "react"

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">We're Closed!</h2>
            <p className="text-lg mb-4">
              ...but will be open soon. Contact us for our opening dates and view our webpage.
            </p>
            <div>
              <button
                className="btn-primary"
                onClick={onClose}
              >
                View Elite Dialysis
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
