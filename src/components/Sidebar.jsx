import React from "react"; // Import React library to use JSX and React features
import { Stack } from "@mui/material"; // Import Stack component from Material-UI for layout management

import { categories } from "../utils/constants"; // Import a list of categories from constants

// Define the Categories component, receiving selectedCategory and setSelectedCategory as props
const Categories = ({ selectedCategory, setSelectedCategory }) => (
  // Stack component acts as a container with a flexible direction setting
  <Stack
    direction="row" // Default direction is row, making categories appear side by side
    sx={{
      overflowY: "auto", // Enables scrolling vertically if content overflows
      height: { sx: "auto", md: "95%" }, // Responsive height setting, full height on medium devices
      flexDirection: { md: "column" }, // Changes direction to column on medium and larger devices
    }}
  >
    {categories.map((category) => ( // Map through categories array to render each category
      <button
        className="category-btn" // Assigns a class for potential CSS styling
        onClick={() => setSelectedCategory(category.name)} // Sets the selected category on click
        style={{
          background: category.name === selectedCategory && "#FC1503", // Changes background color if it's the selected category
          color: "white", // Sets text color
        }}
        key={category.name} // React key for efficient list rendering
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {category.icon} {/* Display category icon */}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name} {/* Display category name with conditional opacity */}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories; // Export the Categories component for use in other parts of the application
