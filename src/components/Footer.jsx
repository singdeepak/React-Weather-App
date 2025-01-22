const Footer = () => {
    return(
        <footer className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-8">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
                    <p className="text-base mb-6">Follow us on social media for updates and offers</p>
                    
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6">
                        <a href="#" className="text-xl hover:text-pink-300 transition-colors">Facebook</a>
                        <a href="#" className="text-xl hover:text-pink-300 transition-colors">Twitter</a>
                        <a href="#" className="text-xl hover:text-pink-300 transition-colors">Instagram</a>
                        <a href="#" className="text-xl hover:text-pink-300 transition-colors">LinkedIn</a>
                    </div>
                    
                    <p className="text-xs sm:text-sm">&copy; 2025 Your Company. All Rights Reserved.</p>
                </div>
        </footer>
    )
}

export default Footer;
