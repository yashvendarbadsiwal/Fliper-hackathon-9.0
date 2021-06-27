import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Link } from "react-router-dom";
import "../style/login.css";

class login extends Component{
  
  responseGoogle = (response) =>{
    console.log(response);
    console.log(response.profileObj); 
  }

  render(){
    return(
      <div classNameName="login">
        <div classNameName="container">
        <div id="intro" className="bg-image shadow-2-strong">
       <div className="mask d-flex align-items-center h-100 forbag">
         <div className="container">
           <div className="row justify-content-center">
             <div className="col-xl-5 col-md-8">
               <form className="bg-white  rounded-5 shadow-5-strong p-5">
                 {/* <!-- Email input --> */}
                 <div className="form-outline mb-4">
                   <input type="email" id="form1Example1" className="form-control" name="Email" />
                   <label className="form-label" for="form1Example1">Email address</label>
                 </div>
 
                 {/* <!-- Password input --> */}
                 <div className="form-outline mb-4">
                   <input type="password" id="form1Example2" className="form-control" name="password" />
                   <label className="form-label" for="form1Example2">Password</label>
                 </div>
 
                 {/* <!-- 2 column grid layout for inline styling --> */}
                 <div className="row mb-4">
                   <div className="col d-flex justify-content-center">
                    {/*  <!-- Checkbox --> */}
                     <div className="form-check">
                       <input className="form-check-input" type="checkbox" value="" id="form1Example3"  />
                       <label className="form-check-label" for="form1Example3">
                         Remember me
                       </label>
                     </div>
                   </div>
 
                   <div className="col text-center">
                     {/*<!-- Simple link --> */}
                     <a href="#!">Forgot password?</a>
                   </div>
                 </div>
 
                 {/* <!-- Submit button --> */}
                 <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                 <div className="col">
                     {/*<!-- Simple link --> */}
                   <span>* don't have an account <Link to="/register">Register here </Link></span>  
                   </div>
                  <hr/>
                   <div>
                    <GoogleLogin 
                      clientId="193577459583-r55oh4o0b4k1umbrc327k3k7sk2eammr.apps.googleusercontent.com"
                      buttonText="Sign in with Google Account"
                      onSuccess={this.responseGoogle}
                      onFailure={this.responseGoogle}
                      cookiePolicy={'single_host_origin'}
                    />
                   </div>
 
               </form>
             </div>
           </div>
         </div>
       </div>
     </div>
  
        </div>
 
      </div>
  )
  }

}

export default login;