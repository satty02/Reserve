import React, { useState } from 'react'
import dateBar from '../assets/date_bar.png'
import star from '../assets/star.svg'
import Seats from './Seats';

function BusList() {

    const [viewSeats, setViewSeats] = useState(false);

    const handleViewSeats = ()=>{
        setViewSeats(!viewSeats);
    }

    return (
        <>
            <div className="absolute top-[192px] left-[318px] shadow-[10px_20px_4px_#000] w-[1043px] h-[114px] text-sm">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white"/>
                <div className="absolute h-[20.18%] w-[23.78%] top-[5.26%] left-[3.55%] text-5xl leading-[27.5px] font-medium inline-block">
                    IntrCity Smart Bus
                </div>
                <div className="absolute h-[7.89%] w-[24.54%] top-[34.21%] left-[3.55%] text-2xs leading-[27.5px] font-light flex items-center">
                    A/C Sleeper (2+1) | 24 seats left | 0 windows left
                </div>
                <div className="absolute h-[7.89%] w-[3.55%] top-[15.79%] left-[26.17%] text-2xs leading-[27.5px] font-extralight flex items-center">
                    Ratings
                </div>
                <a href='/liveTracking' className=" absolute h-[10.53%] w-[10.16%] top-[80.7%] left-[3.55%] leading-[27.5px] text-mediumslateblue flex items-center">
                    Live Tracking
                </a>
                <a href='photos' className="absolute h-[11.27%] w-[7.65%] top-[80.28%] left-[14.38%] leading-[27.5px] text-mediumslateblue flex items-center">
                    Photos
                </a>
                <a href='amenities' className="absolute h-[11.27%] w-[7.65%] top-[80.28%] left-[22.04%] leading-[27.5px] text-mediumslateblue flex items-center">
                    Amnities
                </a>
                <a href='review' className="absolute h-[11.27%] w-[7.65%] top-[80.28%] left-[30.19%] leading-[27.5px] text-mediumslateblue flex items-center">
                    Reviews
                </a>
                <div className="absolute h-[22.81%] w-[56.86%] top-[42.11%] left-[3.55%] text-xl leading-[27.5px] flex items-center">
                    {`22:45 , 16 NOV ----------- 07 hrs 59 min ----------- 06:20, 17 NOV `}</div>
                <div className="absolute h-[100.88%] w-[0.1%] top-[-0.44%] right-[20.37%] bottom-[-0.44%] left-[79.53%] box-border border-r-[1px] border-solid border-black"/>
                <div className="absolute w-[8.92%] top-[5.26%] left-[85.71%] text-mini leading-[27.5px] text-center inline-block">
                    Trip Cost
                </div>
                <div className="absolute w-[8.92%] top-[42.11%] left-[85.71%] text-xl leading-[27.5px] text-center inline-block">
                    899₹
                </div>
                <div className="absolute w-[8.92%] top-[21.93%] left-[85.71%] text-xs leading-[27.5px] font-light text-center inline-block">
                    Starting From
                </div>

                <button onClick={handleViewSeats} className="absolute h-[22.81%] w-[8.92%] top-[67.54%] left-[85.81%] text-xs rounded-l-10xs leading-[27.5px] text-white text-center inline-block bg-orangered">
                    View Seats
                </button>

                <img className="absolute h-[24.56%] w-[2.68%] top-[5.26%] right-[74.05%] bottom-[70.18%] left-[23.27%] max-w-full overflow-hidden max-h-full" alt="" src={star}/>
                <div className="absolute h-[5.26%] w-[1.05%] top-[15.79%] left-[23.97%] text-7xs leading-[27.5px] font-light text-center flex items-center justify-center">
                    4.5
                </div>
                <div className="absolute h-[14.04%] w-[14.67%] top-[63.16%] left-[3.55%] text-smi leading-[27.5px] text-gray flex items-center">
                    Santacruz Road, Mumbai
                </div>
                <div className="absolute h-[14.04%] w-[12.27%] top-[64.91%] left-[41.71%] text-smi leading-[27.5px] text-gray flex items-center">
                    Bosari,Pune
                </div>
            </div>
                       
            <img className="absolute top-[114px] left-[311px] w-[1050px] h-16 object-cover" alt=""
                src={dateBar}/>

            {viewSeats ?<Seats/> :null }
        </>
    )
}

export default BusList
