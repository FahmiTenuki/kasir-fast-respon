import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "tailwindcss/tailwind.css";
import pp from "../assets/qr.avif";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg">{children}</div>
    </div>
  );
};

const Kasir = () => {
  const initialItems = [
    { name: "BISKUAT", price: "RP 18.000", code: "121343568789", quantity: 3 },
    { name: "OREO", price: "RP 22.000", code: "121343568789", quantity: 2 },
    { name: "AQUA", price: "RP 20.000", code: "121343568789", quantity: 4 },
    { name: "MILKU", price: "RP 5.000", code: "121343568789", quantity: 1 },
    { name: "SOSRO", price: "RP 15.000", code: "121343568789", quantity: 3 },
    { name: "TARO", price: "RP 5.000", code: "121343568789", quantity: 1 },
  ];

  const Item = ({ item, onStockChange }) => (
    <div className="flex justify-between items-center border-b py-4 px-6">
      <div>
        <div className="font-bold">{item.name}</div>
        <div className="text-orange-500 font-bold">{item.price}</div>
        <div className="text-gray-500">{item.code}</div>
      </div>
      <div className="flex items-center space-x-4">
        <i
          className="fas fa-minus-circle text-orange-500 cursor-pointer"
          onClick={() => onStockChange(item, -1)}
        ></i>
        <div className="text-orange-500">{item.quantity}</div>
        <i
          className="fas fa-plus-circle text-orange-500 cursor-pointer"
          onClick={() => onStockChange(item, 1)}
        ></i>
      </div>
    </div>
  );

  const [items, setItems] = useState(initialItems);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isQRModalOpen, setQRModalOpen] = useState(false);

  const handleStockChange = (item, delta) => {
    setItems((prevItems) =>
      prevItems.map((i) =>
        i.name === item.name
          ? { ...i, quantity: Math.max(0, i.quantity + delta) }
          : i
      )
    );
  };

  const calculateTotalItems = () =>
    items.reduce((sum, item) => sum + item.quantity, 0);

  const calculateTotalPrice = () =>
    items.reduce(
      (sum, item) =>
        sum +
        parseInt(item.price.replace("RP ", "").replace(".", "")) * item.quantity,
      0
    );

  return (
    <div className="flex flex-col h-screen">
      
      <header className="bg-orange-500 text-white flex justify-around py-4">
        <div className="font-bold tab-active border-b-4 border-white">KASIR</div>
        <a className="font-bold" href="Tambahitem">
          TAMBAH ITEM
        </a>
        <a className="font-bold" href="Riwayat">
          RIWAYAT
        </a>
      </header>

      
      <main className="flex-1 overflow-y-auto">
        {items.map((item, index) => (
          <Item key={index} item={item} onStockChange={handleStockChange} />
        ))}
      </main>

      
      <footer className="bg-orange-500 text-white py-4 px-6 flex justify-between items-center">
        <div className="font-bold">TOTAL SEKARANG</div>
        <i
          className="fas fa-shopping-cart cursor-pointer"
          onClick={() => setModalOpen(true)}
        ></i>
      </footer>

      
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <div className="text-center">
            <div className="flex justify-between text-sm mb-4">
              <span>{new Date().toLocaleTimeString()}</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="text-orange-500 font-bold mb-2">JUMLAH BARANG</div>
            <div className="text-2xl font-bold mb-2">{calculateTotalItems()}</div>
            <div className="text-orange-500 font-bold mb-2">HARGA TOTAL</div>
            <div className="text-3xl font-bold mb-4">
              RP {calculateTotalPrice().toLocaleString("id-ID")}
            </div>
            <div className="text-orange-500 font-bold mb-4">BAYAR MENGGUNAKAN</div>
            <div className="flex justify-center space-x-4 mb-4">
              <button
                className="bg-orange-500 text-white py-2 px-4 rounded-lg"
                onClick={() => {
                  setModalOpen(false);
                  setQRModalOpen(true);
                }}
              >
                QRIS
              </button>
              <button
                className="bg-orange-500 text-white py-2 px-4 rounded-lg"
                onClick={() => {
                  setModalOpen(false);
                  setSuccessModalOpen(true);
                }}
              >
                TUNAI
              </button>
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow-sm"
            >
              KEMBALI
            </button>
          </div>
        </Modal>
      )}

      
      <Modal isOpen={isSuccessModalOpen} onClose={() => setSuccessModalOpen(false)}>
        <h1
          className="text-orange-500 text-3xl font-bold mb-4"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          PEMBAYARAN BERHASIL
        </h1>
        <button
          className="bg-orange-500 text-white text-lg font-bold py-2 px-6 rounded shadow-md hover:bg-orange-600"
          onClick={() => setSuccessModalOpen(false)}
        >
          CETAK STRUK
        </button>
      </Modal>

      
      <Modal isOpen={isQRModalOpen} onClose={() => setQRModalOpen(false)}>
        <h1 className="text-orange-500 text-2xl font-bold mb-4">SCAN BARCODE</h1>
        <img
          src={pp}
          alt="QR code for scanning"
          className="w-64 h-64"
        />
        <button
          className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg"
          onClick={() => setQRModalOpen(false)}
        >
          CLOSE
        </button>
      </Modal>
    </div>
  );
};

export default Kasir;

// Ini biasanya ada di file terpisah, seperti index.js
if (document.getElementById('root')) {
  const root = createRoot(document.getElementById('root'));
  root.render(<Kasir />);
}