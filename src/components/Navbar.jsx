import { Stack } from "@mui/material"; // Import Stack for layout from Material-UI
import { Link } from "react-router-dom"; // Import Link to handle routing within the app

import { logo } from "../utils/constants"; // Import logo URL from constants file
import { SearchBar } from "./"; // Import SearchBar component from the local directory

// Define the Navbar component
const Navbar = () => (
  // Stack component is used for layout; it arranges its children in a row.
  // alignItems="center" vertically centers the children.
  // p={2} applies padding around the content.
  // sx={{ position: "sticky", background: '#000', top: 0, justifyContent: "space-between" }}
  // styles the navbar to stick at the top of the page, with a black background, and
  // space the children out between the start and end of the row.
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    {/* Link component used for routing to the homepage ("/").
     It wraps around the logo, making the logo clickable and redirecting to the home page when clicked.
     style={{ display: "flex", alignItems: "center" }} makes sure the logo is flexibly displayed
     and centered with respect to its line height.*/}
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
     {/*  img tag for displaying the logo.
       src={logo} points to the image source which is imported from constants.
       alt="logo" provides an alternative text which describes the image.
       height={45} sets the height of the logo.*/}
      <img src={logo} alt="logo" height={45} />
    </Link>
    {/* SearchBar component is rendered here to allow users to search through the site.
     It is imported from the local directory and positioned in the navbar. */}
    <SearchBar />
  </Stack>
);

export default Navbar; // Export the Navbar component for use in other parts of the application
