import React from 'react'; // Import React to build components
import { Box, CircularProgress, Stack } from '@mui/material'; // Import MUI components for layout and UI elements

// Define the Loader component
const Loader = () =>  (
  // Box is a utility component from MUI used here as the outer container for the loader.
  // It sets a minimum height to occupy a large part of the screen.
  <Box minHeight="95vh">
    // Stack is another layout component from MUI, configured here to arrange child components along a row.
    // It centers content both horizontally and vertically within its bounds.
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh'>
      // CircularProgress is an MUI component that displays a circular loading spinner.
      // It is used here to visually indicate that a process is ongoing, typically data fetching or processing.
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader; // Export the Loader component for use in other parts of the application
