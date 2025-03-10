import { Routes, Route } from "react-router-dom";

import CustomHeader from "./components/CustomHeader";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Landing from "./pages/Landing";
import Work from "./pages/Work";
import Message from "./Message";

function App() {
  return (
    <div>
      <CustomHeader />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
