import React from 'react';
import { Link } from 'react-router-dom';

const Riwayat = () => {
    const transactions = [
        { time: "23:55", date: "22/05/2024", amount: "RP 72.000" },
        { time: "23:35", date: "22/05/2024", amount: "RP 12.000" },
        { time: "23:30", date: "22/05/2024", amount: "RP 50.000" },
        { time: "23:00", date: "22/05/2024", amount: "RP 20.000" },
        { time: "22:56", date: "22/05/2024", amount: "RP 23.000" },
        { time: "22:39", date: "22/05/2024", amount: "RP 40.000" },
        { time: "22:22", date: "22/05/2024", amount: "RP 22.500" },
        { time: "22:01", date: "22/05/2024", amount: "RP 72.000" },
        { time: "21:54", date: "22/05/2024", amount: "RP 42.500" },
        { time: "21:54", date: "22/05/2024", amount: "RP 55.000" },
    ];

    return (
        
          <div className="flex flex-col h-screen">
            <header className="bg-orange-500 text-white flex justify-around py-4">
                <a className="font-bold" href="Kasir">KASIR</a>
                <a className="font-bold" href = "Tambahitem">TAMBAH ITEM</a>
                <a className="font-bold tab-active border-b-4 border-white" href = "Riwayat">Riwayat</a>
            </header>
            <div className="p-4">
                {transactions.map((transaction, index) => (
                    <div key={index} className="flex justify-between items-center border-b py-4">
                        <div>
                            <div className="text-gray-500">TOTAL</div>
                            <div className="text-orange-500 text-xl font-bold">{transaction.amount}</div>
                            <div className="text-gray-500">{transaction.time} &nbsp; {transaction.date}</div>
                        </div>
                        <div>
                            <i className="fas fa-check-circle text-green-500 text-2xl"></i>
                        </div>
                    </div>
                ))}
            </div>
            <div className="fixed bottom-4 right-4">
                <i
                onClick={() => window.location.href = 'Pengaturan'}  
                className="fas fa-cog text-orange-500 text-4xl cursor-pointer"></i>
            </div>
        </div>
        
    );
}

export default Riwayat;