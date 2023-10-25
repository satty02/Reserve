import React, { useEffect, useState } from 'react'
import dateBar from '../assets/date_bar.png'
import star from '../assets/star.svg'
import Seats from './Seats';
import axios from 'axios';

function BusList() {

    const [viewSeats, setViewSeats] = useState(false);

    const [listOfBus, setListOfBus] = useState([]);


    // getting the data from trips collection
    const getData = async()=>{
        const response =await axios.get('http://localhost:8080/trips');
        setListOfBus(response.data);
    }

    const handleViewSeats = ()=>{
        setViewSeats(!viewSeats);
    }
    console.log(listOfBus)

    useEffect(()=>{
        getData()
    },[])

    return (
        <>
                <ul className='absolute top-[192px] left-[318px] shadow-[10px_20px_4px_#000] w-[1043px] h-[114px] text-sm bg-white flex flex-col gap-3'>
                    {listOfBus.map((bus,index)=>(
                        <li key={index} className=' bg-white flex flex-row'>
                            <div>
                                <div className="  text-5xl  font-medium ">
                                    {bus.busName}
                                </div>
                                <div className=" h-[7.89%] w-[24.54%] top-[34.21%] left-[3.55%] text-2xs leading-[27.5px] font-light flex items-center">
                                    {bus.category} | {38-bus && bus.SeatBooked ? bus.SeatBooked.length:0} seats left
                                </div>
                                <div className=" h-[7.89%] w-[3.55%] top-[15.79%] left-[26.17%] text-2xs leading-[27.5px] font-extralight flex items-center">
                                    Ratings
                                </div>
                                
                                <div className=" h-[22.81%] w-[56.86%] top-[42.11%] left-[3.55%] text-xl leading-[27.5px] flex items-center">
                                    {`${bus.startTime} ----------- ${bus.EndTime-bus.startTime} ----------- ${bus.EndTime} `}</div>
                                <div className=" h-[14.04%] w-[19.67%] top-[63.16%] left-[3.55%] text-smi leading-[27.5px] text-gray flex items-center">
                                    {bus.from}
                                </div>
                                <div className=" h-[14.04%] w-[19.27%] top-[64.91%] left-[41.71%] text-smi leading-[27.5px] text-gray flex items-center">
                                    {bus.to}
                                </div>
                                {
                                    bus && bus.animeties_list ? <ul className=' h-[10.53%] w-fit top-[80.7%] left-[3.55%] leading-[27.5px] text-mediumslateblue flex gap-4'>
                                    {bus.animeties_list.map((list,index)=>(<li key={index}><a href={`/${list}`} className="">
                                    {list}
                                </a></li>))}
                                </ul> :
                                <ul className=' h-[10.53%] w-fit top-[80.7%] left-[3.55%] leading-[27.5px] text-mediumslateblue flex gap-4'>
                                    <li key={index}>loading</li>))
                                </ul>

                                } 
                                <img className="absolute h-[24.56%] w-[2.68%] top-[5.26%] right-[74.05%] bottom-[70.18%] left-[23.27%] max-w-full overflow-hidden max-h-full" alt="" src={star}/>
                                <div className="absolute h-[5.26%] w-[1.05%] top-[15.79%] left-[23.97%] text-7xs leading-[27.5px] font-light text-center flex items-center justify-center">
                                    4.5
                                </div>
                            </div>
                            

                            <div className='absolute left-[80%] flex flex-row gap-8'>
                                <div className=" h-[114px] w-[0.1%]  box-border border-r-[1px] border-solid border-black"/>
                                <div className='flex flex-col'>
                                    <div className=" w-full  text-mini leading-[27.5px] text-center inline-block">
                                        Trip Cost
                                    </div>
                                    <div className=" w-full  text-xl leading-[27.5px] text-center inline-block">
                                        {bus.busFare}₹
                                    </div>
                                    <div className=" w-full  text-xs leading-[27.5px] font-light text-center inline-block">
                                        Starting From
                                    </div>
                                    <button onClick={handleViewSeats} className=" h-full w-full  text-xs rounded-l-10xs leading-[27.5px] text-white text-center inline-block bg-orangered">
                                        View Seats
                                    </button>
                                </div>
                                
                            </div>
                            

                            
                            
                        </li>
                    ))}
                </ul>

            
                       
            <img className="absolute top-[114px] left-[311px] w-[1050px] h-16 object-cover" alt=""
                src={dateBar}/>

            {viewSeats ?<Seats/> :null }
        </>
    )
}

export default BusList
