import logo from "../assets/convoLogo.svg"

const Navbar = () => {
    return ( 
        <div className="flex items-center p-6 px-7 border border-b-[#C8C8C8]">
            <img src={logo} alt="logo" className="w-[6rem]"/>
            <div className="m-auto text-[#717172] font-bold flex gap-[4rem]">
                <a href="">Solutions</a>
                <a href="">Pricing</a>
                <a href="">Company</a>
                <a href="">Help</a>
            </div>
            <div className="">
                <button className="p-1.5 px-5 text-[#717172]">Log in</button>
                <button className="p-1.5 px-5 text-[#FFFFFF] bg-[#1070FF] rounded">Sign up</button>
            </div>
        </div>
     );
}
 
export default Navbar;