import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'; // Import menu icon from react-icons
import { FaPencilAlt, FaTextHeight, FaShapes, FaFileUpload } from 'react-icons/fa'; // Import common icons from react-icons
import { FaCircle, FaSquare, FaExclamationTriangle } from 'react-icons/fa'; // Import shape icons from react-icons

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
        <div className="flex h-screen">
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
                <div className="flex-none bg-gray-900 text-white ">
                    <li className="hover:bg-slate-800 px-4 py-2">
                        <div className="grid grid-cols-2 gap-2">
                            <FaCircle className="text-4xl text-blue-500" />
                            <FaSquare className="text-4xl text-red-500" />
                            <FaExclamationTriangle className="text-4xl text-yellow-500" />
                            <FaSquare className="text-4xl text-green-500" />
                            <FaSquare className="text-4xl text-purple-500" />
                            <FaSquare className="text-4xl text-orange-500" />
                            <FaSquare className="text-4xl text-pink-500" />
                        </div>
                    </li>
                </div>
            )}



        </div>
    );
};

export default SideMenu;
