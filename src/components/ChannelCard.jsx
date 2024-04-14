import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

// ChannelCard component definition.
// It receives channelDetail and marginTop as props.
const ChannelCard = ({ channelDetail, marginTop }) => (
  // A Box component acts as the outer container for the card.
  // The sx prop applies inline styles to customize the appearance.
  <Box
    sx={{
      boxShadow: 'none', // Removes any shadow effect.
      borderRadius: '20px', // Rounded corners with a radius of 20px.
      display: 'flex', // Uses flexbox layout to center content.
      justifyContent: 'center', // Centers children horizontally.
      alignItems: 'center', // Centers children vertically.
      width: { xs: '356px', md: '320px' }, // Responsive width settings for different screen sizes.
      height: '326px', // Fixed height of the container.
      margin: 'auto', // Centers the box horizontally within its parent.
      marginTop, // Top margin passed as a prop to dynamically adjust spacing.
    }}
  >
    {/* Link component from react-router-dom allows navigation to the channel details page. */}
    {/* Uses channelId from channelDetail object to dynamically create the link. */}
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      {/* CardContent organizes content inside the card using flex layout. */}
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        {/* CardMedia displays the channel's thumbnail. */}
        {/* It falls back to a demo profile picture if the URL is not available. */}
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        {/* Typography for the channel title. */}
        {/* CheckCircleIcon is added next to the title to indicate a verified channel. */}
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
        {/* Conditionally render subscriber count if it exists. */}
        {/* Displays the count formatted as a string with commas for readability. */}
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard; // Exports the ChannelCard component for use in other parts of the application.
