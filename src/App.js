
import Footer from "./components/Footer";
import MenuTabs from "./components/MenuTabs";
import Navbar from "./components/Navbar";
import Tab from "./components/Tab";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <Navbar />
      <MenuTabs />
      <Tab />
      <Footer/>
      {/* <Testimonial />
      <Tab />
      <MenuTabs/>
      <Footer/> */}
    </div>
  );
}

export default App;
