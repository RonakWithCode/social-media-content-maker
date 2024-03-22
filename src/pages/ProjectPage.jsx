import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ConfingDatabase from "../utils/ConfingDatabase"
import SideMenu from '../components/SideMenu ';

function ProjectPage() {
  const { id } = useParams();
  const folder = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const databaseService = new DatabaseService();
  // ConfingDatabase
  
  useEffect(() => {
    const fetchFolderDetails = async () => {
      try {

      } catch (error) {
        console.log(error);
      }
    };

    fetchFolderDetails();
  }, [id]);





  return (
    <SideMenu/>
  )
}

export default ProjectPage