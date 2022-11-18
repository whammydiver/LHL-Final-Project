import './App.css';
import Header from './Header'

function App() {
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