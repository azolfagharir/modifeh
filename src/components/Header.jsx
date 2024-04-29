
import React from "react";


function Header(){

    return(
        <>
    <div>
        <p className=" absolute right-4 top-4">Alex Fergosen</p>
    <svg className=" absolute right-32 top-3" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="56" height="56" rx="28" fill="#FD633D"/>
            <path d="M28 46.3334C38.1252 46.3334 46.3333 38.1252 46.3333 28C46.3333 17.8748 38.1252 9.66669 28 9.66669C17.8748 9.66669 9.66666 17.8748 9.66666 28C9.66666 38.1252 17.8748 46.3334 28 46.3334Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.6667 31.6667C20.6667 31.6667 23.4167 35.3333 28 35.3333C32.5833 35.3333 35.3333 31.6667 35.3333 31.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.5 22.5H22.5191" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M33.5 22.5H33.5191" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    <img src="/envelope.jpg" className="absolute top-5 w-8 right-56" alt="envelope" />
    <img src="/bell.png" className="absolute w-8 top-6 right-72" alt="bell" />
    
    <form method="POST" className="absolute top-6 left-96">
        <input type="text" className="rounded-full border-2 w-searchBox  " placeholder="  Search" />
    </form>

    </div>

        </>
    )
}

export default Header;