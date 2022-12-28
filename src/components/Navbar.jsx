import logo from "../assets/convoLogo.svg";
import { useState } from "react";

const Items = ({title}) => (
    <a href="/">{title}</a>
)

const Navbar = () => {
    return ( 
        <div className="flex items-center p-8 px-9 border-b border-b-[#C8C8C8]">
            <img src={logo} alt="logo" className="w-[6rem] cursor-pointer"/>
            <div className="m-auto text-[#717172] md:flex hidden font-bold flex gap-[4rem]">
                {["Solutions" , "Pricing" , "Company" , "Help"].map((item , index) => (
                    <Items key={item + index} title={item}/>
                ))}
                {/* <a href="">Solutions</a>
                <a href="">Pricing</a>
                <a href="">Company</a>
                <a href="">Help</a> */}
            </div>
            <div className="hidden">
                <button className="p-1.5 px-5 text-[#717172]">Log in</button>
                <button className="p-1.5 px-5 text-[#FFFFFF] bg-[#1070FF] rounded">Sign up</button>
            </div>
        </div>
     );
}
 
export default Navbar;