import BookingConfirmation from "./components/BookingConfirmation";
import MainComponent from "./components/MainComponent";
import SearchedPage from "./components/SearchedPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Seats from "./components/Seats";

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