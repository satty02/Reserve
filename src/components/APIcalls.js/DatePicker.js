import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import prev from '../../assets/prev.png';
import next from '../../assets/next.png';
import { SelectDateAction } from '../../state/Action/SelectDateAction';


const DatePicker = () => {
  const dispatch = useDispatch()

  const selectedDate = useSelector(state=>state.selectDate);
  const currentDate= new Date(selectedDate) ;

  const previousDate = new Date(currentDate);
  previousDate.setDate(currentDate.getDate()-1);

  const previousDate1 = new Date(currentDate);
  previousDate1.setDate(currentDate.getDate()-2);

  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate()+1);

  const nextDate1 = new Date(currentDate);
  nextDate1.setDate(currentDate.getDate()+2);

  const [findDates, setFindDates] = useState([
    previousDate1,
    previousDate,
    currentDate,
    nextDate,
    nextDate1,
  ])

  const dates = findDates.map((date)=>date.toLocaleDateString());
  const dates1 = findDates.map((date)=>date.getDate());


  const handleClickPrev = ()=>{
      setFindDates(prevDates=>prevDates.map((date)=>{
        const newDate = new Date(date);
        newDate.setDate(date.getDate()-1);
        return newDate;
      }))
  }

  const handleClickNext = ()=>{
    setFindDates(preDates=>preDates.map((date)=>{
      const newDate = new Date(date);
      newDate.setDate(date.getDate()+1);
      return newDate;
    }))
  }

  const handleClickDate = (e)=>{
    dispatch(SelectDateAction(e.target.value))
  };

return (

    <div className=" mt-4 p-4 absolute top-[103px] left-[370px] w-[900px] rounded-4xs h-8 object-cover flex flex-row gap-8 justify-evenly items-center bg-white">
        <button onClick={handleClickPrev} className='w-[25px] h-[25px] rounded-[50px]'><img className='w-[25px] h-[25px] ml-[-7.5px] mt-[-3px]' src={prev} alt='prev'/></button>
        {dates.map((date,index) => (
          <div key={date} className="text-center py-1 ">
            <button className={`${selectedDate===date ? 'bg-green-700':null} w-18 h-18 bg-blue-600 p-2 rounded-[50%] text-white`} onClick={handleClickDate} value={date}>
              <div>
                <p>{dates1[index]}</p>
                <p></p>
              </div>
            </button>
          </div>
        ))}
        <button onClick={handleClickNext} className='w-[25px] h-[25px] rounded-[50%]'><img className='w-[25px] h-[25px] ml-[-7.5px] mt-[-3px]' src={next} alt='next'/></button>
    </div>
  );
};

export default DatePicker;