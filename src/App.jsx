import Header from "./components/Header";
import "./assets/css/style.css";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Reniebin from "./pages/RenieBin/Reniebin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RenieHub from "./pages/RenieHub/RenieHub";
import RenieApp from "./pages/RenieApp/RenieApp";
import RenieAds from "./pages/RenieAds/RenieAds";
import MediaHubMain from "./pages/MediaHubMain/MediaHubMain";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/renie-bins" element={<Reniebin />} />
          <Route path="/products/renie-hub" element={<RenieHub />} />
          <Route path="/products/renie-app" element={<RenieApp />} />
          <Route path="/services/ads" element={<RenieAds />} />
          <Route path="/news" element={<MediaHubMain />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
