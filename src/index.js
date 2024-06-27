import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import App from './App';
import Books from "./components/Books";
import Book from "./components/Book"
import MainPage from "./components/MainPage"
import NotFound from "./components/NotFound"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}  >
          <Route path="/MainPage" element={<MainPage />} ></Route>
          <Route path="/Books" element={<Books />} >
            <Route path=":bookId" element={<Book/>} ></Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
