import React, { useState } from 'react'
import { Button } from "@/components/ui/button"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Camera } from 'lucide-react'
import z from 'zod'


const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters")
})


const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 Characters"),
  email: z.string().email(3, "Invalid email"),
  password: z.string().min(6, "Password must be at least 6 Characters"),
  conpassword: z.string(),
}).refine((data) => data.password === data.conpassword, {
  message: "Password do not match",
  path: ["conpassword"]
})


export default function Login() {

  const [login, setLogin] = useState(false)
  const [profile, setProfile] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    conpassword: "",
  })

  const [errors, setErrors] = useState({})

  const inputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const schema = login ? loginSchema : registerSchema
    const reseult = schema.safeParse(formData)

    if (!reseult.success) {
      const fieldErrors = {}
      reseult.error.issues.forEach((err) => {
        fieldErrors[err.path[0]] = err.message
      })
      setErrors(fieldErrors)
    } else {
      setErrors({})
      console.log(formData)
      setFormData({
    name: "",
    email: "",
    password: "",
    conpassword: "",
  })
    }
  }


  const toggleLogin = () => { setLogin(prev => !prev) }


  return (
    <div className='flex h-screen flex-1 justify-center items-center' >

      {login ?
        (<Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>

          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={inputChange}
                    required
                  />
                  {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={inputChange}
                    type="password"
                    required
                  />
                  {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>
                <div className="flex-col gap-2">
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                  <Button onClick={toggleLogin} variant="outline" className="w-full">
                    Register instud
                  </Button>
                </div>
              </div>

            </form>
          </CardContent>

        </Card>) :
        (<Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Register your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} >
              <div className="flex flex-col gap-6">
                <div className="grid gap-2 place-content-center">
                  <Avatar className={"size-25 relative"} >
                    <AvatarImage className={"object-contain"} src={profile ? URL.createObjectURL(profile) : "https://github.com/shadcn.png"} />
                    <AvatarFallback>CN</AvatarFallback>
                    <Label htmlFor="profile" className='cursor-pointer active:scale-90 bg-gray-200 size-10 flex justify-center items-center rounded-full -bottom-2 -right-2 absolute  '>
                      <Camera />
                    </Label>
                    <Input
                      type={"file"}
                      className={"hidden"}
                      name={"profile"}
                      onChange={(e) => setProfile(e.target.files[0])}
                      id="profile"
                    />
                  </Avatar>

                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="name"
                    name="name"

                    value={formData.name}
                    onChange={inputChange}
                    required
                  />
                </div>
                {errors.name && <p className="text-red-500">{errors.name}</p>}
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={inputChange}
                    required
                  />
                  {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={inputChange}
                    required
                  />
                  {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="conpassword">Conform Password</Label>
                  <Input
                    id="conpassword"
                    type="conpassword"
                    name="conpassword"
                    value={formData.conpassword}
                    onChange={inputChange}
                    required
                  />
                  {errors.conpassword && <p className="text-red-500">{errors.conpassword}</p>}
                </div>
                <div className="flex-col gap-2">
                  <Button type="submit" className="w-full">
                    Register
                  </Button>
                  <Button onClick={toggleLogin} variant="outline" className="w-full">
                    Login instud
                  </Button>
                </div>
              </div>

            </form>
          </CardContent>

        </Card>)
      }




    </div>
  )
}
