import { useState } from 'react';

const Header = () => {
    const [mode, setMode] = useState(true);

    const handleMode = () => {
        setMode(!mode);
    }

    return (
        <header class="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
            <div class="container mx-auto flex items-center justify-between py-4 px-6">
                <div class="text-2xl font-bold">
                    <a href="#" class="hover:opacity-90">🌟 Weather</a>
                </div>


                <div>
                    {mode === true ? 
                    <button
                        className="px-6 py-3 bg-gray-200 text-black rounded-lg shadow-md hover:bg-gray-300 transition" onClick={handleMode}>
                        
                        🌞 Light Mode
                    </button> : 

                    <button
                        className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition" onClick={handleMode}>
                        🌙 Dark Mode 
                    </button>}
                </div>

            </div>
        </header>
    )
}

export default Header;