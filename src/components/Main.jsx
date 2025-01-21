import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const handleCity = (e) => setCity(e.target.value);

    const fetchWeather = async () => {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'c2cc9b10a8b755646f53263b84b0cb3e'}`);
            setWeather(response.data);
            console.log(response);
        }catch(err){
            console.error('Error fetching weather data:', err);
        }
    }

    const handleKnowWeather = () => {
        fetchWeather();
    }

    return (
        <section className="text-center py-16 bg-gradient-to-r from-purple-600 to-pink-500">
            <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-[#0F284B] mb-4">Check your city weather</h2>
                <div>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="city"
                            name="city"
                            className="w-full px-4 py-2 border border-[#0F284B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7BB1BA]"
                            placeholder="Enter your city"
                            value={city}
                            onChange={handleCity}
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-[#0F284B] text-white px-6 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#7BB1BA] hover:bg-[#7BB1BA]" onClick={handleKnowWeather}
                        >
                            Know Weather
                        </button>
                    </div>
                </div>
            </div>

            {weather && (
                <div className="flex flex-wrap justify-center gap-6 overflow-hidden mt-5">
                {/* Service Card 1 */}
                <div className="bg-white text-black p-6 rounded-xl shadow-lg hover:scale-105 transition-transform w-full sm:w-[300px] md:w-[350px]">
                    <h3 className="text-2xl font-semibold mb-2">City : { weather && weather.name}</h3>
                </div>
                {/* Service Card 2 */}
                <div className="bg-white text-black p-6 rounded-xl shadow-lg hover:scale-105 transition-transform w-full sm:w-[300px] md:w-[350px]">
                    <h3 className="text-2xl font-semibold mb-2">Temperature : { weather && weather.main.temp}</h3>
                </div>
                {/* Service Card 3 */}
                <div className="bg-white text-black p-6 rounded-xl shadow-lg hover:scale-105 transition-transform w-full sm:w-[300px] md:w-[350px]">
                    <h3 className="text-2xl font-semibold mb-2">Humidity : { weather && weather.main.humidity}</h3>
                </div>
            </div>
            )}
        </section>

    )
}

export default Main;