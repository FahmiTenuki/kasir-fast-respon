import React, { useState } from "react";
import Modal from "./Modal"; 

function Berhasilditambahkan({
  isOpen,
  setisSuccess,
  // type,
  title,
  message
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
      <h1 className="text-orange-600 text-2xl font-bold">{title}</h1>
      <h2 className="text-orange-600 text-2xl font-bold">{message}</h2>
        <button 
          onClick={setisSuccess} 
          className="mt-4 px-6 py-2 bg-orange-600 text-white font-bold rounded shadow-md hover:bg-orange-700">
          LIHAT STOCK
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={setisSuccess} />
    </div>
  );
}

export default Berhasilditambahkan;