// Desc: Navigation bar component
import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>
            <ul className="max-lg:hidden flex flex-1 justify-center items-center gap-6 padding-r ">
                <li className="font-montserrat leading-normal text-lg text-slate-gray">Home</li>
                <li className="font-montserrat leading-normal text-lg text-slate-gray">About Us</li>
                <li className="font-montserrat leading-normal text-lg text-slate-gray">Products</li>
                <li className="font-montserrat leading-normal text-lg text-slate-gray">Contact Us</li>
            </ul>
            <div className="hidden max-lg:block" href="/">
                <img src={hamburger} alt="menu" height={25} width={25}/>
            </div>
        </nav>
    </header>
    )
}

export default Nav