import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";

//-------------------Admin Panel--------------------//
const Homepage = lazy(() => import("../components/Homepage"));
const Page1 = lazy(() => import("../components/Page2"));

const RouteIndex = () => {
  return (
    <Router>
      <Routes>
        <Route path="/page1" element={<Homepage />} />
        <Route path="/" element={<Page1 />} />

        <Route path="*" element={<Page1 />} />
      </Routes>
    </Router>
  );
};

export default RouteIndex;
