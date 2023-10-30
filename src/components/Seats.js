import { useState } from "react";

const Seats = () => {

    const [selectSeat , setSelectSeat] = useState(false);

    const handleClickSeats = () =>{
        setSelectSeat(!selectSeat);
    }   

    return (
        <>
           
           {/* seat layuts */}
            <div className="absolute top-[324px] left-[318px] bg-gainsboro w-[1043px] h-[242px]"/>
            <div className="absolute top-[329px] left-[418px] w-[429px] h-[106px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"/>
                <div className="absolute h-[16.04%] w-[16.08%] top-[82.08%] left-[2.1%] inline-block [transform:_rotate(-90deg)] [transform-origin:0_0]">
                    Upper Berth
                </div>
            </div>
            <div className="absolute top-[454px] left-[418px] w-[429px] h-[106px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"/>
                <div className="absolute h-[16.04%] w-[16.08%] top-[82.08%] left-[2.1%] inline-block [transform:_rotate(-90deg)] [transform-origin:0_0]">
                    Lower Berth
                </div>
            </div>

            {/* Seats */}

            <div className="absolute top-[333px] left-[448px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[333px] left-[504px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[333px] left-[560px] bg-lightcoral shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[333px] left-[616px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[333px] left-[672px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[333px] left-[728px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[333px] left-[784px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>

            <div className="absolute top-[458px] left-[448px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[458px] left-[504px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[458px] left-[560px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[458px] left-[616px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[458px] left-[672px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[458px] left-[728px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[458px] left-[784px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>

            <div className="absolute top-[357px] left-[448px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[357px] left-[504px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[357px] left-[560px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[357px] left-[616px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[357px] left-[672px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[357px] left-[728px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[357px] left-[784px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>

            <div className="absolute top-[482px] left-[448px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[482px] left-[504px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[482px] left-[560px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[482px] left-[616px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[482px] left-[672px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[482px] left-[728px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[482px] left-[784px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            
            <div className="absolute top-[413px] left-[560px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[413px] left-[616px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[413px] left-[672px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[413px] left-[728px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[413px] left-[784px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>

            <div className="absolute top-[538px] left-[560px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[538px] left-[616px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[538px] left-[672px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[538px] left-[728px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            <div className="absolute top-[538px] left-[784px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[49px] h-[18px]">
                <button onClick={handleClickSeats} className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm ${selectSeat?'bg-lightcoral':'bg-gray-300'}`}></button>
                <div className="absolute top-[2px] left-[41px] rounded-12xs bg-white w-[5px] h-3.5"/>
            </div>
            
            {/* Filter seats */}
            <div className="absolute h-[1.66%] w-[6.88%] top-[32.13%] left-[21.57%] text-mini font-medium inline-block">
                Select Seats
            </div>
            <div className="absolute top-[351px] left-[333px] w-[65px] h-[119px] text-center text-2xs">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white"/>
                <div className="absolute h-[14.29%] top-[5.04%] left-[calc(50%_-_28.5px)] text-xs font-light inline-block w-[58px]">
                    Seat Price
                </div>
                <div className="absolute top-[25px] left-[calc(50%_-_25.5px)] rounded-sm bg-gainsboro w-[51px] h-[19px]">
                    <input id="All" type="checkbox"/>
                    <label htmlFor="All">All</label>
                </div>
                <div className="absolute top-[47px] left-[calc(50%_-_25.5px)] rounded-sm bg-gainsboro w-[51px] h-[19px]">
                    <input id="699" type="checkbox"/>
                    <label htmlFor="699">699</label>
                </div>
                <div className="absolute top-[70px] left-[calc(50%_-_25.5px)] rounded-sm bg-gainsboro w-[51px] h-[19px]">
                    <input id="899" type="checkbox"/>
                    <label htmlFor="899">899</label>
                </div>
                <div className="absolute top-[93px] left-[calc(50%_-_25.5px)] rounded-sm bg-gainsboro w-[51px] h-[19px]">
                    <input id="1199" type="checkbox"/>
                    <label htmlFor="1199">1199</label>
                </div>
            </div>

            {/* Available seats */}
            <div className="absolute top-[478px] left-[325px] w-[83px] h-[78px] text-center text-5xs">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white"/>
                <div className="absolute h-[15.13%] w-[43.08%] top-[78.15%] left-[36.92%] text-2xs hidden items-center justify-center">
                    1199
                </div>
                <div className="absolute h-[17.95%] w-[56.63%] top-[14.1%] left-[38.55%] flex items-center justify-center">
                    Available
                </div>
                <div className="absolute h-[17.95%] w-[56.63%] top-[41.03%] left-[38.55%] flex items-center justify-center">
                    Un-available
                </div>
                <div className="absolute h-[17.95%] w-[56.63%] top-[67.95%] left-[38.55%] flex items-center justify-center">
                    Female
                </div>
                <div className="absolute h-[17.95%] w-[32.53%] top-[14.1%] right-[62.65%] bottom-[67.95%] left-[4.82%] bg-white box-border border-[1px] border-solid border-black"/>
                <div className="absolute h-[17.95%] w-[32.53%] top-[41.03%] right-[62.65%] bottom-[41.03%] left-[4.82%] bg-gainsboro box-border border-[1px] border-solid border-black"/>
                <div className="absolute h-[17.95%] w-[32.53%] top-[67.95%] right-[62.65%] bottom-[14.1%] left-[4.82%] bg-lightcoral box-border border-[1px] border-solid border-black"/>
            </div>

            {/* Selections details */}

            <div className="absolute top-[331px] left-[868px] bg-white w-[241px] h-[229px]"/>
            <div className=" absolute h-[1.66%] w-[10.69%] top-[34.08%] left-[58.68%] text-base font-medium inline-block">
                {`Boarding & Dropping`}</div>
            <div className="absolute h-[1.66%] w-[4.44%] top-[37.21%] left-[58.15%] text-mini inline-block">
                Mumbai
            </div>
            <div className="absolute h-[1.66%] w-[7.64%] top-[39.16%] left-[58.15%] font-medium text-gray-100 inline-block">
                Santacruz Road
            </div>
            <div className="absolute h-[1.66%] w-[3.4%] top-[38.09%] left-[68.22%] text-base font-medium text-center inline-block">
                22:45
            </div>
            <div className="absolute h-[1.66%] w-[4.44%] top-[42.97%] left-[58.15%] text-mini inline-block">
                Pune
            </div>
            <div className="absolute h-[1.66%] w-[7.64%] top-[44.92%] left-[58.15%] font-medium text-gray-100 inline-block">
                Bosari
            </div>
            <div className="absolute h-[1.66%] w-[3.4%] top-[43.85%] left-[68.22%] text-base font-medium text-center inline-block">
                6:20
            </div>
            <div className="absolute h-[1.66%] w-[4.44%] top-[49.51%] left-[58.15%] text-mini inline-block">
                Seat No.
            </div>
            <div className="absolute h-[1.66%] w-[3.4%] top-[49.51%] left-[68.22%] text-base font-medium text-center inline-block">
                7
            </div>
            
            {/* Proceed to payments */}
            <img className="absolute top-[390px] left-[882px] w-0.5 h-[59.02px]" alt="" src="/line-3.svg"/>
            <img className="absolute top-[386px] left-[879px] w-2 h-[69px]" alt="" src="/ellipse-5.svg"/>
            <img className="absolute top-[497.02px] left-[882px] w-[212px] h-[1.98px]" alt="" src="/line-4.svg"/>
            <img className="absolute top-[530px] left-[882px] w-[212px] h-[1.98px]" alt="" src="/line-5.svg"/>

            <div className="absolute top-[334px] left-[1120px] rounded-[5px] bg-white w-[229px] h-[78px]"/>
            <div className="absolute h-[1.66%] w-[6.25%] top-[33.2%] left-[74.61%] text-base font-medium inline-block">
                Fare Details
            </div>
            <div className="absolute h-[1.66%] w-[7.64%] top-[35.06%] left-[74.61%] font-medium text-gray-100 inline-block">
                Amount
            </div>
            <div className="absolute h-[1.66%] w-[7.64%] top-[36.52%] left-[74.61%] text-[5px] font-medium text-gray-100 inline-block">
                {`Taxes will Be Calculated during Payments `}</div>
            <div className="absolute h-[1.66%] w-[6.46%] top-[35.06%] left-[82.46%] text-base font-medium text-center inline-block">
                INR. 750.00
            </div>
            <button className="absolute h-[1.56%] w-[6.25%] top-[38.09%] rounded-4xs left-[78.96%] text-2xs font-medium bg-orangered text-white text-center flex items-center justify-center">
                Proceed to Book
            </button>

            </>
    );
};

export default Seats;
