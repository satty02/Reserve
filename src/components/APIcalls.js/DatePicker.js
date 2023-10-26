import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';

const DatePicker = () => {

  const selectedDate = useSelector(state=>state.selectDate);

  const dates = [selectedDate,selectedDate,selectedDate,selectedDate,selectedDate,selectedDate,selectedDate,selectedDate]

  const settings = {
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      focusOnSelect:true,
  };

  return (
    <div className="mt-4 p-4 absolute top-[103px] left-[300px] w-[1050px] h-16 object-cover">
      <Slider {...settings}>
        {dates.map((date) => (
          <div key={date} className="text-center">
            <div className="bg-red-400 p-4 rounded-md">
              {date}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DatePicker;
