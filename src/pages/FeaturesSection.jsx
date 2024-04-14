import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturesSection = () => {
    const [selectedFeature, setSelectedFeature] = useState(null);

    // Function to handle click event for each feature card
    const handleFeatureClick = (feature) => {
        // Set the selected feature when a card is clicked
        setSelectedFeature(feature);
    };

    return (
        <div className="bg-gradient-to-br bg-gray-100 dark:from-purple-300 dark:to-gray-400 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Unlock Your Potential with Our Platform</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1: Social Media Analytics */}
                    <Link to="/help-center" state={{ feature: 'Social Media Analytics' }} className="feature-card bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105" onClick={() => handleFeatureClick('Social Media Analytics')}>
                        <h3 className="text-xl font-bold mb-4">Social Media Analytics</h3>
                        <p className="text-gray-700 mb-4">Gain valuable insights into your social media performance and audience engagement. Understand what content works best and optimize your strategy for maximum impact.</p>
                    </Link>

                    {/* Feature 2: AI-powered Content Creation */}
                    <Link to="/help-center" state={{ feature: 'AI-powered Content Creation' }} className="feature-card bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105" onClick={() => handleFeatureClick('AI-powered Content Creation')}>
                        <h3 className="text-xl font-bold mb-4">AI-powered Content Creation</h3>
                        <p className="text-gray-700 mb-4">Effortlessly generate high-quality content using AI tools tailored to your niche. Save time and resources while maintaining authenticity and relevance.</p>
                    </Link>

                    {/* Feature 3: Content Organization with Folders */}
                    <Link to="/help-center" state={{ feature: 'Content Organization with Folders' }} className="feature-card bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105" onClick={() => handleFeatureClick('Content Organization with Folders')}>
                        <h3 className="text-xl font-bold mb-4">Content Organization with Folders</h3>
                        <p className="text-gray-700 mb-4">Stay organized with customizable folders for your content. Easily categorize and access your posts, photos, and videos for efficient management and workflow.</p>
                    </Link>

                    {/* Feature 4: Design Interface similar to Canva */}
                    <Link to="/help-center" state={{ feature: 'Design Interface similar to Canva' }} className="feature-card bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105" onClick={() => handleFeatureClick('Design Interface similar to Canva')}>
                        <h3 className="text-xl font-bold mb-4">Design Interface similar to Canva</h3>
                        <p className="text-gray-700 mb-4">Create stunning visuals and graphics with our intuitive design interface inspired by Canva. Access a wide range of templates, tools, and resources to bring your ideas to life.</p>
                    </Link>

                    {/* Feature 5: Team Management and Collaboration */}
                    <Link to="/help-center" state={{ feature: 'Team Management and Collaboration' }} className="feature-card bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105" onClick={() => handleFeatureClick('Team Management and Collaboration')}>
                        <h3 className="text-xl font-bold mb-4">Team Management and Collaboration</h3>
                        <p className="text-gray-700 mb-4">Collaborate seamlessly with your team members on social media campaigns and projects. Assign tasks, share files, and communicate in real-time to streamline workflow and boost productivity.</p>
                    </Link>

                    {/* Feature 6: Real-time Chat and File Sharing */}
                    <Link to="/help-center" state={{ feature: 'Real-time Chat and File Sharing' }} className="feature-card bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105" onClick={() => handleFeatureClick('Real-time Chat and File Sharing')}>
                        <h3 className="text-xl font-bold mb-4">Real-time Chat and File Sharing</h3>
                        <p className="text-gray-700 mb-4">Stay connected with your team and clients through real-time chat and file sharing capabilities. Share ideas, provide feedback, and collaborate efficiently from anywhere, anytime.</p>
                    </Link>

                    {/* Feature 7: SEO Management */}
                    <Link to="/help-center" state={{ feature: 'SEO Management' }} className="feature-card bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105" onClick={() => handleFeatureClick('SEO Management')}>
                        <h3 className="text-xl font-bold mb-4">SEO Management</h3>
                        <p className="text-gray-700 mb-4">Optimize your social media content for search engines and improve your online visibility with our SEO management tools. Analyze keywords, track rankings, and enhance your digital presence.</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FeaturesSection;
