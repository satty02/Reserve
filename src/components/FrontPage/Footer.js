import React from 'react'
import ig1 from '../../assets/ig.png'
import twitter from '../../assets/twitter.jpg';
import fb from '../../assets/fb.png'
import logo2 from '../../assets/logo.png'

function Footer() {
  return (
    <>
        <div className="absolute top-[724px] left-[0px] w-full h-[300px] text-sm">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white"/>
                <div className="absolute h-[9.33%] w-[16.88%] top-[88.67%] left-[46.6%] leading-[27.5px] inline-block">
                    All rights reserved - 2023
                </div>
                <div className="absolute h-[9.33%] w-[6.81%] top-[62.67%] left-[63.13%] leading-[27.5px] inline-block">
                    Blogs
                </div>
                <div className="absolute w-3/12 top-[68.33%] left-[1.74%] text-xl leading-[27.5px] inline-block">
                    reserve.bus@reserve.com
                </div>
                <div className="absolute w-3/12 top-[34.33%] left-[1.94%] text-xl leading-[27.5px] inline-block">
                    Reserve offers bus tickets booking through its website, IOS and
                                androids mobile apps for all major cities.
                </div>
                <div className="absolute h-[9.33%] w-[6.81%] top-[52%] left-[63.13%] leading-[27.5px] inline-block">
                    Privacy Policy
                </div>
                <div className="absolute h-[9.33%] w-[5.35%] top-[33.33%] left-[63.13%] leading-[27.5px] inline-block">
                    FAQ
                </div>
                <div className="absolute h-[9.33%] w-[5.35%] top-[42.67%] left-[63.13%] leading-[27.5px] inline-block">
                    {`T  & C`}</div>
                <img className="absolute top-[24px] left-[18px] w-[159px] h-8 object-cover" alt="" src={logo2}/>
                <div className="absolute h-[9.33%] w-[4.03%] top-[22.33%] left-[63.13%] leading-[27.5px] inline-block">
                    Careers
                </div>
                <div className="absolute h-[9.33%] w-[5.35%] top-[34.33%] left-[52.29%] leading-[27.5px] inline-block">
                    Contact us
                </div>
                <div className="absolute h-[9.33%] w-[4.03%] top-[23.33%] left-[52.29%] leading-[27.5px] inline-block">
                    About us
                </div>
                <div className="absolute w-3/12 top-[18.67%] left-[1.74%] text-xl leading-[27.5px] inline-block">
                    When you have choice. Choose Reserve.
                </div>
                <div className="absolute w-[6.04%] top-[11.67%] left-[52.29%] text-xl leading-[27.5px] font-extralight inline-block [-webkit-text-stroke:1px_#000]">
                    About
                </div>
                <div className="absolute w-[7.43%] top-[11.67%] left-[62.99%] text-xl leading-[27.5px] font-extralight font-roboto-flex inline-block [-webkit-text-stroke:1px_#000]">
                    Useful Link
                </div>
                <div className="absolute w-[7.43%] top-[11.67%] left-[75.07%] text-xl leading-[27.5px] font-tomorrow inline-block [-webkit-text-stroke:1px_#000]">
                    Follow us
                </div>
                <img className="absolute top-[75px] left-[1078px] w-7 h-7 object-cover" alt="" src={ig1}/>
                <img className="absolute top-[78px] left-[1152px] w-[42px] h-[22px] object-cover" alt="" src={twitter}/>
                <img className="absolute top-[75px] left-[1106px] w-[46px] h-7 object-cover" alt="" src={fb}/>
                <div className="absolute top-[258.5px] left-[27.5px] box-border w-[1384px] h-px border-t-[1px] border-dashed border-black"/>
            </div>
    </>
  )
}

export default Footer