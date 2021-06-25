import React from "react";

const Header = () => {
  return (
   
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
       <a className="navbar-brand">Flipremail</a>
       <button className="navbar-toggler" type="button" data-toggle="collaspse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarScroll">
         <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
           <li className="nav-item">
             <a className="nav-link ">Home</a>
           </li>
           <li className="nav-item">
             <a className="nav-link">History</a>
           </li>
           <li className="nav-item">
             <a className="nav-link">Draft new email</a>
           </li>
         </ul>
       </div>
      </div>
    </nav>

  
  );
};

export default Header;
