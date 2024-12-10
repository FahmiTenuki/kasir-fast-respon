import React, { useState } from "react";

const itemsData = [
  { name: "BISKUAT", price: "RP 18.000", code: "1213435368789", quantity: 20 },
  { name: "OREO", price: "RP 22.000", code: "1213435368789", quantity: 30 },
  { name: "AQUA", price: "RP 20.000", code: "1213435368789", quantity: 55 },
  { name: "MILKU", price: "RP 5.000", code: "1213435368789", quantity: 25 },
  { name: "SOSRO", price: "RP 15.000", code: "1213435368789", quantity: 39 },
  { name: "TARO", price: "RP 5.000", code: "1213435368789", quantity: 35 },
  { name: "POP MIE", price: "RP 30.000", code: "1213435368789", quantity: 93 },
  { name: "CHITATO", price: "RP 12.000", code: "1213435368789", quantity: 93 },
  { name: "GOOD DAY", price: "RP 8.000", code: "1213435368789", quantity: 23 },
];

function Stockbarang() {
  const [items, setItems] = useState(itemsData);

  const handleStockChange = (index, delta) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-orange-500 text-white p-4 flex items-center">
        <i
          onClick={() => (window.location.href = "Tambahitem")}
          className="fas fa-arrow-left text-2xl"
        ></i>
        <h1 className="text-center flex-grow text-xl font-bold">STOCK BARANG</h1>
      </div>

      <div className="p-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 mb-2 flex items-center justify-between border-b border-gray-300"
          >
            <div>
              <h2 className="font-bold">{item.name}</h2>
              <p className="text-orange-500 font-bold">{item.price}</p>
              <p className="text-gray-500">{item.code}</p>
            </div>
            <div className="flex items-center">
              <i
                className="fas fa-minus-circle text-orange-500 text-xl cursor-pointer"
                onClick={() => handleStockChange(index, -1)}
              ></i>
              <span className="mx-2">{item.quantity}</span>
              <i
                className="fas fa-plus-circle text-orange-500 text-xl cursor-pointer"
                onClick={() => handleStockChange(index, 1)}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stockbarang;
