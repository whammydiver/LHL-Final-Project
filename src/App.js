import './App.css';
import Header from './Header'

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <div className="sidebar">
          <div className="log-in">
           <span className="sidebar-text">Log-in</span> <br />
           <span className="sidebar-text">Sign-up</span>
          </div>
          <br/>
          <div>
            <p className="sidebar-text">Menu</p>
            <p className="sidebar-text">Grocery List</p>
            <p className="sidebar-text">Settings</p>
          </div>
        </div>
        <div className="mainpage">
          <h1>Home Page "/"</h1>
        </div>
      </div>
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