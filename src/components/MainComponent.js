import bus_p from '../assets/bus_p.png'
import cust from '../assets/cust.webp'
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DistrictListAction } from '../state/Action/DistrictListAction';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import enter_bus from '../assets/enter_bus.jpg';
import leaving_bus from '../assets/leaving_bus.png';
import { SelectDistrictFromAction } from '../state/Action/SelectDistrictFromAction';
import { SelectDistrictToAction } from '../state/Action/SelectDistrictToAction';
import { SelectDateAction } from '../state/Action/SelectDateAction';

const MainComponent = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const districtList = useSelector(state=>state.districtList);
    const selectDistrictFrom = useSelector(state=>state.selectDistrictFrom);
    const selectDistrictTo = useSelector(state=>state.selectDistrictTo);

    const [searchValue1, setSearchValue1] = useState('');
    const [searchValue2, setSearchValue2] = useState('');
    
    const [loading, setLoading] = useState(false);


    const filteredSearch1 = districtList.filter((dist)=>dist.toLowerCase().slice(0,searchValue1.length) === searchValue1.toLowerCase()) || [];
    const filteredSearch2 = districtList.filter((dist)=>dist.toLowerCase().slice(0,searchValue2.length) === searchValue2.toLowerCase()) || [];

    const date = useSelector(state=>state.selectDate)

    const getData = async()=>{
        await axios
        .get("http://localhost:8080/state")
        .then((res) => {
        dispatch(DistrictListAction(res.data));
        })
        .catch((err) => {
        console.log(err);
        })
}

    const handleChangeSearch1 = (e)=>{
        setSearchValue1(e.target.value);
        dispatch(SelectDistrictFromAction(e.target.value))
    }

    const handleSelect1 = (e)=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        setSearchValue1('');
        dispatch(SelectDistrictFromAction(e.target.value))
    }

    const handleChangeSearch2 = (e)=>{
        setSearchValue2(e.target.value);
        dispatch(SelectDistrictToAction(e.target.value))
    }

    const handleSelect2 = (e)=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        setSearchValue2('');
        dispatch(SelectDistrictToAction(e.target.value))
    }

    const handleDateChange = (e)=>{
        dispatch(SelectDateAction(e.target.value))
        console.log(e.target.value)
    }

    
    const handleViewSearch = async()=>{

        setLoading(true);

        const searchData = {
            from : selectDistrictFrom,
            to:selectDistrictTo,
            date:date,
        } || {};

        console.log(searchData)

        await axios
        .post("http://localhost:8080/trips",searchData)
        .then((res) => {
        console.log(res.data);
        navigate('/search')

        })
        .catch((err) => {
        console.log(err);
        })
        navigate('/search')

        
    }

    useEffect(()=>{
        getData()
    },[selectDistrictFrom,selectDistrictTo,date]);


    return (
        <>
        <div className="bg-slate-400 w-full h-[1024px]  text-left text-xl text-black font-roboto ">
            <Header/>
            {/* Search button */}
            
                <button onClick={handleViewSearch} name='search'  className={`${loading?'cursor-wait':'cursor-pointer'} z-50 hover:bg-orange-400 absolute left-[650px] top-[280px] bg-red px-10 py-4 text-sm rounded-4xs bg-orangered`}>Search</button>
            
                <div className="absolute top-[142px] left-[267px] w-[292px] h-24">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-4xs bg-white shadow-lg shadow-black">
                        <img src={enter_bus}  alt='entering in the bus' className='w-10 h-10 absolute top-7 left-1'/>
                        <input id='from' className='w-[230px] h-10 absolute top-[40%] left-[50px] ring-1 ring-blue-600 rounded-4xs shadow-inner shadow-black' onChange={handleChangeSearch1} value={selectDistrictFrom} placeholder='Enter the Pickup Point'/>
                        <label htmlFor='from' className='absolute top-4 left-[60px] text-mini font-light'>From:</label>
                    </div>
                    <ul  className='w-full scrollbar-thin scrollbar-thumb-blue-500 scrollbar-corner-neutral-400 scrollbar-track-blue-100 absolute overflow-y-auto max-h-44  top-[80%] right-[0%] flex flex-col gap-2 mt-[23px] text-center '>
                        {searchValue1 ? filteredSearch1.map((district,index)=><li className='bg-slate-200' key={index}><button onClick={handleSelect1} className={`hover:bg-blue-600  ${loading?'bg-white text-black':null} hover:text-white w-full  bg-white shadow-lg shadow-black`} value={district}>{district}</button></li>) : null}
                    </ul>
                </div>

                <div className="absolute top-[142px] left-[574px] w-[292px] h-24">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-4xs bg-white shadow-lg shadow-black">
                        <img src={leaving_bus}  alt='leaving from the bus' className='w-10 h-10 absolute top-7 left-1'/>   
                        <input id='to' className='w-[230px] h-10 absolute top-[40%] left-[50px] rounded-4xs ring-1 ring-blue-600 shadow-inner shadow-black' onChange={handleChangeSearch2} value={selectDistrictTo} placeholder='Enter the Drop Point'/>
                        <label htmlFor='to' className='absolute top-4 left-[60px] text-sm font-light'>to:</label>
                    </div>
                    <ul className='w-full scrollbar-thin scrollbar-thumb-blue-500 scrollbar-corner-neutral-400 scrollbar-track-blue-100 overflow-y-auto max-h-44 absolute z-50 top-[80%] right-[0%] flex flex-col gap-1 mt-[23px] text-center'>
                        {searchValue2 ? filteredSearch2.map((district,index)=><li className='bg-slate-200' key={index}><button onClick={handleSelect2} className={`hover:bg-blue-600  ${loading?'bg-white text-black':null} hover:text-white w-full h-full bg-white shadow-lg shadow-black`} value={district}>{district}</button></li>) : null}
                    </ul>
                </div>
                <div className="absolute top-[142px] left-[881px] w-[292px] h-24 bg-white rounded-4xs shadow-lg shadow-black">
                        <input onChange={handleDateChange}  id="date" className='w-[230px] h-10 absolute top-[40%] left-[32px] text-gray-700 focus:ring-blue-500 rounded-4xs ring-1 shadow-inner shadow-black' type='date' value={date}/>
                        <label htmlFor='date' className='absolute top-4 left-[40px] text-sm font-light'>Date:</label>
                </div>


            {/* Footer */}
            <Footer/>
            
            <div className="absolute top-[425px] left-[295px] w-[200px] h-[200px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white"/>
                <div className="absolute w-[73.5%] top-[63%] left-[11.5%] leading-[27.5px] inline-block">
                    <p className="m-0">Over 200+ bus</p>
                    <p className="m-0">collections</p>
                </div>
                <img className="absolute top-[0px] left-[0px] w-[200px] h-[115px] object-cover" alt="" src={bus_p}/>
            </div>
            <div className="absolute top-[425px] left-[619px] w-[200px] h-[200px] text-5xl">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white"/>
                <img className="absolute top-[-3px] left-[1px] w-[199px] h-[129px] object-cover" alt="" src={cust}/>
                <div className="absolute bottom-[47px] left-[calc(50%_-_72px)] leading-[27.5px] font-medium inline-block w-36 h-[27px]">
                    <p className="m-0">20 million +</p>
                </div>
                
                <div className="absolute w-[84%] top-[80%] left-[12%] text-xl leading-[27.5px] inline-block">
                    Happy Customers
                </div>
            </div>
            <div className="absolute top-[425px] left-[959px] w-[200px] h-[200px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white"/>
                <div className="absolute bottom-[124px] left-[calc(50%_-_70px)] text-5xl leading-[27.5px] font-medium inline-block w-36 h-[27px]">
                    5000+
                </div>
                <div className="absolute w-[84%] top-[43.5%] left-[15%] leading-[27.5px] inline-block">
                    {`Tickets Booked `}</div>
                <div className="absolute w-[84%] top-[61.5%] left-[16%] leading-[27.5px] inline-block">
                    Everyday
                </div>
            </div>
        </div>
        </>
    );
};

export default MainComponent;
