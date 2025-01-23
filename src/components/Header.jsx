import { useState, useEffect } from 'react';

const Header = (props) => {
    const [mode, setMode] = useState(true);

    const handleMode = () => {
        setMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        props.receiveMode(mode);
    }, [mode, props]);

    return (
        <header
            className={`py-4 ${
                mode
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                    : 'bg-gray-900 text-gray-300'
            }`}
        >
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* App Title */}
                <div className="text-2xl font-bold">
                    <a href="#" className="hover:opacity-90">
                        🌟 Weather App
                    </a>
                </div>

                {/* Mode Toggle Button */}
                <div>
                    {mode ? (
                        <button
                            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition"
                            onClick={handleMode}
                        >
                            🌙 Dark Mode
                        </button>
                    ) : (
                        <button
                            className="px-6 py-3 bg-gray-200 text-black rounded-lg shadow-md hover:bg-gray-300 transition"
                            onClick={handleMode}
                        >
                            🌞 Light Mode
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
