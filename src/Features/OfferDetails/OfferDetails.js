import { useLocation, useNavigate } from "react-router-dom";
import { MapPin, Search, Filter, Clock, Star, Users, Phone, Navigation } from 'lucide-react';

const OfferDetails = () => {

    const navigate = useNavigate()
    const location = useLocation();
    const offer = location.state;
    console.log(offer)
    const onBack = () => {
      navigate(-1);
    };
  
    if (!offer) {
      return (
        <div className="min-h-screen flex items-center justify-center text-red-600 text-lg">
          Offer details not found. Please go back and try again.
        </div>
      );
    }
    return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-4"
          >
            ← Back to Offers
          </button>
          
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-black text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                {offer.brand.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-black">{offer.brand}</h1>
                <p className="text-gray-600">{offer.location}</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{offer.rating}</span>
                    <span className="text-sm text-gray-500">({offer.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {offer.distance}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                {offer.discount} OFF
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {offer.timeLeft}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Offer Details Card */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold text-black mb-4">{offer.title}</h2>
              <p className="text-gray-600 mb-6">{offer.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-sm text-gray-500">Original Price</span>
                  <p className="text-lg line-through text-gray-400">{offer.originalPrice}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Discounted Price</span>
                  <p className="text-2xl font-bold text-red-600">{offer.discountedPrice}</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-black mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {offer.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-bold text-black mb-4">Terms & Conditions</h3>
              <div className="space-y-3">
                {offer.termsAndConditions.map((term, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold text-sm mt-0.5">{index + 1}.</span>
                    <p className="text-gray-600 text-sm">{term}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Store Info */}
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h3 className="font-semibold text-black mb-3">Store Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{offer.storeHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{offer.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{offer.location}</span>
                </div>
              </div>
            </div>

            {/* Validity */}
            <div className="bg-red-50 rounded-lg border border-red-200 p-4">
              <h3 className="font-semibold text-red-800 mb-2">Offer Validity</h3>
              <p className="text-red-600 text-sm">Valid until: {offer.validUntil}</p>
              <p className="text-red-600 text-sm font-semibold mt-1">{offer.timeLeft}</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Get Directions
              </button>
              <button className="w-full border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Call Store
              </button>
              <button className="w-full border border-red-300 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                Share Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

  export default OfferDetails