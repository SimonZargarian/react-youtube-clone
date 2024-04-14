import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import to access route parameters
import { Box } from "@mui/material"; // Import from Material-UI for layout and styling

// Custom imports for child components and utility functions
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

// Define the ChannelDetail component
const ChannelDetail = () => {
  // State management for channel details and videos
  const [channelDetail, setChannelDetail] = useState(); // Holds channel information
  const [videos, setVideos] = useState(null); // Holds video list for the channel

  const { id } = useParams(); // Retrieve the 'id' param from the route

  // Effect hook to fetch channel details and videos when component mounts or 'id' changes
  useEffect(() => {
    // Asynchronous function to fetch data from API
    const fetchResults = async () => {
      // Fetch channel details using the channel ID from the route parameter
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      // Set the fetched channel details into state
      setChannelDetail(data?.items[0]);

      // Fetch videos from this channel, ordering them by date
      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      // Set the fetched videos into state
      setVideos(videosData?.items);
    };

    fetchResults(); // Call the async function defined above
  }, [id]); // Dependency array containing 'id' to re-run effect when 'id' changes

  // Component return JSX structure
  return (
    <Box minHeight="95vh"> {/* Main container with a minimum height */}
      <Box> {/* Nested container for styling and layout */}
        <div style={{ // Stylish header background for visual appeal
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        {/* ChannelCard component displaying detailed information about the channel */}
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex"> {/* Container for video list with padding and flex display */}
        <Box sx={{ mr: { sm: '100px' } }}/> {/* Spacer box for margin on smaller screens */}
        {/* Videos component to display videos fetched from API */}
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail; // Export the component for use in other parts of the application
