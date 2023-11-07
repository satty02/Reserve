import Footer from "../FrontPage/Footer";
import Header from "../FrontPage/Header";
import FilterSection from "./FilterSection";
import BusList from "./BusList";

const ReserveSearchedPage = () => {

  return (
    <div className={`relative bg-slate-400 w-full h-[1024px] overflow-hidden text-left text-black font-roboto`}>
      
      <Header/>

      <Footer/>

      <FilterSection/>
      
      <BusList/>
      
    </div>
  );
};


export default ReserveSearchedPage;
