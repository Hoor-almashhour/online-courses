import Link from 'next/link'
import React from 'react'
import Image from "next/image"; 
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
     <footer className="bg-gray-100">
      <div className="container mx-auto flex flex-wrap justify-between gap-8 py-16 px-6 md:px-0">
        <div className="w-full md:w-auto">
          <div className="pb-8">
            <Image src="/Img/LOGO.webp" alt="logo" width={163} height={30}  
            />
          </div>
          <p className="max-w-xs text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* GET HELP */}
        <ul className="flex flex-col gap-6 text-gray-600">
          <h4 className="text-lg font-semibold mb-2">GET HELP</h4>
          <li><Link href="/Contact" className="hover:text-orange-500">Contact Us</Link></li>
          <li><Link href="#" className="hover:text-orange-500">Latest Articles</Link></li>
          <li><Link href="/FAQs" className="hover:text-orange-500">FAQ</Link></li>
        </ul>

        {/* PROGRAMS */}
        <ul className="flex flex-col gap-6 text-gray-600">
          <h4 className="text-lg font-semibold mb-2">PROGRAMS</h4>
          <li><Link href="#" className="hover:text-orange-500">Art & Design</Link></li>
          <li><Link href="#" className="hover:text-orange-500">Business</Link></li>
          <li><Link href="#" className="hover:text-orange-500">IT & Software</Link></li>
          <li><Link href="#" className="hover:text-orange-500">Languages</Link></li>
          <li><Link href="#" className="hover:text-orange-500">Programming</Link></li>
        </ul>

        {/* CONTACT US */}
        <ul className="flex flex-col gap-6 text-gray-600">
          <h4 className="text-lg font-semibold mb-2">CONTACT US</h4>
          <li>
            <p className="max-w-xs">Address: 2321 New Design Str, Lorem Ipsum, 10 Hudson Yards, USA</p>       
          </li>
          <li className="flex flex-col">
            <Link href="#" className="hover:text-orange-500">Tel: + (123) 2500-567-8988</Link>
            <Link href="#" className="hover:text-orange-500">Mail: supportlms@gmail.com</Link>
          </li>
          <li className="flex gap-3">
            <Link href="#" className="text-gray-600 hover:text-orange-500"> <FaFacebook /></Link>
            <Link href="#" className="text-gray-600 hover:text-orange-500"> <FaPinterest /></Link>
            <Link href="#" className="text-gray-600 hover:text-orange-500"><FaTwitter /></Link>
            <Link href="#" className="text-gray-600 hover:text-orange-500"> <FaInstagram /></Link>
            <Link href="#" className="text-gray-600 hover:text-orange-500"> <FaYoutube /></Link>
          </li>
        </ul>
      </div>

      <p className="text-center py-8 text-gray-600">
        Copyright © 2024 LearnPress LMS | Powered by ThimPress
      </p>
    </footer>
  )
}

export default Footer