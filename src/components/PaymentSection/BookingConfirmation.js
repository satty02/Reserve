import Footer from "../FrontPage/Footer";
import Header from "../FrontPage/Header";
import greenTick from '../../assets/green_tick.jpg'

const BookingConfirmation = () => {
    return (
        <>
          <Header/>
            <div className="absolute top-[16%] left-[calc(50%_-_493px)] rounded-4xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] w-[959px] h-[591px]" >
                <img
                  className="absolute top-[5%] left-[calc(50%-43.5px)] w-[87px] h-[77px] object-cover"
                  alt=""
                  src={greenTick}
                />
                <div className="absolute top-[18%] left-[calc(50%_-_208px)] text-13xl leading-[27.5px] font-medium inline-block w-[416px]">
                  Booking has been confirmed
                </div>
                <div className="absolute top-[24.8%] left-[calc(50%_-_177px)] leading-[27.5px] font-light inline-block w-[395px]">{`Ticket ID : `}</div>
                <div className="absolute top-[28.61%] left-[calc(50%_-_177px)] leading-[27.5px] font-light inline-block w-[395px]">
                  Payment ID :
                </div>
                <div className="absolute top-[32.42%] left-[calc(50%_-_177px)] leading-[27.5px] font-light inline-block w-[395px]">
                  Passenger Details :
                </div>
                <div className="absolute top-[36.23%] left-[calc(50%_-_177px)] leading-[27.5px] font-light inline-block w-[395px]">
                  Contact Details :
                </div>

                <div className="absolute top-[60%] left-[calc(50%_-_333px)] shadow-[0px_4px_4px_#000] w-[667px] h-[154px] text-2xs">

                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
                  <div className="absolute h-[20.13%] w-[29.54%] top-[5.19%] left-[3.6%] text-5xl leading-[27.5px] font-medium inline-block">
                    IntrCity Smart Bus
                  </div>
                  <div className="absolute h-[7.79%] w-[35.53%] top-[29.87%] left-[3.6%] leading-[27.5px] font-light flex items-center">
                    A/C Sleeper (2+1) | 24 seats left | 0 windows left
                  </div>
                  <div className="absolute h-[7.79%] w-[6.45%] top-[10.39%] left-[37.78%] leading-[27.5px] font-extralight flex items-center">
                    Ratings
                  </div>
                  <div className="absolute h-[10.39%] w-[22.94%] top-[69.48%] left-[3.6%] text-smi leading-[27.5px] text-gray-200 flex items-center">
                    Santacruz Road, Mumbai
                  </div>
                  <div className="absolute h-[10.39%] w-[19.19%] top-[67.53%] left-[63.27%] text-smi leading-[27.5px] text-gray-200 flex items-center">
                    Bosari,Pune
                  </div>
                  <div className="absolute h-[22.73%] w-[81.26%] top-[44.81%] left-[3.6%] text-xl leading-[27.5px] flex items-center">{`22:45 , 16 NOV ----------- 07 hrs 59 min ----------- 06:20, 17 NOV `}</div>
                  <div className="absolute h-[100.65%] w-[0.15%] top-[-0.32%] right-[20.34%] bottom-[-0.32%] left-[79.51%] box-border hidden border-r-[1px] border-solid border-black" />
                  <div className="absolute h-[23.7%] w-[9.01%] top-[67.53%] right-[5.28%] bottom-[8.77%] left-[85.71%] rounded-4xs bg-orangered hidden" />
                  <div className="absolute h-[24.55%] w-[8.92%] top-[5.26%] left-[85.71%] text-mini leading-[27.5px] text-center hidden">
                    Trip Cost
                  </div>
                  <div className="absolute h-[24.55%] w-[8.92%] top-[42.08%] left-[85.71%] text-xl leading-[27.5px] text-center hidden">
                    899₹
                  </div>
                  <div className="absolute h-[24.55%] w-[8.92%] top-[21.95%] left-[85.71%] text-xs leading-[27.5px] font-light text-center hidden">
                    Starting From
                  </div>
                  <div className="absolute h-[22.79%] w-[8.92%] top-[67.53%] left-[85.82%] text-xs leading-[27.5px] text-white text-center inline-block">
                    View Seats
                  </div>
                  <img
                    className="absolute h-[11.69%] w-[2.7%] top-[8.44%] right-[62.91%] bottom-[79.87%] left-[34.39%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/star-1.svg"
                  />
                  <div className="absolute h-[5.19%] w-[1.95%] top-[11.69%] left-[34.63%] text-7xs leading-[27.5px] font-light text-center flex items-center justify-center">
                    4.5
                  </div>
                </div>
              </div>
            <Footer/>
          
        </>
    );
  };
  
  export default BookingConfirmation;
  