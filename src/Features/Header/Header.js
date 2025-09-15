import { MapPin, Search, Filter, Clock, Star, Users, Phone, Navigation } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import '../../index.css';
import useGeolocation from '../../utils/useGeolocation';

const Header = (props)=>{
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentlocation,setcurrentlocation] = useState(props.currentlocation)
    const [filters, setFilters] = useState({
        location: 'current',
        proximity: 10,
        category: ['fashion'],
        duration: 'week',
        discount: 30
      });
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
      };




    return (
        <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
                O
              </div>
              <span className="text-xl font-bold text-black">OfferSpot</span>
            </div>
           
            
            <div className="flex items-center gap-4">
              {/* Current Location */}
              <div className="flex items-center gap-2 text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                <Navigation className="w-4 h-4 text-red-400" />
                <span className="text-sm">{currentlocation}</span>
              </div>
              
              {/* Profile */}
              <div className="relative">
                <button 
                  onClick={toggleDropdown}
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    JD
                  </div>
                  <span className="text-sm">▼</span>
                </button>
                
                {showDropdown && (
                  <div className="absolute top-full right-0 mt-2 bg-white border rounded-lg shadow-lg min-w-40 z-10">
                    <div className="py-1">
                      <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm">👤 My Account</div>
                      <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm">❓ Help & Support</div>
                      <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm">⚙️ Settings</div>
                      <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-red-600">🚪 Logout</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;
