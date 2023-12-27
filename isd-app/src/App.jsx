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
  Users,
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
        <Route path="/accountsetup/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
