import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './App';
import ProjectDetailPage from './ProjectDetailPage';
import './index.css'; // kalau kamu pakai Tailwind / CSS global

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<Portfolio />} />

        {/* Dynamic route untuk semua project */}
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
