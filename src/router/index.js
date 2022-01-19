import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../views/login/index'
import SendBox from '../views/sandBox/sandBox'
export default function IndexRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<SendBox />} />
      </Routes>
    </BrowserRouter>
  )
}
// react-router-dom V6的话直接使用element={1?<NewsSandBox />:0},直接使用三元表达式即可lement