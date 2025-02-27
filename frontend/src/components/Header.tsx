import logo from '../assets/logo.png'
import { SignInModal } from './modal/SignIn'

function Header() {
  return (
    <header className="bg-[#56066a] h-[100px] p-10 flex flex-row justify-between items-center">
        <div className="ml-10">
            <img 
                src={logo} 
                alt="UnibenBuy Logo" 
                className="h-[40px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
            />
        </div>
        <div className="mr-10 flex flex-row items-center gap-3">
            <nav className="text-white flex flex-row items-center">
                <ul className="flex flex-row items-center gap-3 font-bold text-[18px]">
                    <li><SignInModal /></li>
                    <span className="pointer-events-none select-none cursor-not-allowed">|</span>
                    <li><a href="#" className="hover:text-[#df8714] ease-in-out duration-200">Register</a></li>
                </ul>
            </nav>
            <button className="bg-[#df8714] text-white px-12 py-2 border-0 Sell ml-5 hover:bg-[#f18933] transition-colors duration-200">
                <a href="#" className="text-[18px]">SELL</a>
            </button>
        </div>
    </header>
  )
}

export default Header