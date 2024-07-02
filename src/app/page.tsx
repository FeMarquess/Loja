"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import Navbar from "./components/Navbar";
import Link from 'next/link';
import "./globals.css"

export default function Home() {

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex items-center align-center justify-between h-fit max-sm:px-20 px-44 max-sm:grid max-sm:grid-flow-row max-sm:auto-row-3 max-sm:items-center max-sm:align-center max-sm:justify-center">
        <Link href="" className="bg-slate-300 rounded-xl h-72 max-lg:h-24 w-72 max-lg:w-24 grid grid-flow-row auto-row-2 items-center align-center justify-center ">
          <div className='grid justify-center '>
            <FontAwesomeIcon icon={faBox} className='h-36 max-lg:h-12 w-36 max-lg:w-12 ' />
          </div>
          <div className="grid justify-center text-3xl max-md:text-xs">
            Estoque
          </div>
        </Link>
        <Link href="" className="bg-slate-300 rounded-xl h-72 max-lg:h-24 w-72 max-lg:w-24 grid grid-flow-row auto-row-2 items-center align-center justify-center ">
          <div className='grid justify-center '>
            <FontAwesomeIcon icon={faMedal} className='h-36 max-lg:h-12 w-36 max-lg:w-12 ' />
          </div>
          <div className="grid justify-center text-3xl max-md:text-xs">
            Estoque
          </div>
        </Link>
        <Link href="./produtos" className="bg-slate-300 rounded-xl h-72 max-lg:h-24 w-72 max-lg:w-24 grid grid-flow-row auto-row-2 items-center align-center justify-center ">
          <div className='grid justify-center '>
            <FontAwesomeIcon icon={faClipboardList} className='h-36 max-lg:h-12 w-36 max-lg:w-12 ' />
          </div>
          <div className="grid justify-center text-3xl max-md:text-xs">
            Adicionar
          </div>
        </Link>
      </div>
    </div>
  );
}
