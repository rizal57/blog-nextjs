import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Container from "./Container";
import { HiMenuAlt1, HiSearch } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [bgNav, setBgNav] = useState('bg-gray-900');
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const menuRef = useRef();
  const buttonDropdownRef = useRef();

  const dropdownList = [
    { text: 'Internet', href: '/internet' },
    { text: 'Books', href: '/books' },
    { text: 'Open Source', href: '/open-source' },
  ]

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open])

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target !== menuRef.current && e.target !== buttonDropdownRef.current) {
        setDropdown(false);
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setBgNav('bg-gray-900/70 backdrop-blur-md border-b border-gray-600');
      } else {
        setBgNav('bg-gray-900')
      }
    })
  }, [])

  return (
    <nav className={`h-20 flex items-center sticky top-0 z-50 ${bgNav}`}>
      <Container>
        <div className="flex items-center justify-between">
          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <HiMenuAlt1 className="w-6 h-6" />
          </button>
          <div className='flex items-center justify-center'>
            <Link href={'/'} className='w-10 h-10 lg:mr-8 font-bold rounded-full bg-gray-600 flex items-center justify-center shadow-2xl shadow-gray-700'>
              B
            </Link>
            <div className={`lg:bg-transparent bg-gray-900 lg:static absolute ${open ? 'left-0' : '-left-full'} lg:w-auto w-full top-0 lg:h-auto h-screen lg:py-0 py-16 lg:pl-0 pl-10 transition-all duration-300`}>
              <button className="absolute top-8 right-8 lg:hidden" onClick={() => setOpen(false)}>
                <AiOutlineCloseCircle className="w-7 h-7" />
              </button>

              <ul className='flex flex-col lg:flex-row lg:items-center gap-8'>
                <li>
                  <Link href='/posts' className="nav-link">
                    UI Design
                  </Link>
                </li>
                <li>
                  <Link href='/posts' className="nav-link">
                    Front End
                  </Link>
                </li>
                <li>
                  <Link href='/posts' className="nav-link">
                    Back End
                  </Link>
                </li>
                <li className='relative'>
                  <button
                    ref={buttonDropdownRef}
                    className="nav-link outline-none w-full"
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
                          href={`/posts/${list.href}`}
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
              <button
                className="lg:hidden"
                onClick={() => setOpenSearch(!openSearch)}
              >
                { openSearch ? <AiOutlineCloseCircle className="w-7 h-7" /> : <HiSearch className="w-6 h-6" /> }
              </button>
              <input
                type="text"
                className={`${openSearch ? 'visible top-[86px] shadow-lg' : 'lg:visible invisible -top-full'} lg:static absolute left-1/2 lg:translate-x-0 -translate-x-1/2 w-10/12 lg:w-64 h-10 lg:block py-1 px-4 pl-9 rounded-full bg-gray-800 placeholder:text-gray-600 bg-search outline-none focus:outline-gray-500 transition-all duration-300`}
                placeholder='Search...'
              />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
