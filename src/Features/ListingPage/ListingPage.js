import React, { useState, useEffect } from 'react';
import { MapPin, Search, Filter, Clock, Star, Users, Phone, Navigation } from 'lucide-react';
import '../../index.css';
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom';

const ListingPage = () => {
    let searchtimeout = 0;
    const [originalOffers, setOriginalOffers] = useState([]);
    const [offers, setOffers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');



    const [selectedOffer, setSelectedOffer] = useState(null);
    const [offer, setOffer] = useState();
    const [filters, setFilters] = useState({
        location: 'current',
        proximity: 10,
        category: ['fashion'],
        duration: 'week',
        discount: 30
    });
    const navigate = useNavigate();
    useEffect(() => {
        let offer = [
            {
                id: 1,
                brand: "Adidas",
                title: "Summer Sports Collection - Get ready for the season",
                discount: "40%",
                distance: "0.8km",
                timeLeft: "2h 34m left",
                category: "Fashion & Sports",
                location: "Mall Road, Sector 14",
                rating: 4.5,
                reviews: 1248,
                phone: "+91 98765 43210",
                description: "Discover the ultimate summer sports collection with cutting-edge technology and superior comfort. Perfect for athletes and fitness enthusiasts.",
                originalPrice: "₹4,999",
                discountedPrice: "₹2,999",
                validUntil: "Dec 31, 2024",
                storeHours: "10:00 AM - 10:00 PM",
                termsAndConditions: [
                    "Offer valid only on selected summer collection items",
                    "Cannot be combined with other offers or discounts",
                    "Valid for in-store purchases only",
                    "Offer valid till stocks last",
                    "Exchange and return policy as per store terms",
                    "Valid ID proof required for purchase",
                    "Offer applicable on MRP only"
                ],
                features: [
                    "Premium quality materials",
                    "Latest 2024 collection",
                    "All sizes available",
                    "Free size exchange within 7 days"
                ]
            },
            {
                id: 2,
                brand: "Nike",
                title: "Air Max Series - Limited time flash sale",
                discount: "35%",
                distance: "1.2km",
                timeLeft: "4h 12m left",
                category: "Fashion & Sports",
                location: "City Center, Main Market",
                rating: 4.7,
                reviews: 892,
                phone: "+91 98765 43211",
                description: "Experience the iconic Air Max comfort with our exclusive flash sale on the latest Air Max series sneakers.",
                originalPrice: "₹8,999",
                discountedPrice: "₹5,849",
                validUntil: "Dec 28, 2024",
                storeHours: "9:30 AM - 9:30 PM",
                termsAndConditions: [
                    "Flash sale valid for 6 hours only",
                    "Limited to 2 pairs per customer",
                    "No returns or exchanges on sale items",
                    "Offer valid on Air Max series only",
                    "Payment by card/UPI only",
                    "Valid government ID required",
                    "Offer cannot be transferred"
                ],
                features: [
                    "Air Max cushioning technology",
                    "Premium leather and mesh",
                    "Available in multiple colorways",
                    "Authentic Nike products only"
                ]
            },
            {
                id: 3,
                brand: "Puma",
                title: "Athletic Wear Mega Sale - Don't miss out",
                discount: "50%",
                distance: "2.1km",
                timeLeft: "1h 45m left",
                category: "Fashion & Sports",
                location: "Shopping Plaza, Sector 18",
                rating: 4.3,
                reviews: 567,
                phone: "+91 98765 43212",
                description: "Mega sale on athletic wear including track suits, sports shoes, and gym accessories. Perfect for your fitness journey.",
                originalPrice: "₹3,499",
                discountedPrice: "₹1,749",
                validUntil: "Dec 25, 2024",
                storeHours: "10:00 AM - 9:00 PM",
                termsAndConditions: [
                    "Mega sale ends today",
                    "Buy 2 get 1 free on selected items",
                    "No cash refunds, store credit only",
                    "Offer valid on athletic wear only",
                    "Minimum purchase of ₹1000 required",
                    "Valid till stocks last",
                    "Final sale - no returns"
                ],
                features: [
                    "Moisture-wicking fabric",
                    "Breathable and comfortable",
                    "Wide range of sizes",
                    "Latest sports technology"
                ]
            },
            {
                id: 4,
                brand: "Cantabile",
                title: "Formal Shirts & Trousers - Professional Collection",
                discount: "30%",
                distance: "1.5km",
                timeLeft: "6h 20m left",
                category: "Fashion & Sports",
                location: "Business District, Block A",
                rating: 4.2,
                reviews: 334,
                phone: "+91 98765 43213",
                description: "Elevate your professional wardrobe with our premium formal collection. Perfect fit guaranteed.",
                originalPrice: "₹2,999",
                discountedPrice: "₹2,099",
                validUntil: "Dec 30, 2024",
                storeHours: "10:30 AM - 8:30 PM",
                termsAndConditions: [
                    "Free alterations included",
                    "Professional collection items only",
                    "Exchange within 15 days with tags",
                    "Dry clean only items",
                    "Custom fitting available",
                    "Corporate bulk orders welcome",
                    "Valid ID and visiting card required"
                ],
                features: [
                    "Premium cotton blend",
                    "Wrinkle-free technology",
                    "Perfect professional fit",
                    "Available in all standard sizes"
                ]
            },
            {
                id: 5,
                brand: "Levi's",
                title: "Denim Days Sale - Classic & Modern Fits",
                discount: "45%",
                distance: "0.9km",
                timeLeft: "3h 15m left",
                category: "Fashion & Sports",
                location: "Fashion Street, Central Mall",
                rating: 4.6,
                reviews: 1156,
                phone: "+91 98765 43214",
                description: "Iconic Levi's denim collection with classic and modern fits. Authentic quality, timeless style.",
                originalPrice: "₹4,499",
                discountedPrice: "₹2,474",
                validUntil: "Dec 29, 2024",
                storeHours: "11:00 AM - 10:00 PM",
                termsAndConditions: [
                    "Authentic Levi's products only",
                    "Free hemming service included",
                    "30-day exchange policy",
                    "Denim collection items only",
                    "Care instructions provided",
                    "Loyalty points applicable",
                    "Gift wrapping available"
                ],
                features: [
                    "100% authentic Levi's",
                    "Classic and modern fits",
                    "Premium denim quality",
                    "Iconic 5-pocket styling"
                ]
            },
            {
                id: 6,
                brand: "H&M",
                title: "End of Season Clearance - Trendy Outfits",
                discount: "60%",
                distance: "1.8km",
                timeLeft: "5h 30m left",
                category: "Fashion & Sports",
                location: "Metro Plaza, Level 2",
                rating: 4.1,
                reviews: 892,
                phone: "+91 98765 43215",
                description: "End of season clearance sale with the trendiest outfits at unbeatable prices. Fashion meets affordability.",
                originalPrice: "₹1,999",
                discountedPrice: "₹799",
                validUntil: "Dec 26, 2024",
                storeHours: "10:00 AM - 11:00 PM",
                termsAndConditions: [
                    "Clearance items - final sale",
                    "No returns or exchanges",
                    "Limited sizes available",
                    "Cash and card accepted",
                    "While supplies last",
                    "Cannot be combined with other offers",
                    "Seasonal items only"
                ],
                features: [
                    "Latest fashion trends",
                    "High-quality materials",
                    "Sustainable fashion choices",
                    "Wide variety of styles"
                ]
            }
        ]
        setOriginalOffers(offer);
        setOffers(offer);
    }, [])
    const routeToDetailedPage = (offer) => {
        console.log(offer)
        setSelectedOffer(offer);
        navigate(`details`, { state: offer })
    }

    const SearchOffer = (value) => {
        setSearchQuery(value);



        clearTimeout(searchtimeout)

        searchtimeout = setTimeout(() => {
            if (value.trim() === '') {
                // ⬅️ Reset list when input is empty
                setOffers(originalOffers);
                return;
            }
            const filtered = originalOffers.filter((val) =>
                val.brand.toLowerCase().includes(value.toLowerCase())
            );
            setOffers(filtered);
        }, 800);


    };
    // Sample offer data with detailed information




    // Offer Details Component


    // Main App Component
    // if (selectedOffer) {
    //   return <OfferDetailsPage offer={selectedOffer} onBack={goBack} />;
    // }





    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}

            <Header />
            {/* Search Section */}
            <section className="max-w-7xl mx-auto px-4 py-6">
                <div className="max-w-2xl mx-auto relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                        placeholder="Search for brands, categories, or specific offers..."
                        value={searchQuery}
                        onChange={(e) => SearchOffer(e.target.value)}
                    />
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 pb-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Filters Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
                            <div className="flex items-center gap-2 mb-6">
                                <Filter className="w-5 h-5" />
                                <h2 className="text-lg font-semibold">Filters</h2>
                            </div>

                            <div className="space-y-6">
                                {/* Location */}
                                <div>
                                    <h3 className="font-medium text-black mb-3">Location</h3>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2">
                                            <input type="radio" name="location" defaultChecked className="text-red-500" />
                                            <span className="text-sm">Current Location</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="radio" name="location" className="text-red-500" />
                                            <span className="text-sm">Custom Location</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Proximity */}
                                <div>
                                    <h3 className="font-medium text-black mb-3">Proximity</h3>
                                    <input type="range" className="w-full accent-red-500" min="1" max="50" defaultValue="10" />
                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>1km</span>
                                        <span>50km</span>
                                    </div>
                                </div>

                                {/* Category */}
                                <div>
                                    <h3 className="font-medium text-black mb-3">Category</h3>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" defaultChecked className="text-red-500" />
                                            <span className="text-sm">Fashion & Sports</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" className="text-red-500" />
                                            <span className="text-sm">Electronics</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" className="text-red-500" />
                                            <span className="text-sm">Food & Dining</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" className="text-red-500" />
                                            <span className="text-sm">Lifestyle</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Duration */}
                                <div>
                                    <h3 className="font-medium text-black mb-3">Duration</h3>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2">
                                            <input type="radio" name="duration" className="text-red-500" />
                                            <span className="text-sm">Today Only</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="radio" name="duration" defaultChecked className="text-red-500" />
                                            <span className="text-sm">This Week</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="radio" name="duration" className="text-red-500" />
                                            <span className="text-sm">This Month</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Discount Range */}
                                <div>
                                    <h3 className="font-medium text-black mb-3">Discount Range</h3>
                                    <input type="range" className="w-full accent-red-500" min="10" max="80" defaultValue="30" />
                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>10%</span>
                                        <span>80%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Offers Grid */}
                    <section className="lg:col-span-3">
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                    <span className="text-lg font-semibold">24 Active Offers Near You</span>
                                </div>
                                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                                    <option>Sort by Distance</option>
                                    <option>Sort by Discount</option>
                                    <option>Sort by Ending Soon</option>
                                    <option>Sort by Brand</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {offers.map((offer) => (
                                    <div
                                        key={offer.id}
                                        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                                        onClick={() => routeToDetailedPage(offer)}
                                    >
                                        <div className="relative">
                                            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                                <span className="text-4xl font-bold text-gray-600">{offer.brand.charAt(0)}</span>
                                            </div>
                                            <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                {offer.discount} OFF
                                            </div>
                                        </div>

                                        <div className="p-5">
                                            <h3 className="font-bold text-lg text-black mb-1">{offer.brand}</h3>
                                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{offer.title}</p>

                                            <div className="flex justify-between items-center mb-4">
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                    <span className="text-sm">{offer.rating}</span>
                                                </div>
                                                <div className="flex items-center gap-1 text-sm text-gray-500">
                                                    <MapPin className="w-4 h-4" />
                                                    {offer.distance}
                                                </div>
                                            </div>

                                            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                                                <div className="flex items-center justify-center gap-1 text-red-600 text-sm font-semibold">
                                                    <Clock className="w-4 h-4" />
                                                    {offer.timeLeft}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );

}

export default ListingPage