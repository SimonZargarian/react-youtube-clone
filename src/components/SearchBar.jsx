import React, { useState } from 'react'; // Import React and useState hook for state management
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for programmatically navigating
import { Paper, IconButton } from '@mui/material'; // Import MUI components for UI layout and elements
import SearchIcon from '@mui/icons-material/Search'; // Import the search icon from MUI icons

// Define the SearchBar functional component
const SearchBar = () => {
  // useState hook to manage the search term state, initialized as an empty string
  const [searchTerm, setSearchTerm] = useState('');
  // useNavigate hook for navigation, provides the ability to navigate programmatically
  const navigate = useNavigate();

  // Function to handle form submission
  const onhandleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submit action

    // Check if searchTerm is not empty
    if (searchTerm) {
      // Use navigate to redirect the user to the search page with searchTerm as a URL parameter
      navigate(`/search/${searchTerm}`);

      // Clear the search input after submitting
      setSearchTerm('');
    }
  };

  // Return JSX for the search bar
  return (
    // Paper component from MUI as the base element styled as a form
    <Paper
      component='form' // Set the semantic HTML element type for accessibility
      onSubmit={onhandleSubmit} // Attach the handleSubmit function to form's onSubmit event
      sx={{ // Styling for the Paper component
        borderRadius: 20, // Rounded borders for aesthetics
        border: '1px solid #e3e3e3', // Light grey border around the form
        pl: 2, // Padding left to give some space inside the form
        boxShadow: 'none', // No shadow for a cleaner look
        mr: { sm: 5 }, // Right margin to separate it from other elements responsively
      }}
    >
      {/* Input field for entering search terms */}
      <input
        className='search-bar' // CSS class for potential styling
        placeholder='Search...' // Placeholder text for the input
        value={searchTerm} // Controlled input field bound to the searchTerm state
        onChange={(e) => setSearchTerm(e.target.value)} // Update state when text changes
      />
      {/* IconButton wrapping the SearchIcon*/}
      <IconButton type='submit' // Set button type to submit for form functionality
        sx={{ p: '10px', color: 'red' }} // Inline styles for padding and icon color
        aria-label='search' // Accessibility label for the button
      >
        <SearchIcon /> {/* Display the search icon inside the button*/}
      </IconButton>
    </Paper>
  );
};

export default SearchBar; // Export the SearchBar component for use in other parts of the application
