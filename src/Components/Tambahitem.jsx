import React, { useState } from "react";
import { Link } from "react-router-dom";
import Berhasilditambahkan from "./Berhasilditambahkan";
import Modal from "./Modal";

const Tambahitem = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemStock, setItemStock] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false)
  const [isHapus, setIsHapus] = useState(false)

  const handleStockChange = (change) => {
    setItemStock((prevStock) => Math.max(1, prevStock + change));
  };

  const handleSave = () => {
    console.log("Item saved:", { itemName, itemPrice, itemStock });

    setItemName("");
    setItemPrice("");
    setItemStock(1);
  };

  console.log(isSuccess)

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-orange-500 text-white flex justify-around py-4">
        <a className="font-bold" href="Kasir">
          KASIR
        </a>
        <a
          className="font-bold tab-active border-b-4 border-white"
          href="Tambahitem"
        >
          TAMBAH ITEM
        </a>
        <a className="font-bold" href="Riwayat">
          Riwayat
        </a>
      </header>
      <div className="p-8">
        <h1 className="text-xl font-bold mb-4">MASUKAN ITEM</h1>
        <div className="mb-4">
          <label className="block text-orange-500 font-bold mb-2">
            NAMA ITEM
          </label>
          <input
            type="text"
            placeholder="Masukan Nama Item"
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-orange-500 py-2"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className="mb-4 flex justify-between items-center">
          <div className="w-1/2">
            <label className="block text-orange-500 font-bold mb-2">
              HARGA ITEM
            </label>
            <input
              type="text"
              placeholder="Masukan Harga Item"
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-orange-500 py-2"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <span className="text-orange-500 font-bold mr-2">JUMLAH STOCK</span>
            <div className="flex items-center">
              <i
                className="fas fa-minus-circle text-orange-500 cursor-pointer"
                onClick={() => handleStockChange(-1)}
              ></i>
              <span className="mx-2">{itemStock}</span>
              <i
                className="fas fa-plus-circle text-orange-500 cursor-pointer"
                onClick={() => handleStockChange(1)}
              ></i>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <button 
            onClick={() => setIsHapus(!isHapus)}
          
          className="w-1/3 py-2 border border-gray-300 text-gray-700">
            HAPUS
          </button>
          <button
            className="w-1/3 py-2 bg-orange-500 text-white"
            onClick={() => setIsSuccess(!isSuccess)}
          >
            SIMPAN
          </button>
        </div>
        <button
          onClick={() => (window.location.href = "Stockbarang")}
          className="w-full py-2 bg-gray-500 text-white"
        >
          LIHAT STOCK
        </button>
      </div>
     <Modal 
     title={`Stock`}
     message={`Berhasil Ditambahkan`}
     isOpen={isSuccess} onClose={() => setIsSuccess(!isSuccess)}/>
     <Modal 
     title={`Stock`}
     message={`Gagal Ditambahkan`}
     isOpen={isHapus} onClose={() => setIsHapus(!isHapus)} type="isBack"/>
    </div>
  );
};

export default Tambahitem;
