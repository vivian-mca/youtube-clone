import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        {/* A `Route` component is typically used to declare the routing configuration of a web application, specifying what components should be rendered for each specific URL path. 

        What the properties mean:
        - `path`: specifies URL path to match
        - `element`: specifies the component to render when the path is matched
        - `exact`: specifies that the patch should match exactly, i.e., it should not match any URL paths that include additional segments after the specified path
        */}
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
