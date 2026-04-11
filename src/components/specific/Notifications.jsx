import { sampleNotifications } from '@/constants/sampleData'
import React from 'react'

export default function Notifications() {
  const noti = sampleNotifications
  return (
    <>

      { }

      {
        noti?.length === 0 ? (
          <div className="text-center p-4 text-gray-500">
            No notifications yet.
          </div>
        ) :
          noti?.map((ele) => (
          <>nofi</>
          ))
      }

    </>
  )
}

