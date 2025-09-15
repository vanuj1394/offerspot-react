import { BrowserRouter as Router, Routes, Route, Link,Navigate } from 'react-router-dom';
import ListingPage from './Features/ListingPage/ListingPage'
import OfferDetails from './Features/OfferDetails/OfferDetails';
import Login from './Features/Login/Login';

const App = () => {
  
return (
  <Router>
      
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path = '/login' element={<Login />} />
        <Route path="/offers" element={<ListingPage />} />
        <Route path="/details" element={<OfferDetails/>} />
      </Routes>
    </Router>
)
  };


export default App;
