import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../views/login/index'
import SendBox from '../views/sandBox/sandBox'
import Home from '../views/sandBox/home/home'
import UserManageList from '../views/sandBox/user-manage-list/userManageList'
export default function IndexRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<SendBox />}>
          <Route path='/home' element={<Home />} />
          <Route path='/user-manage/list' element={<UserManageList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
// react-router-dom V6的话直接使用element={1?<NewsSandBox />:0},直接使用三元表达式即可lement