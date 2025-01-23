const Footer = ({ mode }) => {
    return (
        <footer
            className={`py-8 ${
                mode
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                    : 'bg-gray-900 text-gray-300'
            }`}
        >
            <div className="container mx-auto text-center px-4">
                <h2 className="text-2xl font-bold mb-4">
                    Stay Connected
                </h2>
                <p className="text-base mb-6">
                    Follow us on social media for updates and offers
                </p>

                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6">
                    <a
                        href="#"
                        className={`text-xl transition-colors ${
                            mode
                                ? 'hover:text-pink-300'
                                : 'hover:text-gray-500'
                        }`}
                    >
                        Facebook
                    </a>
                    <a
                        href="#"
                        className={`text-xl transition-colors ${
                            mode
                                ? 'hover:text-pink-300'
                                : 'hover:text-gray-500'
                        }`}
                    >
                        Twitter
                    </a>
                    <a
                        href="#"
                        className={`text-xl transition-colors ${
                            mode
                                ? 'hover:text-pink-300'
                                : 'hover:text-gray-500'
                        }`}
                    >
                        Instagram
                    </a>
                    <a
                        href="#"
                        className={`text-xl transition-colors ${
                            mode
                                ? 'hover:text-pink-300'
                                : 'hover:text-gray-500'
                        }`}
                    >
                        LinkedIn
                    </a>
                </div>

                <p
                    className={`text-xs sm:text-sm ${
                        mode ? 'text-white' : 'text-gray-400'
                    }`}
                >
                    &copy; 2025 Deepak Singh. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
