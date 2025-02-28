import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import logo from '../../assets/logo.png'
import Header from '../Header'
import { SignInModal } from './SignIn'

export function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Registration attempt:', formData)
  }

  return (
    <div className="min-h-screen bg-[#56066a] pb-16">
      <Header />

      {/* Logo */}
      <div className="flex justify-center mt-8">
        <img 
          src={logo} 
          alt="UnibenBuy Logo" 
          className="h-[40px]"
        />
      </div>

      {/* Registration Form */}
      <div className="max-w-[720px] mx-auto mt-8 bg-white rounded-xl shadow-md">
        <div className="p-8">
          <div className="w-[600px] mx-auto mb-6">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
              Create An Account
            </h2>
            <div className="w-full h-[1px] bg-gray-200"></div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 w-[600px] mx-auto">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                required
                className="h-12"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
                className="h-12"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#2aa41a] hover:bg-[#238916] h-12 text-lg font-semibold mt-6 text-white"
            >
              Create Account
            </Button>

            <p className="text-sm text-gray-600 text-center mt-4">
              By registering you accept our{' '}
              <a href="#" className="text-[#df8714] hover:underline">
                terms and conditions
              </a>
            </p>
          </form>
        </div>

        {/* Sign In Section - Full width */}
        <div className="w-full p-6 bg-[#e7e7e7] rounded-b-xl">
          <div className="text-center space-y-4">
            <p className="text-gray-600">Already have an account?</p>
            <div className="inline-block">
              <SignInModal isRegisterPage={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register