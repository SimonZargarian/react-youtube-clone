import React from 'react';  // Import React for component creation
import { Link } from "react-router-dom";  // Import Link from react-router-dom for client-side navigation
import { Typography, Card, CardContent, CardMedia } from "@mui/material";  // Import MUI components for UI construction
import CheckCircleIcon from "@mui/icons-material/CheckCircle";  // Import CheckCircleIcon for verified channel indicator

// Import constants for demo data as placeholders
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

// Define the VideoCard component with destructured video object properties
const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  // Card component from MUI styled for display
  <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px" }, boxShadow: "none", borderRadius: 0 }}>
    {/* Link to video page using videoId, or to a demo video if no id is present */}
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      {/* CardMedia displays video thumbnail or a demo thumbnail if not available */}
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
        alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      />
    </Link>
    {/* CardContent for text content of the card */}
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      {/* Link to the same video page as the thumbnail */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {/* Typography for video title, truncated to 60 characters */}
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      {/* Link to the channel page using channelId, or to a demo channel if no id is present */}
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        {/* Typography for channel name, includes a CheckCircleIcon indicating a verified channel */}
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;  // Export the component for use elsewhere in the application
