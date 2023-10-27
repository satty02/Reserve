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

  const dates = findDates.map((date)=>date.toLocaleDateString())



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
    // console.log(e.target.value)
    dispatch(SelectDateAction(e.target.value))
  };
console.log(selectedDate)


return (
    <div className=" mt-4 p-4 absolute top-[103px] left-[370px] w-[900px] rounded-4xs h-8 object-cover flex flex-row gap-8 justify-evenly items-center bg-white">
        <button onClick={handleClickPrev} className='w-20 h-5'><img className='w-[15px] h-[15px]' src={prev} alt='prev'/></button>
        {dates.map((date) => (
          <div key={date} className="text-center py-1 ">
            <button className={`${selectedDate===date ? 'bg-green-700':null} bg-blue-600 p-2 rounded-4xs text-white`} onClick={handleClickDate} value={date}>
              {date}
            </button>
          </div>
        ))}
        <button onClick={handleClickNext} className='w-20 h-5'><img className='w-[15px] h-[15px]' src={next} alt='next'/></button>
    </div>
  );
};

export default DatePicker;
