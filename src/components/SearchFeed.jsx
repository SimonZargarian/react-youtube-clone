import { useState, useEffect } from "react"; // Import useState and useEffect hooks for state management and side effects
import { Typography, Box } from "@mui/material"; // Import MUI components for layout and text styling
import { useParams } from "react-router-dom"; // Import useParams hook to access route parameters

import { fetchFromAPI } from "../utils/fetchFromAPI"; // Import a utility function to fetch data from an API
import { Videos } from "./"; // Import Videos component for displaying video lists

// Define the SearchFeed component
const SearchFeed = () => {
  const [videos, setVideos] = useState(null); // State variable to store video data, initialized as null
  const { searchTerm } = useParams(); // Retrieve 'searchTerm' from the URL parameters

  // useEffect hook to perform side effects, in this case, fetching data based on the searchTerm
  useEffect(() => {
    // Call the API utility function with the appropriate query parameters
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items)) // Update the videos state with the fetched data
  }, [searchTerm]); // Dependency array containing searchTerm to re-run the effect when searchTerm changes

  // Component return statement with JSX layout
  return (
    // Box as the main container with padding and minimum height set
    <Box p={2} minHeight="95vh">
      {/* Typography for displaying the search results heading */}
      <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: "100px"}}>
        {/* Display the search term in the heading, highlighted in a specific color*/}
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      {/* Another Box to structure the layout for video display*/}
      <Box display="flex">
        {/* An empty Box used as a spacer or margin to the right, responsive to screen size*/}
        <Box sx={{ mr: { sm: '100px' } }}/>
        {/* Render the Videos component passing the fetched videos data*/}
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed; // Export the SearchFeed component for use elsewhere in the application
