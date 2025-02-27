import logo from '../assets/logo.png'
import { Twitter, Facebook, Instagram } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa' // You'll need to install react-icons

function Footer() {
  return (
    <footer className='bg-[#310639] h-[690px] p-10 flex flex-col justify-between'>
      <div className='flex flex-row justify-between flex-1'>
        {/* Left Column */}
        <div className="mt-10 ml-10 flex-1 flex flex-col gap-6">
          <div>
            <img 
              src={logo} 
              alt="UnibenBuy Logo" 
              className='h-[40px] cursor-pointer hover:opacity-90 transition-opacity duration-200'
            />
          </div>
          
          {/* Sub-columns container */}
          <div className=" mt-12 flex gap-20">
            {/* About Us section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-xl font-bold mb-2 select-none pointer-events-none">
                About Us
              </h3>
              <div className="flex flex-col gap-3 text-white">
                <a href="#" className="hover:text-[#df8714] transition-colors duration-200">
                  About UnibenBuy
                </a>
                <a href="#" className="hover:text-[#df8714] transition-colors duration-200">
                  Terms and Conditions
                </a>
              </div>
            </div>

            {/* Support section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-xl font-bold mb-2 select-none pointer-events-none">
                Support
              </h3>
              <div className="flex flex-col gap-3 text-white">
                <a href="#" className="hover:text-[#df8714] transition-colors duration-200">
                  Safety Tips
                </a>
                <a href="#" className="hover:text-[#df8714] transition-colors duration-200">
                  Contact Us
                </a>
                <a href="#" className="hover:text-[#df8714] transition-colors duration-200">
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 mt-[418px] mr-20 flex flex-col items-end">
          <h3 className="text-white text-xl font-bold mb-6 tracking-wider select-none pointer-events-none">
            CONNECT WITH US
          </h3>
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-white hover:text-[#df8714] transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-[#df8714] transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-[#df8714] transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-[#df8714] transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full text-center mt-auto">
        <p className="text-white/60 text-sm">
          © 2025 unibenbuy.com. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer