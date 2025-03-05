import logo from '../assets/logo.png'
import { SignInModal } from './modal/SignIn'
import { Link, useLocation } from 'react-router-dom'
import { Search } from 'lucide-react'
import profile from '../assets/profile.png'

function Header() {
  const location = useLocation()
  const isUserPage = location.pathname === '/userpage'
  const isRegisterPage = location.pathname === '/register'
  const isProductPage = location.pathname === '/Product'
  const isSellerPage = location.pathname === '/sellerpage'
  const showSearchBar = isRegisterPage || isProductPage || isSellerPage

  return (
    <header className={`bg-[#56066a] h-[100px] p-10 flex flex-row justify-between items-center
      ${showSearchBar ? 'shadow-lg' : ''}`}>
      <div className="ml-10">
        <Link to="/">
          <img 
            src={logo} 
            alt="UnibenBuy Logo" 
            className="h-[40px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
          />
        </Link>
      </div>

      {showSearchBar && (
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-12 pl-4 pr-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#56066a] bg-white"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      )}

      {isSellerPage ? (
        <div className="mr-10">
          <button className="bg-[#ffa500] text-white px-12 py-2 border-0 text-[18px] hover:bg-[#f18933] transition-colors duration-200">
            SELL
          </button>
        </div>
      ) : isUserPage ? (
        <div className="mr-10">
          <Link to="/sellerpage">
            <img 
              src={profile} 
              alt="Profile" 
              className="h-[50px] w-[50px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
            />
          </Link>
        </div>
      ) : !isUserPage && !isSellerPage && (
        <div className="mr-10 flex flex-row items-center gap-3">
          <nav className="text-white flex flex-row items-center">
            <ul className="flex flex-row items-center gap-3 font-bold text-[18px]">
              <li><SignInModal /></li>
              <span className="pointer-events-none select-none cursor-not-allowed">|</span>
              <li>
                <Link 
                  to="/register" 
                  className="hover:text-[#df8714] ease-in-out duration-200"
                >
                  Register
                </Link>
              </li>
            </ul>
          </nav>
          <button className="bg-[#ffa500] text-white px-12 py-2 border-0 Sell ml-5 hover:bg-[#f18933] transition-colors duration-200">
            <Link to="#" className="text-[18px]">SELL</Link>
          </button>
        </div>
      )}
    </header>
  )
}

export default Header