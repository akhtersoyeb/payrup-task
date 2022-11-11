import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import './navbar.css'

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <img src="/svgs/logo.svg" alt='Logo' />
      </a>
      <button
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
        className="hamburger"
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul className='bg-white z-30'>
          <li>
            <a href='#' className='text-sm font-medium items-center gap-1 text-blue-500 hover:text-blue-600'>
              <span>Recharge & Bill Payments</span>
              <ChevronDownIcon className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a href='#' className='text-sm font-medium items-center gap-1 text-blue-500 hover:text-blue-600'>
              <span>Online Insurance</span>
            </a>
          </li>
          <li>
            <a href='#' className='text-sm font-medium items-center gap-1 text-blue-500 hover:text-blue-600'>
              <span>Banking</span>
            </a>
          </li>
          <li>
            <a href='#' className='text-sm font-medium items-center gap-1 text-blue-500 hover:text-blue-600'>
              <span>Fastag</span>
            </a>
          </li>
          <li>
            <a href='#' className='text-sm font-medium items-center gap-1 text-blue-500 hover:text-blue-600'>
              <span>More</span>
              <ChevronDownIcon className="w-5 h-5" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar