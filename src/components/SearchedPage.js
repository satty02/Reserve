import Footer from "./Footer";
import Header from "./Header";
import FilterSection from "./FilterSection";
import BusList from "./BusList";

const ReserveSearchedPage = () => {

  return (
    <div className={`relative bg-black w-full h-[1024px] overflow-hidden text-left text-xs text-black font-roboto`}>
      
      <Header/>

      <Footer/>

      <FilterSection/>
      
      <BusList/>
      
    </div>
  );
};


export default ReserveSearchedPage;
