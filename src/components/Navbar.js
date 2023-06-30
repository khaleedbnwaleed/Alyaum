import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'

const CustomMobileLink = ({ title, href, className = '', toggle }) => {
  const handleClick = () => {
    toggle()
  }
  return (
    <button onClick={handleClick}>
      <a className={`${className} cursor-pointer relative group`} href={href}>
        {title}
      </a>
    </button>
  )
}
const CustomLink = ({ title, href, className = '' }) => {
  return (
    <a className={`${className} cursor-pointer relative group`} href={href}>
      {title}
    </a>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="flex w-full justify-between items-center relative text-light p-8 md:p-6 px-12 md:px-6">
      <div className="text-light">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={150} height={150} />
        </Link>
      </div>
      <div className="flex items-center font-semibold text-lg md:hidden">
        <CustomLink
          title="Home"
          href="/"
          className="mr-3 hover:text-secondary"
        />
        <CustomLink
          title="About"
          href="#about"
          className="mx-3 hover:text-secondary"
        />
        <CustomLink
          title="Services"
          href="#services"
          className="mx-3 hover:text-secondary"
        />
        <CustomLink
          title="Products"
          href="#products"
          className="ml-3 hover:text-secondary"
        />
      </div>
      <button
        className="md:flex hidden flex-col items-center justify-center cursor-pointer"
        onClick={handleClick}
      >
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>
      {isOpen ? (
        <div className="min-w-[70vw] flex flex-col items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
          <nav className="flex flex-col items-center justify-center gap-y-4">
            <CustomMobileLink
              title="Home"
              href="/"
              className="hover:text-secondary"
              toggle={handleClick}
            />
            <CustomMobileLink
              title="About"
              href="#about"
              className="hover:text-secondary"
              toggle={handleClick}
            />
            <CustomMobileLink
              title="Services"
              href="#services"
              className="hover:text-secondary"
              toggle={handleClick}
            />
            <CustomMobileLink
              title="Products"
              href="#products"
              className="hover:text-secondary"
              toggle={handleClick}
            />
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
