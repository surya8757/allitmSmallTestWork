import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Form from './component/Form';
import Login from './component/Login';
import Footer from './component/Footer';
import DataTable from './component/Data/DataTable';
import Hooks from './component/Hooks';



const App=()=> {
  return (
    <>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Hooks/>}/>
        <Route path="data" element={<DataTable/>}/> 
        <Route path="signUp" element={<Form/>}/>
        <Route path="signIn" element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App