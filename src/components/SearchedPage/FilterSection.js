import React from 'react'

function FilterSection() {
    return (
        <>
            <div className="absolute top-[115px] left-[48px] rounded-[60px] w-44 h-8 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.5)] bg-gainsboro">
                <button className="bg-inherit absolute h-[56.25%] border-gainsboro top-[21.88%] left-[6.82%] font-medium flex items-center">
                    Filter
                </button>
                <button className="bg-inherit absolute h-[56.25%] border-gainsboro top-[21.88%] left-[55%] leading-[27.5px] font-medium flex items-center">
                    Clear All
                </button>
            </div>

            <div className="absolute top-[153px] left-[48px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.5)] text-xs w-44 h-[89px] bg-gainsboro">
                <p className="absolute h-[28.44%] w-full top-[-13%] left-[3%] text-mini font-semibold ">Departure Time</p>
                <div className="absolute h-[16.51%] w-full top-[28.44%] left-3  leading-[27.5px] flex items-center ">
                    <input id='morning' type='checkbox'/>
                    <label className='ml-3' htmlFor='morning' >Morning Session</label> 
                </div>
                
                <div className="absolute h-[16.51%] w-full top-[50.46%] left-3  leading-[27.5px] flex items-center">
                    <input id='afternoon' type='checkbox'/>
                    <label className='ml-3' htmlFor='afternoon' >Afternoon Session</label> 
                </div>
                <div className="absolute h-[16.51%] w-full top-[72.48%] left-3  leading-[27.5px] flex items-center">
                    <input id='evening' type='checkbox'/>
                    <label className='ml-3' htmlFor='evening' >Evening Session</label> 
                </div>
            </div>

            <div className="absolute top-[248px] left-[48px] w-44 h-[89px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.5)] text-xs bg-gainsboro">
                <p className="absolute h-[28.44%] w-full top-[-16%] left-3 text-mini font-semibold flex items-center">
                    Arrival Time
                </p>
                <div className="absolute h-[16.51%] w-full top-[28.44%] left-3 leading-[27.5px] flex items-center">
                    <input id='morning' type='checkbox'/>
                    <label className='ml-3' htmlFor='morning' >Morning Session</label> 
                </div>
                <div className="absolute h-[16.51%] w-full top-[50.46%] left-3 leading-[27.5px] flex items-center">
                    <input id='afternoon' type='checkbox'/>
                    <label className='ml-3' htmlFor='afternoon' >Afternoon Session</label> 
                </div>
                <div className="absolute h-[16.51%] w-full top-[72.48%] left-3 leading-[27.5px] flex items-center">
                    <input id='evening' type='checkbox'/>
                    <label className='ml-3' htmlFor='evening' >Evening Session</label> 
                </div>
            </div>
            
            <div className="absolute top-[629px] left-[48px] w-44 h-[90px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.5)] text-xs bg-gainsboro">
                <p className="absolute h-[28.44%] w-[58.52%] top-[-16%] left-[3.98%] text-mini leading-[27.5px] font-semibold ">
                    Bus Operator
                </p>
                <select className="absolute top-[26%] left-[12px] rounded-10xs bg-white w-[149px] h-[18px]">
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Kolkata</option>
                </select>
                <div className="absolute h-[16.51%] w-[67.61%] top-[50.46%] left-3 flex items-center">
                     <input id='mumbai' type='checkbox'/>
                    <label className='ml-3' htmlFor='mumbai' >mumbai</label> 
                </div>
                <div className="absolute h-[16.51%] w-[67.61%] top-[72.48%] left-3 flex items-center">
                    <input id='bangalore' type='checkbox'/>
                    <label className='ml-3' htmlFor='bangalore' >bangalore</label> 
                </div>
                
            </div>

            <div className="absolute top-[438px] left-[48px] w-44 h-[90px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.5)] text-xs bg-gainsboro">
                <p className="absolute h-[28.44%] w-[58.52%] top-[-16%] left-[3.98%] text-mini leading-[27.5px] font-semibold flex items-center">
                    Drop Points
                </p>
                <select className="absolute top-[26%] left-[12px] rounded-10xs bg-white w-[149px] h-[18px]">
                    <option>Mumbai</option>
                    <option>delhi</option>
                    <option>bangalore</option>
                </select>
                <div className="absolute h-[16.51%] w-[67.61%] top-[50.46%] left-3 leading-[27.5px] flex items-center">
                    <input id='delhi' type='checkbox'/>
                    <label className='ml-3' htmlFor='delhi' >delhi</label> 
                </div>
                <div className="absolute h-[16.51%] w-[67.61%] top-[72.48%] left-3 leading-[27.5px] flex items-center">
                    <input id='mumbai' type='checkbox'/>
                    <label className='ml-3' htmlFor='mumbai' >mumbai</label> 
                </div>
                
            </div>

            <div className="absolute top-[343px] left-[47px] w-44 h-[90px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.5)] text-xs bg-gainsboro">
                <p className="absolute h-[28.44%] w-[58.52%] top-[-16%] left-[3.98%] text-mini  font-semibold flex items-center">
                    Pickup Points
                </p>
                <select className="absolute top-[26%] left-[12px] rounded-10xs bg-white w-[149px] h-[18px]">
                    <option>Mumbai</option>
                    <option>bangalore</option>
                    <option>delhi</option>
                </select>
                <div className="absolute h-[16.51%] w-[67.61%] top-[50.46%] left-3 leading-[27.5px] flex items-center">
                    <input id='mumbai' type='checkbox'/>
                    <label className='ml-3' htmlFor='mumbai' >mumbai</label> 
                </div>
                <div className="absolute h-[16.51%] w-[67.61%] top-[72.48%] left-3 leading-[27.5px] flex items-center">
                    <input id='bangalore' type='checkbox'/>
                    <label className='ml-3' htmlFor='bangalore' >bangalore</label> 
                </div>

            </div>

            <div className="absolute top-[533px] left-[48px] w-44 h-[90px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.5)] text-xs bg-gainsboro">
                <p className="absolute h-[28.44%] w-[58.52%] top-[-16%] left-[3.98%] text-mini leading-[27.5px] font-semibold ">
                    Bus Ratings
                </p>
                <div className="absolute h-[16.51%] w-[67.61%] top-[28.44%] left-3 leading-[27.5px] flex items-center">
                    <input id='four' type='checkbox'/>
                    <label className='ml-3' htmlFor='four'>4.5</label> 
                </div>
                
                <div className="absolute h-[16.51%] w-[67.61%] top-[50.46%] left-3 leading-[27.5px] flex items-center">
                    <input id='four' type='checkbox'/>
                    <label className='ml-3' htmlFor='four' >4.5</label> 
                </div>
                <div className="absolute h-[16.51%] w-[67.61%] top-[72.48%] left-3 leading-[27.5px] flex items-center">
                    <input id='four' type='checkbox'/>
                    <label className='ml-3' htmlFor='four' >4.5</label> 
                </div>
            </div>
        </>
    )
}

export default FilterSection
