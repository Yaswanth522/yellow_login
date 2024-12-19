import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import StudentPage from "./pages/StudentPage";
import InstructorPage from "./pages/InstructorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/instructor" element={<InstructorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
