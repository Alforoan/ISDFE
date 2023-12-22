import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  LogIn,
  SignUp,
  Request,
  CourseRequest,
  AccountSetUpEmail,
  AccountSetUpNamePassword,
  AccountSetUpCompanyName,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/request" element={<Request />} />
        <Route path="/courserequest" element={<CourseRequest />} />
        <Route path="/accountsetup/email" element={<AccountSetUpEmail />} />
        <Route
          path="/accountsetup/name_password"
          element={<AccountSetUpNamePassword />}
        />
        <Route
          path="/accountsetup/company_name"
          element={<AccountSetUpCompanyName />}
        />
      </Routes>
    </Router>
  );
}

export default App;
