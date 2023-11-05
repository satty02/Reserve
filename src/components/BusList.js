import React, { useEffect, useState } from 'react';
import star from '../assets/star.svg';
import Seats from './Seats';
import axios from 'axios';
import DatePicker from './APIcalls.js/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import viewSeatsAction from '../state/Action/ViewSeatsAction';

function BusList() {
    const dispatch = useDispatch();
    const viewSeats = useSelector((state) => state.viewSeats);
    const [listOfBus, setListOfBus] = useState([]);

    const handleRootClick = () => {
        if (viewSeats) {
            dispatch(viewSeatsAction(false));
        }
    }

    // getting the data from trips collection
    const getData = async () => {
        const response = await axios.get('http://localhost:8080/trips');
        setListOfBus(response.data);
    }

    const handleViewSeats = () => {
        dispatch(viewSeatsAction(!viewSeats));
    }

    useEffect(() => {
        getData();

        document.addEventListener('click', handleRootClick);

        return () => {
            document.removeEventListener('click', handleRootClick);
        }

    }, [])

    return (
        <div onClick={handleRootClick}>
            <ul className={`relative top-[192px] left-[20.5%] shadow-inherit w-[1043px] h-[114px] text-sm bg-white flex flex-col gap-3 ${
                viewSeats ? 'blur-background' : ''
            }`}>
                {listOfBus.map((bus, index) => (
                    <>
                        <li key={index} className={`bg-white flex flex-row h-full p-3 rounded-4xs shadow-2xl shadow-black justify-between ${
                            viewSeats ? 'blur-background' : ''
                        }`}>
                            <div className='flex flex-col gap-[0.30rem] justify-between items-start ml'>

                                {/* Bus Name and Ratings */}
                                <div className='flex flex-row gap-4 items-center h-[20%] px-2'>
                                    <h2 className="font-medium ">
                                        {bus.busName}
                                    </h2>
                                    <div>
                                        <img placeholder='hello' className=" h-[20px] w-[20px]" alt="" src={star} />
                                    </div>
                                </div>

                                <div className=" text-2xs  font-light px-2">
                                    {bus.category} | {38 - bus && bus.SeatBooked ? bus.SeatBooked.length : 0} seats left
                                </div>

                                <div className="  text-xl  px-2">
                                    {`${bus.startTime} ----------- ${bus.EndTime - bus.startTime} ----------- ${bus.EndTime} `}</div>

                                <div className='flex flex-row justify-between gap-4 px-2'>
                                    <div className="  text-smi  text-gray ">
                                        {bus.from}
                                    </div>
                                    <div className="  text-smi  text-gray ">
                                        {bus.to}
                                    </div>
                                </div>
                                {
                                    bus && bus.animeties_list ? <ul className=' h-[10.53%] w-fit px-2  text-mediumslateblue flex gap-4'>
                                        {bus.animeties_list.map((list, index) => (<li key={index}><a href={`/${list}`} className="">
                                            {list}
                                        </a></li>))}
                                    </ul> :
                                        <ul className=' h-[10.53%] w-fit px-2  text-mediumslateblue flex gap-4'>
                                            <li key={index}>loading</li>
                                        </ul>

                                }
                            </div>

                            <div className=' flex flex-row  justify-evenly  w-[30%]'>
                                <div className=" max-h-full w-[0.1%]  box-border border-r-[1px] border-solid border-black" />
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <div className=" w-full  text-mini  text-center inline-block">
                                        Trip Cost
                                    </div>
                                    <div className=" w-full  text-xs  font-light text-center inline-block">
                                        Starting From
                                    </div>
                                    <div className=" w-full  text-xl  text-center inline-block">
                                        {bus.busFare}₹
                                    </div>

                                    <button onClick={handleViewSeats} className="  w-full  text-xs rounded-l-10xs  text-white text-center inline-block bg-orangered">
                                        View Seats
                                    </button>
                                </div>
                            </div>
                        </li>
                    </>
                ))}

            </ul>

            <DatePicker />

            <div>
                {viewSeats && <Seats />}
            </div>
        </div>
    )
}

export default BusList;
