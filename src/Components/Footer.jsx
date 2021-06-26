import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    
    <footer class="bg-dark text-center text-light shadow">
    
      <div class="container p-4">
        
        <section class="mb-4">
         
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-facebook-f"></i
          ></a>
    
       
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-twitter"></i
          ></a>
    
          
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-google"></i
          ></a>
    
          
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-instagram"></i
          ></a>
    
          
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-linkedin-in"></i
          ></a>
    
          
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-github"></i
          ></a>
        </section>
        {/* <!-- Section: Social media --> */}
    
      
        {/* <!-- Section: Text --> */}
        <section class="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
            eum harum corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>
        {/* !-- Section: Text --> */}
    
       
      </div>
      {/* <!-- Grid container --> */}
    
      {/* <!-- Copyright --> */}
      <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2);"}}>
        © 2020 Copyright:
       </div>
     {/*  <!-- Copyright --> */}
    </footer>
    
     
  
    )
};

export default Footer;
