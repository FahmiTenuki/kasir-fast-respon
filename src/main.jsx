import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Pastikan jalur ini benar
import './index.css';


const container = document.getElementById('app');
if (container) {
    const root = createRoot(container);
    root.render(<App tab="Kasir" />);
} else {
    console.error("Target container is not a DOM element.");
}