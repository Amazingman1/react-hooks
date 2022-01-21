import React from 'react'
import SideMenu from '../../compoents/sandBox/SideMenu'
import TopHeader from '../../compoents/sandBox/TopHeader'
import { Outlet} from 'react-router-dom'

export default function sandBox() {
  return (
    <div>
      <SideMenu></SideMenu>
      <TopHeader></TopHeader>
      <Outlet />
    </div>
  )
}
