"use client";

import Link from "next/link";
import { GiMoonBats } from "react-icons/gi";

export default function Navbar() {
    return (
        <nav className="bg-white border-gray-200 fixed w-full border-b z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <GiMoonBats className="w-10 h-10" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">LUNERA</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                        <li>
                        <a href="#home" className="nav-link" aria-current="page">Home</a>
                        </li>
                        <li>
                        <a href="#about" className="nav-link">About</a>
                        </li>
                        <li>
                        <a href="#pricing" className="nav-link">Pricing</a>
                        </li>
                        <li>
                        <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}