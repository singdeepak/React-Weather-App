import React, { useState } from 'react';
import axios from 'axios';

const Main = ({ toggle }) => {
    console.log(toggle);
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const handleCity = (e) => setCity(e.target.value);

    const fetchWeather = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'c2cc9b10a8b755646f53263b84b0cb3e'}`
            );
            setWeather(response.data);
            console.log(response);
        } catch (err) {
            console.error('Error fetching weather data:', err);
        }
    };

    const handleKnowWeather = () => {
        fetchWeather();
    };

    return (
        <section
            className={`text-center py-16 ${
                toggle
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-black'
                    : 'bg-gradient-to-r from-gray-800 to-black text-white'
            }`}
        >
            <div
                className={`max-w-lg mx-auto p-6 ${
                    toggle ? 'bg-white text-black' : 'bg-gray-900 text-white'
                } rounded-lg shadow-md`}
            >
                <h2 className="text-2xl font-semibold text-center mb-4">
                    Check your city weather
                </h2>
                <div>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="city"
                            name="city"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                                toggle
                                    ? 'border-[#0F284B] focus:ring-[#7BB1BA]'
                                    : 'border-gray-600 focus:ring-gray-400'
                            }`}
                            placeholder="Enter your city"
                            value={city}
                            onChange={handleCity}
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className={`px-6 py-2 rounded-full focus:outline-none focus:ring-2 hover:scale-105 transition-transform ${
                                toggle
                                    ? 'bg-[#0F284B] text-white focus:ring-[#7BB1BA] hover:bg-[#7BB1BA]'
                                    : 'bg-gray-600 text-white focus:ring-gray-400 hover:bg-gray-700'
                            }`}
                            onClick={handleKnowWeather}
                        >
                            Know Weather
                        </button>
                    </div>
                </div>
            </div>

            {weather && (
                <div className="flex flex-wrap justify-center gap-6 overflow-hidden mt-5">
                    {/* Weather Cards */}
                    <div
                        className={`p-6 rounded-xl shadow-lg hover:scale-105 transition-transform w-full sm:w-[300px] md:w-[350px] ${
                            toggle
                                ? 'bg-white text-black'
                                : 'bg-gray-900 text-white'
                        }`}
                    >
                        <h3 className="text-2xl font-semibold mb-2">
                            City: {weather && weather.name}
                        </h3>
                    </div>
                    <div
                        className={`p-6 rounded-xl shadow-lg hover:scale-105 transition-transform w-full sm:w-[300px] md:w-[350px] ${
                            toggle
                                ? 'bg-white text-black'
                                : 'bg-gray-900 text-white'
                        }`}
                    >
                        <h3 className="text-2xl font-semibold mb-2">
                            Temperature: {weather && weather.main.temp}
                        </h3>
                    </div>
                    <div
                        className={`p-6 rounded-xl shadow-lg hover:scale-105 transition-transform w-full sm:w-[300px] md:w-[350px] ${
                            toggle
                                ? 'bg-white text-black'
                                : 'bg-gray-900 text-white'
                        }`}
                    >
                        <h3 className="text-2xl font-semibold mb-2">
                            Humidity: {weather && weather.main.humidity}
                        </h3>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Main;
