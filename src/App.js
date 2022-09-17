import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Destinations from "./routes/Destinations";
import Technology from "./routes/Technology";
import Crew from "./routes/Crew";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destinations />}></Route>
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
