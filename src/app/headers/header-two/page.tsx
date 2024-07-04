"use client";



import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define TypeScript types
interface NavItem {
  id: number;
  title: string;
  url: string;
}

const navData: NavItem[] = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'About', url: '/about' },
  { id: 3, title: 'Services', url: '/services' },
  { id: 4, title: 'Contact', url: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const currentRoute = usePathname();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-md w-full top-0 left-0">
      <nav className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 ">
        <div className="font-bold text-2xl cursor-pointer flex items-center">
          <Link href={'/'}>
            <div className="font-bold text-2xl text-amber-500">LOGO</div>
          </Link>
        </div>

        <div className="text-3xl absolute right-2 top-2 cursor-pointer md:hidden">
          <button
            className="focus:outline-none w-8 h-8 overflow-hidden"
            onClick={handleClick}
          >
            <span
              className={`bg-black transition-all duration-300 ease-in-out block h-0.5 w-6 ${
                isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}
            ></span>
            <span
              className={`bg-black transition-all duration-300 ease-in-out block h-0.5 w-6 my-0.5 ${
                isOpen ? '-translate-x-5 opacity-0' : 'translate-x-0 opacity-100'
              }`}
            ></span>
            <span
              className={`bg-black transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm ${
                isOpen ? ' -rotate-45 -translate-y-1' : 'translate-y-1'
              }`}
            ></span>
          </button>
        </div>

        <ul
          className={`w-[90%] h-screen md:w-auto md:h-auto bg-white pb-12 absolute md:flex md:items-center md:pb-0 md:static md:pl-0 pl-9 transition-all duration-500 ease ${
            isOpen ? 'left-0' : '-left-full'
          }`}
        >
          {navData.map((link) => (
            <li
              key={link.id}
              onClick={() => setIsOpen(false)}
              className="md:ml-8 text-md md:my-0 my-7"
            >
              <Link href={link.url}>
                <div
                  className={`${
                    currentRoute === link.url
                      ? 'text-gray-500 bg-gray-700 rounded-full p-2'
                      : ' text-black'
                  }`}
                >
                  {link.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
