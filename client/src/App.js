import { Link } from "react-router-dom";
import Logo from "./components/images/study.jpg";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav className="mt-3">
            <img
              className="img-fluid"
              src={Logo}
              alt="..."
              style={{ width: "100px" }}
            />
            <span className="fs-2">study sphere</span>
            <div className="col text-end">
              <Link to="/signup">
                <span className="badge bg-success text-white mx-2 mt-3">signup</span>
              </Link>
            </div>
          </nav>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
