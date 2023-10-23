import MainComponent from "./components/MainComponent";
import SearchedPage from "./components/SearchedPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/search" element={<SearchedPage />} />
      </Routes>
    </Router>
  );
}

export default App;