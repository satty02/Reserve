import React from 'react'

function FilterSection() {
    return (
        <>
            <div className="absolute top-[115px] left-[48px] rounded-[60px] w-44 h-8">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro"/>
                <button className="bg-inherit absolute h-[56.25%] w-[18.75%] top-[21.88%] left-[6.82%] leading-[27.5px] font-medium flex items-center">
                    Filter
                </button>
                <button className="bg-inherit absolute h-[56.25%] w-[30.55%] top-[21.88%] left-[70.45%] leading-[27.5px] font-medium flex items-center">
                    Clear All
                </button>
            </div>

            <div className="absolute top-[153px] left-[48px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.5)] w-44 h-[89px]">
                <div className="absolute top-[0px] left-[0px] bg-gainsboro w-44 h-[89px]"/>
                
                <div className="absolute h-[16.51%] w-[67.61%] top-[28.44%] left-[18.75%] leading-[27.5px] flex items-center justify-between ">
                    <input id='morning' type='checkbox'/>
                    <label htmlFor='morning' >Morning Session</label> 
                </div>
                <div className="absolute h-[28.44%] w-[67.61%] top-[0%] left-[3.98%] text-mini leading-[27.5px] font-medium flex items-center text-center">
                    Departure Time
                </div>
                <div className="absolute h-[16.51%] w-[67.61%] top-[50.46%] left-[18.75%] leading-[27.5px] flex items-center justify-between">
                    <input id='afternoon' type='checkbox'/>
                    <label htmlFor='afternoon' >Afternoon Session</label> 
                </div>
                <div className="absolute h-[16.51%] w-[67.61%] top-[72.48%] left-[18.75%] leading-[27.5px] flex items-center justify-between">
                    <input id='evening' type='checkbox'/>
                    <label htmlFor='evening' >Evening Session</label> 
                </div>
            </div>

            <div className="absolute top-[248px] left-[48px] w-44 h-[89px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro"/>
                <div className="absolute h-[16.51%] w-[67.61%] top-[28.44%] left-[18.75%] leading-[27.5px] flex items-center">
                    <input id='morning' type='checkbox'/>
                    <label htmlFor='morning' >Morning Session</label> 
                </div>
                <div className="absolute h-[28.44%] w-[49.43%] top-[0%] left-[3.98%] text-mini leading-[27.5px] font-medium flex items-center">
                    Arrival Time
                </div>
                <div className="absolute h-[16.51%] w-[67.61%] top-[50.46%] left-[18.75%] leading-[27.5px] flex items-center">
                    <input id='afternoon' type='checkbox'/>
                    <label htmlFor='afternoon' >Afternoon Session</label> 
                </div>
                <div className="absolute h-[16.51%] w-[67.61%] top-[72.48%] left-[18.75%] leading-[27.5px] flex items-center">
                    <input id='evening' type='checkbox'/>
                    <label htmlFor='evening' >Evening Session</label> 
                </div>
            </div>
            
            <div className="absolute top-[629px] left-[48px] w-44 h-[90px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro"/>
                <div className="absolute h-[28.44%] w-[58.52%] top-[0%] left-[3.98%] text-mini leading-[27.5px] font-medium flex items-center">
                    Bus Operator
                </div>
                
                <div className="absolute h-[16.51%] w-[67.61%] top-[50.46%] left-[18.75%] leading-[27.5px] flex items-center">
                     <input id='mumbai' type='checkbox'/>
                    <label htmlFor='mumbai' >mumbai</label> 
                </div>
                <div className="absolute h-[16.51%] w-[67.61%] top-[72.48%] left-[18.75%] leading-[27.5px] flex items-center">
                    <input id='bangalore' type='checkbox'/>
                    <label htmlFor='bangalore' >bangalore</label> 
                </div>
                <select className="absolute top-[26px] left-[12px] rounded-10xs bg-white w-[149px] h-[15px]">
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Kolkata</option>
                </select>
            </div>

            <div className="absolute top-[438px] left-[48px] w-44 h-[90px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro"/>
                <div className="absolute h-[28.44%] w-[58.52%] top-[0%] left-[3.98%] text-mini leading-[27.5px] font-medium flex items-center">
                    Drop Points
                </div>
                
                <div className="absolute h-[16.51%] w-[67.61%] top-[50.46%] left-[18.75%] leading-[27.5px] flex items-center">
                    <input id='delhi' type='checkbox'/>
                    <label htmlFor='delhi' >delhi</label> 
                </div>
                <div className="absolute h-[16.51%] w-[67.61%] top-[72.48%] left-[18.75%] leading-[27.5px] flex items-center">
                    <input id='mumbai' type='checkbox'/>
                    <label htmlFor='mumbai' >mumbai</label> 
                </div>
                <select className="absolute top-[26px] left-[12px] rounded-10xs bg-white w-[149px] h-[15px]">
                    <option>Mumbai</option>
                    <option>delhi</option>
                    <option>bangalore</option>
                </select>
            </div>

            <div className="absolute top-[343px] left-[47px] w-44 h-[90px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro"/>
                <div className="absolute h-[28.44%] w-[58.52%] top-[0%] left-[3.98%] text-mini leading-[27.5px] font-medium flex items-center">
                    Pickup Points
                </div>
                <div className="absolute h-[16.51%] w-[67.61%] top-[50.46%] left-[18.75%] leading-[27.5px] flex items-center">
                    <input id='mumbai' type='checkbox'/>
                    <label htmlFor='mumbai' >mumbai</label> 
                </div>
                <div className="absolute h-[16.51%] w-[67.61%] top-[72.48%] left-[18.75%] leading-[27.5px] flex items-center">
                    <input id='bangalore' type='checkbox'/>
                    <label htmlFor='bangalore' >bangalore</label> 
                </div>
                <select className="absolute top-[26px] left-[12px] rounded-10xs bg-white w-[149px] h-[15px]">
                    <option>Mumbai</option>
                    <option>bangalore</option>
                    <option>delhi</option>
                </select>
            </div>

            <div className="absolute top-[533px] left-[48px] w-44 h-[90px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro"/>
                <div className="absolute h-[16.51%] w-[67.61%] top-[28.44%] left-[18.75%] leading-[27.5px] flex items-center">
                    <input id='four' type='checkbox'/>
                    <label htmlFor='four' >4.5</label> 
                </div>
                <div className="absolute h-[28.44%] w-[58.52%] top-[0%] left-[3.98%] text-mini leading-[27.5px] font-medium flex items-center">
                    Bus Ratings
                </div>
                <div className="absolute h-[16.51%] w-[67.61%] top-[50.46%] left-[18.75%] leading-[27.5px] flex items-center">
                    <input id='four' type='checkbox'/>
                    <label htmlFor='four' >4.5</label> 
                </div>
                <div className="absolute h-[16.51%] w-[67.61%] top-[72.48%] left-[18.75%] leading-[27.5px] flex items-center">
                    <input id='four' type='checkbox'/>
                    <label htmlFor='four' >4.5</label> 
                </div>
            </div>
        </>
    )
}

export default FilterSection
