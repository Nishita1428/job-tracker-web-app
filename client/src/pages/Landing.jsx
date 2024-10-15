import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import Logo from "../components/Logo";
const Landing = () => {
  return (
    <Wrapper>
      <nav style={{ paddingRight: "1900px" }}>
        <Logo />
      </nav>
      <div className="container-page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p style={{ fontWeight: "bold" }}>
            The Job Tracker App is a comprehensive and user-friendly tool
            designed to help individuals manage their job search process
            efficiently. Whether you're actively seeking new opportunities or
            simply keeping an eye on potential career moves, this app provides
            all the necessary features to organize, track, and optimize your job
            search activities.
          </p>
          <div>
            <Link to="/register" className="btn register-link">
              Register
            </Link>
            <Link to="/login" className="btn">
              Login / Demo user
            </Link>
          </div>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
