import { useState } from "react";
// import ReactDOM from "react-dom";
import "./App.scss";
import Header from "../../Header";
import Login from "../Login/Login";
// import Dashboard from "../user_dashboard/Dashboard";
// import DietarySettings from "../user_dashboard/DietarySettings";
// import AccountInfo from "../user_dashboard/AccountInfo";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <Header />
      <div className="App">
        <div className="sidebar">
          <p className="sidebar-text">links to:</p>
          <li className="sidebar-text">About</li>
          <li className="sidebar-text">How To</li>
          <li className="sidebar-text">Menu</li>
        </div>
        <div className="mainpage">
          <h1>Home Page "/"</h1>
        </div>
      </div>
      {/* <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/DietarySettings">
              <DietarySettings />
            </Route>
          </Routes>
        </BrowserRouter>
      </div> */}
    </>
  );
}

export default App;

// ROUTES

// - /about (get)
// - /how to (get)
// - /menu (get, create, update, post)
//     - /meal (get)
//           - /recipe (get)
//      -/grocery list (get, update, post???)
