import "./Request.scss";
import { Link } from "react-router-dom";

const Request = () => {
  return (
    <main className="requests-main">
      <div className="requests-container">
        <h1 className="mr-auto title">Requests</h1>

        <Link to="/courserequest">
          <button className="btn btn-primary">Create Request</button>
        </Link>
      </div>
    </main>
  );
};

export default Request;
