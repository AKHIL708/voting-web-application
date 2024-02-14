// import LoginSignUp from "./utils/signupANDlogin/LoginSignUp.jsx";
import Home from "./components/home/Home.jsx";
import CandidateSelection from "./components/candidateSelection/CandidateSelection.jsx";
import PrivateRoutes from "./utils/roleBasedAccessSetUp/PrivateRoutes.jsx";
import CreateAdminRoutes from "./utils/roleBasedAccessSetUp/CreateAdminRoutes.jsx";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.scss";
import Login from "./components/reusableComponents/login/Login.jsx";
import Navbar from "./components/reusableComponents/navbar/Navbar.jsx";
import UniversalButton from "./components/reusableComponents/universalButton/UniversalButton.jsx";
import Elections from "./components/election/Elections.jsx";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      {/* <Navbar /> */}
      {!pathname == "/login" && (
        <UniversalButton
          label="Vote Now"
          onClick={() => navigate("/elections")}
        />
      )}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/login"
          element={
            <PrivateRoutes requiredRole={"user"}>
              <Login />
            </PrivateRoutes>
          }
        />
        <Route exact path="/elections" element={<Elections />} />
        <Route exact path="/candidates" element={<CandidateSelection />} />

        {CreateAdminRoutes.map((data, index) => {
          return (
            <>
              <Route
                index={`route-number-${index}`}
                exact
                path={`admin/${data.path}`}
                element={
                  <PrivateRoutes requiredRole={data.requiredRole}>
                    {data.componentRender}
                  </PrivateRoutes>
                }
              />
            </>
          );
        })}

        <Route exact path="*" element={<> No Route Matched ! </>} />
      </Routes>
      {/* <Home /> */}
      {/* <CandidateSelection /> */}
    </>
  );
}

export default App;
