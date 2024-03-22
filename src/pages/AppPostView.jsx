import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DatabaseService } from "../utils/ConfingDatabase";

import AppViewVertical from '../components/AppViewVertical'
import ErrorDialogBox from '../components/ErrorDialogBox';
import CommentForm from '../components/CommentForm';
import developerIcon from '../assets/developerIcon.png'
import emailIcon from '../assets/emailIcon.png'
import phoneIcon from '../assets/phoneIcon.png'
import websiteIcon from '../assets/websiteIcon.png'
function AppPostView() {
  const databaseService = new DatabaseService();
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [isShow, setIsShow] = useState(false);
  const [comments, setComments] = useState();

  const toggleAccordion = () => {
    setIsShow(!isShow);
  };
  useEffect(() => {
    const fetchAppDetails = async () => {
      try {
        const appData = await databaseService.getApp(id);
        setApp(appData); 
    
      } catch (error) {
        setApp(error); 
      }
    };

    fetchAppDetails();
  }, [id]);





  useEffect(() => {
    // Fetch comments from the database or any other source
    const fetchComments = async () => {
      try {
        // Fetch comments for the current app (assuming the databaseService has a method to fetch comments)
        const commentsData = await databaseService.getCommentsForApp(id);
        setComments(commentsData);

        // console.log(commentsData);
      } catch (error) {
        // TODO: 17/03/2024 handle error of not foubd comments 
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [id]);




  if (!app) {
      // return <LoadingDialogBox/>; // You can replace this with a loading spinner or skeleton UI
    return <>
      <div className="app-details-container p-8">
        <div className="flex items-center mb-4">
          <div className="rounded-full bg-gray-300 h-12 w-12 animate-pulse"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
            </div>
          </div>
        </div>

        <button className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4 animate-pulse">
          Loading...
        </button>

        <div className="overflow-x-auto mb-4">
          <div className="flex space-x-4">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="w-36 h-36 mr-4 rounded bg-gray-300 animate-pulse"
              ></div>
            ))}
          </div>
        </div>

        <div id="accordion-collapse" data-accordion="collapse">
          <h2
            id="accordion-collapse-heading-1"
            className="animate-pulse"
          >
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            >
              <span>About the Loading...</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 shrink-0 animate-spin`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className={`transition-all animate-pulse`}
          >
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Loading...
              </p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 animate-pulse">
            Loading...
          </h3>
          <div className="flex items-center space-x-2 mb-2 animate-pulse">
            <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    </>
  }
  else {
    try {
    return (
      <div className="bg-white dark:bg-gray-800 app-details-container p-8">
        <div className="flex items-center mb-4">
          <img src={app.appLogoUrl} alt="App Logo" className="w-36 h-36 mr-4 rounded" />
          <div>
            <h1 className="text-2xl font-semibold text-black dark:text-white">{app.appName}</h1>
            <p className="mt-6 text-green-500 font-medium text-xl">{app.CompanyName}</p>
            <p className="mt-6 text-green-500 font-medium text-xl">total download's </p>
          </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4">
          View the site
        </button>
        
  
        <div className="overflow-x-auto mb-4">
          <div className="flex space-x-4">
            {app.screenshotsUrl.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                style={{
                  width: '512px',
                  height: '300px',
                }}
                className="object-cover"
              />
            ))}
          </div>
        </div>
  

        <div  id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              onClick={toggleAccordion}
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black dark:text-white border border-b-0 border-gray-200 dark:border-gray-500 hover:dark:border-white rounded-t-xl focus:ring-4 focus:ring-gray-200  dark:focus:ring-gray-700 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded={isShow}
              aria-controls="accordion-collapse-body-1"
            >
              <span>About the {app.appType}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${isShow ? 'rotate-180' : ''} shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-1" className={`transition-all ${isShow ? 'block' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-white">
                {app.appDescription}
              </p>
              {app.appWebsite ?
                <>
                  <p className="mb-2 text-gray-500 dark:text-white">Get more konow about this by        <a href={app.appWebsite} className="text-blue-600 dark:text-blue-500 hover:underline">
                        Website
                      </a> </p>
                </>
                :
                null
              }
            </div>
  
          </div>
        </div>
  
        <div className="mb-4 mt-5">
          <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">Developer Details</h3>
          <div className="mt-5 flex items-center space-x-2 mb-2">
            <img src={developerIcon} alt="User Icon" className="w-4 h-4" />
            <p className='text-xl font-semibold text-black dark:text-white' >{app.developerName}</p>
          </div>
  
          <div className="mt-5 flex items-center space-x-2 mb-2">
            <img src={emailIcon} alt="Email Icon" className="w-4 h-4" />
            <p className='text-xl font-semibold text-black dark:text-white' >{app.developerEmail}</p>
          </div>
  
          <div className="mt-5 flex items-center space-x-2 mb-2">
            <img src={phoneIcon} alt="Phone Icon" className="w-4 h-4" />
            <p className='text-xl font-semibold text-black dark:text-white' >{app.developerPhone}</p>
          </div>
  
          <div className="mt-5 flex items-center space-x-2 mb-2">
            <img src={websiteIcon} alt="Website Icon" className="w-4 h-4" />
            <p className='text-xl font-semibold text-black dark:text-white' >{app.developerPortfolio}</p>
          </div>
        </div>

        <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">Comments</h3>
        <CommentForm  />
        <div className="space-y-4">
          {/* {comments.map(comment => (
            <Comment 
              key={comment.id} 
              comment={comment} 
              onEdit={handleEditComment} 
              onDelete={handleDeleteComment} 
            />
          ))} */}
        </div>
        {/* Form to add a new comment */}
      </div>
    </div>

      
    );
  }catch(e){
    return <ErrorDialogBox title="Error fetching details" message={`This Id ${id} is Not found or Something else `} buttonText='Go back' />;
  }

  }



}

export default AppPostView;
