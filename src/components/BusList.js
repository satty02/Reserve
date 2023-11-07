import React, { useEffect, useState } from 'react';
import star from '../assets/star.svg';
import Seats from './Seats';
import axios from 'axios';
import DatePicker from './APIcalls.js/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import viewSeatsAction from '../state/Action/ViewSeatsAction';
const time = require('./scripts/RandomTime');
const journeyHours = require('./scripts/RandomHours');

function BusList() {
    const dispatch = useDispatch();
    let viewSeats = useSelector((state) => state.viewSeats);
    const [listOfBus, setListOfBus] = useState([]);
    const startDate = useSelector((state)=>state.selectDate);

    const from = useSelector(state=>state.selectDistrictFrom)
    const to = useSelector(state=>state.selectDistrictTo)
 
    var originalDate = new Date(startDate);

    var options = { day: '2-digit', month: 'short' };
    var formattedDate = originalDate.toLocaleDateString('en-US', options);

                const endDate =  journeyHours.map((hrs,index)=>{        
                const date = startDate+'T'+time[index]

                            // Original date and time
                const originalDate = new Date(date);
                const timeToAdd = hrs;

                // Extract hours and minutes from the timeToAdd
                const [hoursToAdd, minutesToAdd] = timeToAdd.split(':').map(Number);

                // Add the hours and minutes to the original date
                originalDate.setHours(originalDate.getHours() + hoursToAdd);
                originalDate.setMinutes(originalDate.getMinutes() + minutesToAdd);

                // Format the date in the desired format
                const formatter = new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
                });

                const formattedDate = formatter.format(originalDate);

                return formattedDate
        });


    // getting the data from trips collection
    const getData = async () => {
        const response = await axios.get('http://localhost:8080/trips');
        setListOfBus(response.data);
    }
    const handleViewSeats = () => {
        dispatch(viewSeatsAction(!viewSeats));
    }

    useEffect(() => {
        getData()
    
        const handleClickOutside = (event) => {
            console.log("Click event detected");
    
            if (viewSeats) {
                console.log("View Seats is true");
                // Check if the click target is not inside the "Seats" component
                if (event.target && !event.target.closest(".seats-container")) {
                    console.log("Click is outside Seats");
                    dispatch(viewSeatsAction(false));
                }
            }
        };
    
        document.addEventListener("click", handleClickOutside);
    
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [viewSeats, dispatch]);
    return (
        <div className=''>
            <ul className={`relative seats-container overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-gray-950 scrollbar-track-gray-300  top-[192px] left-[20.5%] shadow-inherit w-[1043px]  text-sm bg-inherit flex flex-col gap-3 ${
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
                                        {bus.name}
                                    </h2>
                                    <div className="relative">
                                        <img placeholder='hello' className=" h-[30px] w-[30px]" alt="" src={star} />
                                        <p className="absolute text-[10px] top-[-1%] left-[25%] text-white">{bus.rating}</p>
                                    </div>
                                </div>

                                <div className=" text-2xs  font-light px-2">
                                    {bus.category || `Seater`} | {bus.totalSeats} seats left
                                </div>

                                <div className="  text-xl  px-2">
                                    {`${formattedDate}, ${time[index]} ----------- ${journeyHours[index]} hours ----------- ${endDate[index]} `}</div>

                                <div className='flex flex-row justify-between gap-[330PX] px-2 text-gray-950'>
                                    <div className="  text-smi  text-gray ">
                                        {from}
                                    </div>
                                    <div className="  text-smi  text-gray ">
                                        {to}
                                    </div>
                                </div>
                                {
                                    bus && bus.animeties ? <ul className=' h-[10.53%] w-fit px-2  text-mediumslateblue flex gap-4'>
                                        {bus.animeties.map((list, index) => (<li key={index}><a href={`/${list}`} className="">
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
                                    ₹ 699
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

            <div className=''>
                {viewSeats && <Seats />}
            </div>
        </div>
    )
}

export default BusList;
