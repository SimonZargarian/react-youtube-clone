import React, { useEffect, useState } from "react"; // Import necessary hooks from React
import { Box, Stack, Typography } from "@mui/material"; // Import UI components from MUI for layout and text

import { fetchFromAPI } from "../utils/fetchFromAPI"; // Import function to fetch data from API
import { Videos, Sidebar } from "./"; // Import custom components used in the feed

// Define the Feed component
const Feed = () => {
  // State to manage the currently selected category for videos
  const [selectedCategory, setSelectedCategory] = useState("New");
  // State to store the list of videos fetched from the API
  const [videos, setVideos] = useState(null);

  // useEffect hook to fetch videos whenever the selectedCategory changes
  useEffect(() => {
    setVideos(null); // Clear previous videos when category changes

    // Fetch videos from API based on selected category
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items)) // Update the videos state with the fetched data
    }, [selectedCategory]); // Depend on selectedCategory to refetch when it changes

  // Return JSX structure for the Feed component
  return (
    // Stack component for layout, switches direction based on screen size
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* Sidebar container with custom styling for different screen sizes */}
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        {/* Sidebar component to allow category selection */}
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        {/* Placeholder for potential copyright information (currently empty) */}
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
        </Typography>
      </Box>

      {/* Main content area for videos */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        {/* Header displaying the selected category */}
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        {/*} Highlight category in UI*/}
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span> 
        </Typography>

        {/* Videos component to display videos for the selected category */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed; // Export the Feed component for use in other parts of the application
