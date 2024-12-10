import React, { useState } from "react";

const Pengaturan = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [uploadHistory, setUploadHistory] = useState(false);
  const [uploadItems, setUploadItems] = useState(false);
  const [proFeature, setProFeature] = useState(false);

  return (
    <div className="min-h-screen bg-white">

      <div className="bg-orange-500 text-white text-center py-4 text-xl font-bold">
        Pengaturan
      </div>


      <div className="p-4">

        <div className="flex justify-between items-center py-4 border-b">
          <div>
            <div className="text-lg font-semibold">Tema Gelap</div>
            <div className="text-gray-500">
              Jika tidak on maka akan sesuai dengan sistem
            </div>
          </div>
          <label className="relative inline-block w-10 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={darkTheme}
              onChange={() => setDarkTheme(!darkTheme)}
            />
            <span className="block w-10 h-6 bg-gray-300 rounded-full shadow-inner"></span>
            <span
              className={`absolute w-4 h-4 bg-white rounded-full shadow transform transition ${
                darkTheme ? "translate-x-4" : "translate-x-0"
              }`}
            ></span>
          </label>
        </div>


        <div className="flex justify-between items-center py-4 border-b">
          <div>
            <div className="text-lg font-semibold">Unggah Riwayat ke Cloud</div>
            <div className="text-gray-500">
              Backup data Riwayat Transaksi ke Cloud
            </div>
          </div>
          <label className="relative inline-block w-10 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={uploadHistory}
              onChange={() => setUploadHistory(!uploadHistory)}
            />
            <span className="block w-10 h-6 bg-gray-300 rounded-full shadow-inner"></span>
            <span
              className={`absolute w-4 h-4 bg-white rounded-full shadow transform transition ${
                uploadHistory ? "translate-x-4" : "translate-x-0"
              }`}
            ></span>
          </label>
        </div>


        <div className="flex justify-between items-center py-4 border-b">
          <div>
            <div className="text-lg font-semibold">Unggah Data Item ke Cloud</div>
            <div className="text-gray-500">Backup data Item ke Cloud</div>
          </div>
          <label className="relative inline-block w-10 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={uploadItems}
              onChange={() => setUploadItems(!uploadItems)}
            />
            <span className="block w-10 h-6 bg-gray-300 rounded-full shadow-inner"></span>
            <span
              className={`absolute w-4 h-4 bg-white rounded-full shadow transform transition ${
                uploadItems ? "translate-x-4" : "translate-x-0"
              }`}
            ></span>
          </label>
        </div>


        <div className="flex justify-between items-center py-4 border-b">
          <div>
            <div className="text-lg font-semibold">Fitur Pro</div>
            <div className="text-gray-500">
              Mengaktifkan fitur Pro harus tersambung dengan admin
            </div>
          </div>
          <label className="relative inline-block w-10 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={proFeature}
              onChange={() => setProFeature(!proFeature)}
            />
            <span className="block w-10 h-6 bg-gray-300 rounded-full shadow-inner"></span>
            <span
              className={`absolute w-4 h-4 bg-white rounded-full shadow transform transition ${
                proFeature ? "translate-x-4" : "translate-x-0"
              }`}
            ></span>
          </label>
        </div>


        <div className="py-4 border-b">
          <div className="text-lg font-semibold">Bersihkan Cache</div>
        </div>


        <div className="py-4 border-b">
          <div className="text-lg font-semibold">Akun</div>
          <div className="text-gray-500">Kyuma</div>
        </div>

 
        <div className="flex justify-center mt-6">
          <button
          onClick={() => window.location.href = 'Login'}  
          className="bg-white text-orange-500 border border-orange-500 px-4 py-2 rounded-md mr-2">
            KELUAR AKUN
          </button>
          <button 
          onClick={() => window.location.href = 'Riwayat'} 
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
            KEMBALI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pengaturan;
