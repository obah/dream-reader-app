import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing/landing";
import { Dashboard } from "./pages/Dashboard/dashboard";
import { About } from "./pages/About/about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
