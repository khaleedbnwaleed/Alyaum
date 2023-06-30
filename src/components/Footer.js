import React from 'react'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons'

const Footer = () => {
  return (
    <footer className="p-8 text-light border-t border-solid border-light flex md:flex-col gap-y-4 items-center justify-between">
      <div className="text-light">
        <Image src={Logo} alt="AlyaumTech Logo" width={100} height={100} />
      </div>
      <div>
        <span>
          {new Date().getFullYear()} &copy;AlyaumTech All Rights Reserved.
        </span>
      </div>
      <div className="flex gap-x-6 items-center">
        <a
          href="hhtps://twitter.com/Y_Uthmaan"
          target={'_blank'}
          className="w-6 mr-3 sm:mx-1"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://github.com/Usmaniyya"
          target={'_blank'}
          className="w-6 mx-3 bg-dark rounded-full sm:mx-1"
        >
          <GithubIcon />
        </a>
        <a
          href="hhtps://linkedin.com"
          target={'_blank'}
          className="w-6 ml-3 sm:mx-1"
        >
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  )
}

export default Footer
