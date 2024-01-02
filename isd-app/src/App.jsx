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
  Error,
} from "./pages";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetAuthStatusQuery } from "./redux/RTKQueries/authQuery";
import { logIn, logOut } from "./redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const { data, error } = useGetAuthStatusQuery();

  useEffect(() => {
    // Check the authentication status
    if (data) {
      dispatch(logIn());
    }

    if (error) {
      dispatch(logOut());
    }
  }, [data, error, dispatch]);

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
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
