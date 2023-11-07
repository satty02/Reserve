import { useState } from "react";
import Payments from "../PaymentSection/Payments";

const Seats = () => {
    const [ur1, setUr1] = useState(new Array(7).fill(false));
    const [ur2, setUr2] = useState(new Array(7).fill(false));
    const [ur3, setUr3] = useState(new Array(5).fill(false));
    const [lr1, setLr1] = useState(new Array(7).fill(false));
    const [lr2, setLr2] = useState(new Array(7).fill(false));
    const [lr3, setLr3] = useState(new Array(5).fill(false));

    const handleClickSeats = (e) => {
        const seatValue = e.target.value;
        const name = e.target.name;
        console.log('hello')
        if (name === "ur1") {
            setUr1((prevUr1) => {
                const updatedUr1 = [...prevUr1];
                updatedUr1[seatValue] = !updatedUr1[seatValue];
                return updatedUr1;
            });
        } else if (name === "ur2") {
            setUr2((prevUr2) => {
                const updatedUr2 = [...prevUr2];
                updatedUr2[seatValue] = !updatedUr2[seatValue];
                return updatedUr2;
            });
        } else if (name === "ur3") {
            setUr3((prevUr3) => {
                const updatedUr3 = [...prevUr3];
                updatedUr3[seatValue] = !updatedUr3[seatValue];
                return updatedUr3;
            });
        } else if (name === "lr1") {
            setLr1((prevLr1) => {
                const updatedLr1 = [...prevLr1];
                updatedLr1[seatValue] = !updatedLr1[seatValue];
                return updatedLr1;
            });
        } else if (name === "lr2") {
            setLr2((prevLr2) => {
                const updatedLr2 = [...prevLr2];
                updatedLr2[seatValue] = !updatedLr2[seatValue];
                return updatedLr2;
            });
        } else if (name === "lr3") {
            setLr3((prevLr3) => {
                const updatedLr3 = [...prevLr3];
                updatedLr3[seatValue] = !updatedLr3[seatValue];
                return updatedLr3;
            });
        }
    };


    return (
        <div className="relative left-[20%] top-[16%] shadow-2xl shadow-black bg-gainsboro w-[1043px] h-[242px] p-3">
           
           {/* seat layuts */}
            <div className="absolute top-[2%] left-[10%] w-[429px] h-[106px] p-2 bg-white rounded-4xs shadow-inner shadow-black">
                <div className="absolute h-[16.04%] w-[16.08%] top-[82.08%] left-[2.1%] inline-block [transform:_rotate(-90deg)] [transform-origin:0_0]">
                    Upper Berth
                </div>

                {/* upper row1 */}
                <div className="absolute top-[8%] left-[11%] grid grid-cols-7 gap-2" >
                {ur1.map((isSelected, index) => (
                        <div key={index} className={`w-[49px] h-[18px] flex rounded-4xs shadow-md shadow-black`}>
                            <button
                                onClick={handleClickSeats}
                                className={`shadow-md shadow-slate-700 border-y-gray-50 h-full w-full ${isSelected ? 'bg-lightcoral' : 'bg-gray-300'}`}
                                name="ur1"
                                value={index}
                            ></button>
                            <div className="absolute shadow-md shadow-black ml-10 top-[0.12rem] rounded-12xs bg-white w-[5px] h-3.5" />
                        </div>
                    ))}
                </div>

                {/* upper row-2 */}
                <div className="absolute top-[32%] left-[11%]  grid grid-cols-7 gap-2">
                    {ur2.map((isSelected, index) => (
                            <div key={index} className={`w-[49px] shadow-md shadow-black h-[18px] flex rounded-4xs`}>
                                <button
                                    onClick={handleClickSeats}
                                    className={`shadow-md shadow-slate-700 border-y-gray-50 h-full w-full ${isSelected ? 'bg-lightcoral' : 'bg-gray-300'}`}
                                    name="ur2"
                                    value={index}
                                ></button>
                                <div className="shadow-sm shadow-black absolute ml-10 top-[0.12rem] rounded-12xs bg-white w-[5px] h-3.5" />
                            </div>
                        ))}
                </div>

                {/* upper row-3 */}
                <div className="absolute top-[75%] left-[162px]  grid grid-cols-5 gap-2 ">
                    {ur3.map((isSelected, index) => (
                            <div key={index} className={`w-[49px] h-[18px] flex rounded-4xs shadow-sm shadow-black`}>
                                <button
                                    onClick={handleClickSeats}
                                    className={`h-full w-full shadow-md shadow-slate-700 border-y-gray-50 ${isSelected ? 'bg-lightcoral' : 'bg-gray-300'}`}
                                    name="ur3"
                                    value={index}
                                ></button>
                                <div className="absolute ml-10 shadow-sm shadow-black top-[0.12rem] rounded-12xs bg-white w-[5px] h-3.5" />
                            </div>
                        ))}
                </div>
            </div>

            <div className="absolute top-[52%] left-[10%] w-[429px] h-[106px] p-2 bg-white rounded-4xs shadow-inner shadow-black">
                <div className="absolute h-[16.04%] w-[16.08%] top-[82.08%] left-[2.1%] inline-block [transform:_rotate(-90deg)] [transform-origin:0_0]">
                    Lower Berth
                </div>

                {/* lower row-1 */}
                <div className="absolute top-[8%] left-[11%]  grid grid-cols-7 gap-2">
                    {lr1.map((isSelected, index) => (
                            <div key={index} className={`w-[49px] h-[18px] flex rounded-4xs shadow-md shadow-black`}>
                                <button
                                    onClick={handleClickSeats}
                                    className={`h-full w-full shadow-slate-700 border-y-gray-50 ${isSelected ? 'bg-lightcoral' : 'bg-gray-300'}`}
                                    name="lr1"
                                    value={index}
                                ></button>
                                <div className="absolute ml-10 shadow-sm shadow-black top-[0.12rem] rounded-12xs bg-white w-[5px] h-3.5" />
                            </div>
                        ))}
                </div>

                {/* lower row-2 */}
                <div className="absolute top-[32%] left-[11%]  grid grid-cols-7 gap-2">
                    {lr2.map((isSelected, index) => (
                            <div key={index} className={`w-[49px] h-[18px] flex rounded-4xs shadow-md shadow-black`}>
                                <button
                                    onClick={handleClickSeats}
                                    className={`h-full w-full shadow-slate-700 border-y-gray-50 ${isSelected ? 'bg-lightcoral' : 'bg-gray-300'}`}
                                    name="lr2"
                                    value={index}
                                ></button>
                                <div className="absolute ml-10 shadow-sm shadow-black top-[0.12rem] rounded-12xs bg-white w-[5px] h-3.5" />
                            </div>
                        ))}
                </div>

                    {/* lower row-3 */}
                <div className="absolute top-[75%] left-[162px]  grid grid-cols-5 gap-2">
                    {lr3.map((isSelected, index) => (
                            <div key={index} className={`w-[49px] h-[18px] flex rounded-4xs shadow-sm shadow-black`}>
                                <button
                                    onClick={handleClickSeats}
                                    className={`h-full w-full shadow-md shadow-slate-700 border-y-gray-50 ${isSelected ? 'bg-lightcoral' : 'bg-gray-300'}`}
                                    name="lr3"
                                    value={index}
                                ></button>
                                <div className="absolute ml-10 shadow-sm shadow-black top-[0.12rem] rounded-12xs bg-white w-[5px] h-3.5" />
                            </div>
                        ))}
                </div>
            </div>
            
            {/* Filter seats */}
            <div className="absolute h-[1.66%] w-full top-[4%] left-[1%] text-m font-medium inline-block">
                Select Seats
            </div>

            <div className="absolute top-[14%] left-[1%] w-[83px] h-[119px] text-center bg-white shadow-2xl">
                <div className="absolute h-[14.29%] top-[5.04%] left-[calc(50%_-_28.5px)] text-xs font-light inline-block w-[58px]">
                    Seat Price
                </div>
                <div className="absolute top-[25px] left-[0%] rounded-4xs bg-gainsboro ml-[0.40rem] w-[70px] h-[19px] flex flex-row justify-between align-middle">
                    <input className="ml-3 "  id="All" type="checkbox"/>
                    <label className="mr-4" htmlFor="All">All</label>
                </div>
                <div className="absolute top-[47px] left-[0%] rounded-4xs bg-gainsboro ml-[0.40rem] w-[70px] h-[19px] flex flex-row justify-between align-middle">
                    <input className="ml-3 " id="699" type="checkbox"/>
                    <label className="mr-4" htmlFor="699">699</label>
                </div>
                <div className="absolute top-[70px] left-[0%] rounded-4xs bg-gainsboro ml-[0.40rem] w-[70px] h-[19px] flex flex-row justify-between align-middle">
                    <input className="ml-3 " id="899" type="checkbox"/>
                    <label className="mr-4" htmlFor="899">899</label>
                </div>
                <div className="absolute top-[93px] left-[0%] rounded-4xs bg-gainsboro ml-[0.40rem] w-[70px] h-[19px] flex flex-row justify-between align-middle">
                    <input className="ml-3 " id="1199" type="checkbox"/>
                    <label className="mr-4" htmlFor="1199">1199</label>
                </div>
            </div>

            {/* Available seats */}
            <div className="absolute top-[65%] left-[1%] w-[83px] h-[78px] text-center text-5xs shadow-2xl">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white"/>
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

            <div className="absolute top-[6%] left-[53.5%] bg-white w-[241px] h-[229px] shadow-2xl">
                <div className=" absolute h-full w-full top-[2%] text-base text-center font-medium ">Boarding & Dropping</div>
                <div className="absolute h-[1.66%] w-full top-[25%] left-[10%] text-mini inline-block">
                    Mumbai
                </div>
                <div className="absolute h-[1.66%] w-full top-[18%] left-[10%] font-medium text-gray-100 inline-block">
                    Santacruz Road
                </div>
                <div className="absolute h-[1.66%] w-[3.4%] top-[20%] left-[80%] text-base font-medium text-center inline-block">
                    22:45
                </div>
                <div className="absolute h-[1.66%] w-[4.44%] top-[54%] left-[10%] text-mini inline-block">
                    Pune
                </div>
                <div className="absolute h-[1.66%] w-[7.64%] top-[47%] left-[10%] font-medium text-gray-100 inline-block">
                    Bosari
                </div>
                <div className="absolute h-[1.66%] w-[3.4%] top-[49%] left-[80%] text-base font-medium text-center inline-block">
                    6:20
                </div>
                <div className="absolute h-[1.66%] w-full top-[72%] left-[10%] text-mini inline-block">
                    Seat No.
                </div>
                <div className="absolute h-[1.66%] w-[3.4%] top-[72%] left-[80%] text-base font-medium text-center inline-block">
                    7
                </div>
                <img className="absolute bg-gray-500 top-[25%] left-[4%] w-0.5 h-[59.02px]" alt="" src="/line-3.svg"/>
                <img className="absolute bg-black top-[13%] left-[5%] w-[212px] h-[1.98px]" alt="" src="/line-4.svg"/>
                <img className="absolute bg-black top-[68%] left-[5%] w-[212px] h-[1.98px]" alt="" src="/line-5.svg"/>
                <img className="absolute bg-black top-[25%] left-[3%] w-2 h-2 rounded-[50%] " alt="" src="/ellipse-5.svg"/>
                <img className="absolute bg-black top-[50%] left-[3%] w-2 h-2 rounded-[50%] " alt="" src="/ellipse-5.svg"/>

            </div>
            
            {/* Proceed to payments */}

            <Payments/>
        </div>
    );
};

export default Seats;