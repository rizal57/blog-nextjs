import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [bgNav, setBgNav] = useState('bg-gray-900');
  const dropdownList = [
    {text: 'Internet', href: '/internet'},
    {text: 'Books', href: '/books'},
    {text: 'Open Source', href: '/open-source'},
  ]

  const menuRef = useRef();
  const buttonDropdownRef = useRef();

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if(e.target !== menuRef.current && e.target !== buttonDropdownRef.current) {
        setDropdown(false);
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 0) {
        setBgNav('bg-gray-900/70 backdrop-blur-md border-b border-gray-600');
      } else {
        setBgNav('bg-gray-900')
      }
    })
  },[])

  return (
    <nav className={`py-8 sticky top-0 z-50 ${bgNav}`}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className='left-side flex items-center'>
            <div className='logo mr-8'>
              <div className='w-10 h-10 font-bold rounded-full bg-gray-600 flex items-center justify-center shadow-2xl shadow-gray-700'>
                B
              </div>
            </div>
            <div>
              <ul className='flex items-center gap-8'>
                <li>
                  <a href='#' className="nav-link">
                    UI Design
                  </a>
                </li>
                <li>
                  <a href='#' className="nav-link">
                    Front End
                  </a>
                </li>
                <li>
                  <a href='#' className="nav-link">
                    Back End
                  </a>
                </li>
                <li className='relative'>
                  <button
                    ref={buttonDropdownRef}
                    className="nav-link outline-none"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    Lainnya
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-chevron-down transition-all duration-300 ${dropdown && 'rotate-180'}`} viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </button>
                  <ul ref={menuRef} className={`absolute transition-all duration-300 visible translate-y-0 opacity-100 ${!dropdown && 'invisible translate-y-20 opacity-0'} overflow-hidden rounded-lg w-52 bg-gray-800 shadow-xl mt-3`}>
                    {dropdownList.map((list) => (
                      <li key={list.text}>
                        <Link
                          href={list.href}
                          className='flex items-center transition-all duration-300 cursor-pointer py-3 px-6 hover:bg-gray-700 border-b border-b-gray-700 last:border-none'
                        >
                          {list.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className='right-side'>
            <div className="search">
              <input
                type="text"
                className='py-1 px-4 pl-9 rounded-full bg-gray-800 placeholder:text-gray-600 bg-search outline-none focus:outline-gray-500 duration-300'
                placeholder='Search...'
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
