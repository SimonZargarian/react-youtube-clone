import React from "react"; // Import React library to build the component
import { Stack, Box } from "@mui/material"; // Import Stack and Box components from MUI for layout

// Import custom components to be used in displaying video and channel details
import { ChannelCard, Loader, VideoCard } from "./";

// Define the Videos component with props 'videos' for the video data and 'direction' for layout control
const Videos = ({ videos, direction }) => {
  // Check if there are no videos; if true, display a loading animation using the Loader component
  if(!videos?.length) return <Loader />;
  
  // Render the main component using Stack for layout; Stack allows children to be aligned and spaced efficiently
  return (
    // Stack component to arrange video/channel cards. The 'direction' prop controls the flex direction (row by default).
    // flexWrap allows items to wrap onto multiple lines as needed. justifyContent and alignItems set how items are aligned.
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => ( // Map over each video item to generate video or channel cards
        <Box key={idx}> {/*  Box acts as a container for each video/channel card. 'key' is used for React list efficiency. */}
          {item.id.videoId && <VideoCard video={item} />} {/* Conditional rendering of VideoCard if 'videoId' is present */}
          {item.id.channelId && <ChannelCard channelDetail={item} />} {/* Conditional rendering of ChannelCard if 'channelId' is present */}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos; // Export Videos component for use in other parts of the application
