import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import RatingPage from "./pages/RatingPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/RatingPage" element={<RatingPage />} />
    </Routes>
  );
}
