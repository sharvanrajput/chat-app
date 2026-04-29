import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const AdminLogin = () => {

  const [key, setKey] = useState()


  const submitHandler = (e) => {
    e.preventDefault()
    console.log("submit")
  }

  const isAdmin = true
  if (isAdmin) return <Navigate to="/admin/dashboard" />

  return (
    <div className="flex h-screen flex-1 justify-center items-center">

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className={"text-2xl text-center"} >Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Secreat key</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Secreat key"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  required
                />
                {/* {errors.email && (
                  <p className="text-red-500">{errors.email}</p>
                )} */}
              </div>

              <div className="flex-col gap-2">
                <Button type="submit" className="w-full">
                  Login
                </Button>

              </div>
            </div>
          </form>
        </CardContent>
      </Card>

    </div>
  )
}

export default AdminLogin
