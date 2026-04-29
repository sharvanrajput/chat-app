import React from 'react'
import { SidebarProvider } from '../ui/sidebar'
import AdminSidebar from '../AdminSidebar'
import Header from './Header'
import { Navigate } from 'react-router-dom'

export default function AdminLayout(WrappedComponent) {
  return (props) => {
    const isAdmin = true
    if (!isAdmin) return <Navigate to="/admin" />

    return (
      <SidebarProvider>
        <AdminSidebar />
        <main className="w-full">
          <Header />
          <WrappedComponent {...props} />
        </main>
      </SidebarProvider>
    )
  }
}