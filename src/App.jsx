// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Mengimpor Navigate
import Logo from './Components/Logo';
import Login from './Components/Login';
import Register from './Components/Register';
import Kasir from './Components/Kasir';
import Tambahitem from './Components/Tambahitem';
import Riwayat from './Components/Riwayat';
import Stockbarang from './Components/Stockbarang';
import Pengaturan from './Components/Pengaturan';
import Berhasilditambahkan from './Components/Berhasilditambahkan';
import './index.css';


const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/Login" />} /> {/* Redirect ke Login saat mengakses "/" */}
                    <Route path="/Logo" element={<Logo />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Kasir" element={<Kasir />} />
                    <Route path="/Tambahitem" element={<Tambahitem />} />
                    <Route path="/Riwayat" element={<Riwayat />} />
                    <Route path="/Stockbarang" element={<Stockbarang />} />
                    <Route path="/Pengaturan" element={<Pengaturan />} />
                    {/* <Route path="/Berhasilditambahkan" element={<Berhasilditambahkan />} /> */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;