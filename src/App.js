import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes/Routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} />
    </div>
  );
}

export default App;