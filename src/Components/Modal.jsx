import React from "react";

const Modal = ({
   isOpen, onClose, 
   type,
  title,
  message 
   }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
      <h1 className="text-orange-600 text-2xl font-bold">{title}</h1>
      <h2 className="text-orange-600 text-2xl font-bold">{message}</h2>
        <div className="flex justify-end">
          {
            type === "isBack" &&  <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white font-bold rounded hover:bg-orange-700"
          >
            Kembali
          </button>
          }
         
          <button
            onClick={() => window.location.href = 'Stockbarang'} 
            className="px-4 py-2 bg-orange-600 text-white font-bold rounded hover:bg-orange-700"
          >
            Lihat Stock
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;