import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Events from "./routes/Events";
import Children from "./routes/Children";
import Boishakh from "./routes/Boishakh";
import EkCupCha from "./routes/EkCupCha";
import KpCulture from "./routes/KpCulture";
import KpNews from "./routes/KpNews";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/children" element={<Children />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ekCupCha" element={<EkCupCha />} />
        <Route path="/boishakh" element={<Boishakh />} />
        <Route path="/kpCulture" element={<KpCulture />} />
        <Route path="/kpNews" element={<KpNews />} />
      </Routes>
    </div>
  );
}
