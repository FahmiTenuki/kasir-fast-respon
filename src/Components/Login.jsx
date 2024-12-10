import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-orange-500">
            <div className="bg-orange-500 p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Masukkan email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Masukkan password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                             onClick={() => window.location.href = 'Riwayat'} 
                            className="bg-white hover:bg-orange-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        >
                            Login
                        </button>
                        
                        <a className="bg-white hover:bg-orange-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" href="Register">
                            Register
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;