import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username,setusername] = useState('');
    const [password,setpassword] = useState('')
    const [location, setLocation] = useState(null);
    const [locationName, setLocationName] = useState("");

    const navigate = useNavigate()
    const [errormessage,seterrormessage] = useState('')

    function Login(){
        if(username && password){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                  async (position) => {
                    const { latitude, longitude } = position.coords;

                    try {
                        const res = await fetch(
                          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                        );
                        const data = await res.json();
                        console.log("Full Location Data:", data);
            
                        setLocationName(data.display_name); // human-readable location
            
                        // ✅ Navigate to offers page and pass location
                        navigate("/offers", {
                          state: { lat: latitude, lng: longitude, address: data.display_name , name:data.address.city},
                        });
                      } catch (err) {
                        console.error("Error fetching location name:", err);
                        navigate("/offers");
                      }
                    
                    // You can also send location to backend here if needed
          
                    // ✅ Navigate after location is fetched
                  },
                  (error) => {
                    console.error("Error getting location:", error);
                    alert("Unable to fetch location. Please enable location services.");
                    navigate("/offers"); // still navigate even if location fails
                  }
                );
              } else {
                alert("Geolocation is not supported by this browser.");
                navigate("/offers");
              }
                    }
        else{
            seterrormessage ("Please Enter username and password")
        }
    }
    const handleUsernameChange = (e) => {
        setusername(e.target.value);
        if (errormessage) seterrormessage(""); // clear error on typing
      };
    
      const handlePasswordChange = (e) => {
        setpassword(e.target.value);
        if (errormessage) seterrormessage(""); // clear error on typing
      };

    return (
      <div className="flex flex-col justify-center h-screen items-center px-4">
        <div className="flex flex-col gap-4 w-full sm:w-8/12 md:w-6/12 lg:w-4/12 text-center p-6 border-2 border-cyan-200 rounded-lg shadow-md bg-white">
          <div> 
            <span className="text-xl font-semibold">Login</span>
          </div>
  
          <div className="flex flex-col text-left gap-2">
            <label className="font-medium">Username</label>
            <input
              type="text"
              value = {username}
              onChange={handleUsernameChange}
              className="border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Username"
            /> 
          </div>
  
          <div className="flex flex-col text-left gap-2">
            <label className="font-medium">Password</label>
            <input
              type="password"
              value = {password}
              onChange={handlePasswordChange}
              className="border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
            />
          </div>
          {errormessage && (
          <span className="text-red-500 text-sm">{errormessage}</span>
        )}
          <button className="bg-blue-500 hover:bg-blue-600 text-white w-full p-2 rounded-md transition"
          onClick={()=>Login()}
          >
            Login
          </button>
        </div>
      </div>
    );
  };
  
  export default Login;
  