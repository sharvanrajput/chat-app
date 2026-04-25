import React from 'react'
import { SidebarProvider } from '../ui/sidebar'
import AdminSidebar from '../AdminSidebar'
import Header from './Header'

export default function AdminLayout(WrappedComponent) {
  return (props) => {
    return <>
      <SidebarProvider
      >
        <AdminSidebar />
        <main className="w-full">
          <Header />
          <WrappedComponent {...props} />
        </main>
      </SidebarProvider>
    </>
  }
}