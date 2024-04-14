import React from 'react';
import { useLocation } from 'react-router-dom';

const HelpCenter = () => {
    const location = useLocation();
    const selectedFeature = location.state?.feature;

    const helpTopics = [
        {
            id: 1,
            title: 'Social Media Analytics',
            content: (
                <div>
                    <p className={selectedFeature === 'Social Media Analytics' ? 'text-yellow-400' : ''}>Gain valuable insights into your social media performance and audience engagement.</p>
                    <p className={selectedFeature === 'Social Media Analytics' ? 'text-yellow-400' : ''}>Understand what content works best and optimize your strategy for maximum impact.</p>
                    <p className={selectedFeature === 'Social Media Analytics' ? 'text-yellow-400' : ''}>Track key metrics such as likes, comments, shares, and follower growth to measure your social media success.</p>
                    <p className={selectedFeature === 'Social Media Analytics' ? 'text-yellow-400' : ''}>Identify trends and patterns in your audience behavior to tailor your content and messaging effectively.</p>
                </div>
            )
        },
        {
            id: 2,
            title: 'AI-powered Content Creation',
            content: (
                <div>
                    <p className={selectedFeature === 'AI-powered Content Creation' ? 'highlighted' : ''}>Effortlessly generate high-quality content using AI tools tailored to your niche.</p>
                    <p className={selectedFeature === 'AI-powered Content Creation' ? 'highlighted' : ''}>Save time and resources while maintaining authenticity and relevance.</p>
                    <p className={selectedFeature === 'AI-powered Content Creation' ? 'highlighted' : ''}>Explore various content formats including text, images, and videos, generated with AI assistance.</p>
                    <p className={selectedFeature === 'AI-powered Content Creation' ? 'highlighted' : ''}>Customize and fine-tune AI-generated content to align with your brand voice and audience preferences.</p>
                </div>
            )
        },
        {
            id: 3,
            title: 'Content Organization with Folders',
            content: (
                <div>
                    <p className={selectedFeature === 'Content Organization with Folders' ? 'highlighted' : ''}>Stay organized with customizable folders for your content.</p>
                    <p className={selectedFeature === 'Content Organization with Folders' ? 'highlighted' : ''}>Easily categorize and access your posts, photos, and videos for efficient management and workflow.</p>
                    <p className={selectedFeature === 'Content Organization with Folders' ? 'highlighted' : ''}>Create folders based on topics, campaigns, or any other criteria that suit your content management needs.</p>
                    <p className={selectedFeature === 'Content Organization with Folders' ? 'highlighted' : ''}>Quickly search and retrieve content within folders using intuitive search functionality.</p>
                </div>
            )
        },
        {
            id: 4,
            title: 'Design Interface similar to Canva',
            content: (
                <div>
                    <p className={selectedFeature === 'Design Interface similar to Canva' ? 'highlighted' : ''}>Create stunning visuals and graphics with our intuitive design interface inspired by Canva.</p>
                    <p className={selectedFeature === 'Design Interface similar to Canva' ? 'highlighted' : ''}>Access a wide range of templates, tools, and resources to bring your ideas to life.</p>
                    <p className={selectedFeature === 'Design Interface similar to Canva' ? 'highlighted' : ''}>Customize designs with ease, using drag-and-drop functionality and intuitive editing features.</p>
                    <p className={selectedFeature === 'Design Interface similar to Canva' ? 'highlighted' : ''}>Experiment with fonts, colors, and layouts to create eye-catching visuals that resonate with your audience.</p>
                </div>
            )
        },
        {
            id: 5,
            title: 'Team Management and Collaboration',
            content: (
                <div>
                    <p className={selectedFeature === 'Team Management and Collaboration' ? 'highlighted' : ''}>Collaborate seamlessly with your team members on social media campaigns and projects.</p>
                    <p className={selectedFeature === 'Team Management and Collaboration' ? 'highlighted' : ''}>Assign tasks, share files, and communicate in real-time to streamline workflow and boost productivity.</p>
                    <p className={selectedFeature === 'Team Management and Collaboration' ? 'highlighted' : ''}>Set permissions and roles to ensure appropriate access levels for team members.</p>
                    <p className={selectedFeature === 'Team Management and Collaboration' ? 'highlighted' : ''}>Track progress, deadlines, and milestones to stay on top of project timelines and deliverables.</p>
                </div>
            )
        },
        {
            id: 6,
            title: 'Real-time Chat and File Sharing',
            content: (
                <div>
                    <p className={selectedFeature === 'Real-time Chat and File Sharing' ? 'highlighted' : ''}>Stay connected with your team and clients through real-time chat and file sharing capabilities.</p>
                    <p className={selectedFeature === 'Real-time Chat and File Sharing' ? 'highlighted' : ''}>Share ideas, provide feedback, and collaborate efficiently from anywhere, anytime.</p>
                    <p className={selectedFeature === 'Real-time Chat and File Sharing' ? 'highlighted' : ''}>Exchange files, documents, and media assets securely within the platform.</p>
                    <p className={selectedFeature === 'Real-time Chat and File Sharing' ? 'highlighted' : ''}>Keep conversations organized and searchable for easy reference and retrieval.</p>
                </div>
            )
        },
        {
            id: 7,
            title: 'SEO Management',
            content: (
                <div>
                    <p className={selectedFeature === 'SEO Management' ? 'highlighted' : ''}>Optimize your social media content for search engines and improve your online visibility.</p>
                    <p className={selectedFeature === 'SEO Management' ? 'highlighted' :
                        ''}>Analyze keywords, track rankings, and identify opportunities for optimization.</p>
                    <p className={selectedFeature === 'SEO Management' ? 'highlighted' : ''}>Optimize meta tags, descriptions, and other on-page elements to enhance search engine indexing.</p>
                    <p className={selectedFeature === 'SEO Management' ? 'highlighted' : ''}>Monitor competitors and industry trends to stay ahead in search engine rankings.</p>
                </div>
            )
        }
    ];

    return (
        <div className="flex">
            <div className="w-1/4 bg-gray-200 p-4">
                <h3 className="text-lg font-bold mb-4">Help Center</h3>
                <ul>
                    {helpTopics.map(topic => (
                        <li key={topic.id} className="mb-2">
                            <a href={`#${topic.title}`} className="text-blue-500 hover:underline">{topic.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-3/4 p-4">
                <h2 className
                    ="text-2xl font-bold mb-4">Welcome to the Help Center</h2>
                {helpTopics.map(topic => (
                    <div key={topic.id} id={topic.title} className="mb-8">
                        <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                        {topic.content}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HelpCenter;
