import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/Login";
import SignUp from "./pages/SignUp/SignUp";
import Request from "./pages/Request/Request";
import CourseRequest from "./pages/CourseRequest/CourseRequest";
import AccountSetUpEmail from "./pages/AccountSetUp/Email/Email";
import AccountSetUpNamePassword from "./pages/AccountSetUp/NamePassword/NamePassword";
import AccountSetUpCompanyName from "./pages/AccountSetUp/CompanyName/CompanyName";
import AccountSetUpUsers from "./pages/AccountSetUp/AccountSetUpUsers/AccountSetUpUsers";

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
                <Route
                    path="/accountsetup/users"
                    element={<AccountSetUpUsers />}
                />
            </Routes>
        </Router>
    );
}

export default App;
