import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'; // Import menu icon from react-icons
import { FaPencilAlt, FaTextHeight, FaShapes, FaFileUpload } from 'react-icons/fa'; // Import common icons from react-icons
import CanvasEditor from './CanvasEditor';

const SideMenu = () => {
    const [showDesign, setShowDesign] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showElements, setShowElements] = useState(false);
    const [showUploadFile, setShowUploadFile] = useState(false);
    const [showDraw, setShowDraw] = useState(false);
    const [showProjects, setShowProjects] = useState(false);

    const toggleDesign = () => {
        setShowDesign(!showDesign);
    };

    const toggleText = () => {
        setShowText(!showText);
    };

    const toggleElements = () => {
        setShowElements(!showElements);
    };

    const toggleUploadFile = () => {
        setShowUploadFile(!showUploadFile);
    };

    const toggleDraw = () => {
        setShowDraw(!showDraw);
    };

    const toggleProjects = () => {
        setShowProjects(!showProjects);
    };

    return (
        <div className="flex bg-gray-500 h-screen">
            {/* Menu button */}
            <div className="flex-none bg-gray-900 text-white ">
                <ul className="py-4">
                    <li onClick={toggleDesign} className="  cursor-pointer  hover:bg-slate-800 px-4 py-2 flex items-center">
                        <FaPencilAlt className="mr-2" /> <span className="hidden sm:inline">Design</span>
                    </li>

                    <li onClick={toggleText} className="cursor-pointer hover:bg-slate-800 px-4 py-2 flex items-center">
                        <FaTextHeight className="mr-2" /> <span className="hidden sm:inline">Text</span>
                    </li>
                    <li onClick={toggleElements} className="cursor-pointer hover:bg-slate-800 px-4 py-2 flex items-center">
                        <FaShapes className="mr-2" /> <span className="hidden sm:inline">Elements</span>
                    </li>
                    <li onClick={toggleUploadFile} className="cursor-pointer hover:bg-slate-800 px-4 py-2 flex items-center">
                        <FaFileUpload className="mr-2" /> <span className="hidden sm:inline">Upload File</span>
                    </li>
                    <li onClick={toggleDraw} className="cursor-pointer hover:bg-slate-800 px-4 py-2 flex items-center">
                        <FaPencilAlt className="mr-2" /> <span className="hidden sm:inline">Draw</span>
                    </li>
                    <li onClick={toggleProjects} className="cursor-pointer hover:bg-slate-800 px-4 py-2 flex items-center">
                        <FaShapes className="mr-2" /> <span className="hidden sm:inline">Projects</span>
                    </li>
                </ul>
            </div>


            {showDesign && (
                <div className="flex-none bg-gray-900">
                    <ul>
                        <div className="grid grid-cols-2">
                            <li className="hover:bg-slate-700 px-2  py-2">
                                <svg className="text-blue-500" width="40" height="40" viewBox="0 0 24 24">
                                    <circle fill='blue' cx="12" cy="12" r="10" />
                                </svg>
                            </li>
                            <li className="hover:bg-slate-700 px-2 py-2">
                                <svg className="text-red-500" width="40" height="40" viewBox="0 0 24 24">
                                    <rect fill='red' width="20" height="20" />
                                </svg>
                            </li>
                            <li className="hover:bg-slate-700 px-2 py-2">
                                <svg className="text-yellow-500" width="40" height="40" viewBox="0 0 24 24">
                                    <polygon fill='yellow' points="12 2 2 22 22 22" />
                                </svg>
                            </li>



                            {/* Add more SVG shapes here */}
                        </div>

                    </ul>

                </div>
            )}


            <CanvasEditor/>

        </div>
    );
};

export default SideMenu;
