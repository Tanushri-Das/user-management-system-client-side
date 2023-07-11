// import React from "react";

// const Header = () => {
//   return (
//     <nav class="navbar navbar-expand-lg bg-white shadow-sm py-3">
//       <div class="container">
//         <a class="navbar-brand fs-3" href="#">
//         UserEase
//         </a>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li class="nav-item fs-5">
//               <a class="nav-link active" aria-current="page" href="#">
//                 Home
//               </a>
//             </li>
//             <li class="nav-item fs-5">
//               <a class="nav-link" href="about">
//                 About
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;



import React from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2">
      <div className="container">
        <a className="navbar-brand fs-2 fw-semibold" href="/">UserEase</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-link fs-5 ${location.pathname === '/' ? 'active' : ''}`} href="/">
                {location.pathname === '/' ? <strong>Home</strong> : 'Home'}
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link fs-5 ${location.pathname === '/about' ? 'active' : ''}`} href="/about">
                {location.pathname === '/about' ? <strong>About</strong> : 'About'}
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link fs-5 ${location.pathname === '/contact' ? 'active' : ''}`} href="/contact">
                {location.pathname === '/contact' ? <strong>Contact</strong> : 'Contact'}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
