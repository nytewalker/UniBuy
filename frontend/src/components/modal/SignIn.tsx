import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Facebook } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'

export function SignInModal() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Sign in attempt:', { email, password })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-white hover:text-[#df8714] ease-in-out duration-200 font-bold text-[18px]">
          Sign In
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white w-[920px] h-[920px] mt-[358px] fixed top-0 left-1/2 -translate-x-1/2">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center mb-6">Login</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 w-[400px] mx-auto">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base">Email address or phone number</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-base">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-12"
            />
            <div className="flex justify-end">
              <a href="#" className="text-sm text-[#df8714] hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-[#2aa41a] hover:bg-[#238916] h-12 text-lg font-semibold mt-6"
          >
            Login
          </Button>

          <div className="relative mt-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">
                or
              </span>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <Button 
              type="button" 
              variant="outline" 
              className="w-1/2 h-12"
              onClick={() => console.log('Google login')}
            >
              <div className="mr-2 h-5 w-5">
                <FcGoogle />
              </div>
              Google
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              className="w-1/2 h-12"
              onClick={() => console.log('Facebook login')}
            >
              <Facebook className="mr-2 h-5 w-5 text-blue-600" />
              Facebook
            </Button>
          </div>
        </form>
        
        <div className="text-center mt-6">
          <span className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="text-[#df8714] hover:underline font-semibold">
              Register
            </a>
          </span>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SignInModal