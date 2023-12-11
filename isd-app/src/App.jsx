import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/Login";
import SignUp from "./pages/SignUp/SignUp";
import Request from "./pages/Request/Request";
import CourseRequest from "./pages/CourseRequest/CourseRequest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/request" element={<Request />} />
        <Route path="/courserequest" element={<CourseRequest />} />
      </Routes>
    </Router>
  );
}

export default App;
