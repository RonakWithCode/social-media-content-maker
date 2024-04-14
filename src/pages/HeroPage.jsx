import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation

const HeroPage = () => {
    return (
        <div className="hero bg-gradient-to-br  dark:from-gray-500 dark:to-purple-500 text-white  from-slate-500 to-gray-300   py-10 px-4 lg:px-32 flex flex-col lg:flex-row justify-between items-center">
            <div className="hero-content lg:w-1/2 mb-10 lg:mb-0 lg:mr-8">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">Empower Your Social Media Influence</h1>
                <p className="text-lg mb-8">Unlock the full potential of your online presence with our comprehensive social media management platform.</p>
                <div className="cta-buttons">
                    <Link to="/register" className="cta-button bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-4">Get Started</Link>
                    <Link to="/features" className="cta-button bg-transparent border text-black border-blue-500 dark:text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded">Learn More</Link>
                </div>
            </div>
            <div className="hero-image lg:w-1/2">
                <img src="images/hero-image.svg" alt="Social Media Management Platform" className="w-full lg:max-w-lg rounded-lg mx-auto" />
            </div>
        </div>
    );
}

export default HeroPage;
