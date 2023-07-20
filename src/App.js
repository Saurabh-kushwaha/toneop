
import {Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MenuTabs from "./components/MenuTabs";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Slider/>} />
          <Route path="/menu" element={<MenuTabs/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
