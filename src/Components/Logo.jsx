import React from 'react';
import pp from "../assets/Screenshot_2024-11-28_122538-removebg-preview.png";

const Logo = () => {
  return (
    <div className="bg-orange-500 flex items-center justify-center min-h-screen">
      <div className="text-center">
        <img
          alt="Illustration of a cash register with a receipt coming out, surrounded by abstract shapes"
          className="mx-auto mb-4"
          height="200"
          src={pp}
          width="200"
        />
        <h1 className="text-black text-4xl font-nosifer">KASIR FAST RESPON</h1>
      </div>
    </div>
  );
};


export default Logo;