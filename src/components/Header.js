import React, { useState } from 'react';
import logo from '../assets/logo.png'
import profile from '../assets/profile.png'

function Header() {

  const [login, setLogin] = useState(false)

  return (
    <>
          {/* Logo */}
          <div className="absolute top-[0px] left-[0px] w-full h-[108px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"/>
                <img className="absolute top-[23px] left-[0px] w-[485px] h-[77px] object-cover" alt=""
                    src={logo}/>
            </div>
            {/* Buttons */}
            <button className="absolute top-[35px] left-[689px] w-[126px] h-[54px] rounded-xl text-xl">Contact us</button>
            <button className="absolute top-[35px] left-[512px] w-[126px] h-[54px] rounded-xl text-xl">Ticket</button>
            {
              login ?
            <>
              <button className="absolute top-[35px] left-[1017px] w-[136px] h-[54px] bg-orangered text-center rounded-xl text-xl">Login</button>
              <button className="absolute top-[35px] left-[1197px] w-[150px] h-[54px] rounded-lg font-semiboldbold text-xl">Register</button>
            </>
            :
            <div className="absolute top-[48px] left-[1236px] w-[145px] h-7 text-13xl">
              <div className="absolute w-full top-[0%] left-[0%] leading-[27.5px] inline-block">
                My Profile
              </div>
              <img
                className="absolute top-[calc(50%_-_25px)] left-[-67px] w-[50px] h-[50px] object-cover"
                alt=""
                src={profile}
              />
            </div>
}
    </>
  )
}

export default Header