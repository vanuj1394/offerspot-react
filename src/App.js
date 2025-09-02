import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListingPage from './Features/ListingPage/ListingPage'
import OfferDetails from './Features/OfferDetails/OfferDetails';

const App = () => {
  
return (
  <Router>
      
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/details" element={<OfferDetails/>} />
      </Routes>
    </Router>
)
  };


export default App;
