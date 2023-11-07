import BookingConfirmation from "./components/PaymentSection/BookingConfirmation";
import MainComponent from "./components/FrontPage/MainComponent";
import SearchedPage from "./components/SearchedPage/SearchedPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Seats from "./components/SearchedPage/Seats";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/search" element={<SearchedPage />} />
        <Route path="/bookings" element={<BookingConfirmation/>}/>
        <Route path="/payment" element={<Seats/>}/>

      </Routes>
    </Router>
  );
}

export default App;