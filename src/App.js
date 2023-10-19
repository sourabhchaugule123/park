// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, {useRef} from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './Home';
// import Start from './Start';
// import SignIn from './SignIn';
// import Rent from './RenterSignIn';
// import Owner from './OwnerSignin';

// function App() {
  
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/start">Start</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/start" element={<Start />} />
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/signin/rent" element={<Rent />} />
//           <Route path="/signin/owner" element={<Owner />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Start from './Start';
import SignIn from './SignIn';
import RenterSignIn from './RenterSignIn';
import OwnerSignin from './OwnerSignin';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/start">Start</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/start" element={<Start />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signIn/RenterSignIn" element={<RenterSignIn />} />
          <Route path="/signIn/OwnerSignin" element={<OwnerSignin/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

