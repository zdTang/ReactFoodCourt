import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Settings from "./components/Settings/Settings";
import Navigation from "./components/UI/Navigation";
import Main from "./Main";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
