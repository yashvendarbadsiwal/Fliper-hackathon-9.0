import React from "react";
import { Link } from "react-router-dom";
import "../style/register.css";

const register = (props) => {
 return(
     <div className="register">
       <section className="gradient-custom shadow-2-strong ">
<div className="forbag">         
  <div className="container py-5 h-100 ">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration forb">
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="firstName" name="fnm" className="form-control form-control-sm" />
                    <label className="form-label" for="firstName">First Name</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="lastName" name="lnm" className="form-control form-control-sm" />
                    <label className="form-label" for="lastName">Last Name</label>
                  </div>

                </div>
              </div>

              <div className="row">
                
                <div className="col-md-6 mb-4">

                  <h6 className="mb-2 pb-1">Gender: </h6>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderfemale"
                      id="femaleGender"
                      value="option1"
                      checked
                    />
                    <label className="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gendermale"
                      id="maleGender"
                      value="option2"
                      
                    />
                    <label className="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderother"
                      id="otherGender"
                      value="option3"
                    />
                    <label className="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="email" id="emailAddress" className="form-control form-control-sm" name="Email" />
                    <label className="form-label" for="emailAddress">Email</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="tel" id="phoneNumber" className="form-control form-control-sm" name="Password" />
                    <label className="form-label" for="password">Password</label>
                  </div>

                </div>
              </div>
            
              <div className="mt-4 pt-2">
                <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div> 
</section>

     </div>
 )    

}

export default register;