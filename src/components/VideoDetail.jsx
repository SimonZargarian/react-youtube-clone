import React, { useEffect, useState } from "react";  // Import React library to use JSX and React features
import { Link, useParams } from "react-router-dom";  // Import Link for navigation and useParams to access URL parameters
import ReactPlayer from "react-player";  // Import ReactPlayer for playing video content
import { Typography, Box, Stack } from "@mui/material";  // Import MUI components for UI construction
import CheckCircleIcon from "@mui/icons-material/CheckCircle";  // Import CheckCircleIcon for verified channel indicator

import { Videos, Loader } from "./";  // Import Videos and Loader components
import { fetchFromAPI } from "../utils/fetchFromAPI";  // Import function to fetch data from an API

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);  // State for storing video details
  const [videos, setVideos] = useState(null);  // State for storing related videos
  const { id } = useParams();  // Retrieve the 'id' param from the URL

  // useEffect to fetch data on component mount or when 'id' changes
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)  // Fetch the main video details
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)  // Fetch related videos
      .then((data) => setVideos(data.items))
  }, [id]);

  // Show loader while video details are not available
  if (!videoDetail?.snippet) return <Loader />;

  // Destructure necessary details from videoDetail object
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  // Return JSX structure for the video detail page
  return (
    <Box minHeight="95vh">  {/* Main container with minimum height */}
      <Stack direction={{ xs: "column", md: "row" }}>  {/* Responsive stack for layout */}
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>  {/* Sticky video player container */}
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />  {/* Video player */}
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>  {/* Video title */}
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >  {/* Container for channel link and stats */}
              <Link to={`/channel/${channelId}`}>  {/* Link to channel page */}
                <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#fff" >  {/* Channel title */}
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />  {/* Verified icon */}
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">  {/* Views and likes */}
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >  {/* Container for related videos */}
          <Videos videos={videos} direction="column" />  {/* Display related videos */}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;  // Export the VideoDetail component for use elsewhere in the application
