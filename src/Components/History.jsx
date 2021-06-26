import React, { Component } from "react";
import "../style/history.css";

class History extends Component {
  render() {
    return(

      <div className="history">
        <div className="gradient-custom w-100 h-100">
          <br/>
          <div className="container w-100  mt-auto">
             <div className="card shadow-2-strong ">
               <div className="row justify-content-center h-100">
                 <div className="col-8 col-lg-9 col-xl-5 mt-3 p-3 ">
                  <div className="d-flex">
                    <h3>History</h3> 
                      <div class="input-group">
                        <div class="form-outline">
                          <input id="search-input" type="search" id="form1" class="form-control" />
                            <label class="form-label" for="form1">Search</label>
                        </div>
                          <button id="search-button" type="button" class="btn btn-primary">
                            <i class="fas fa-search"></i>
                          </button>
                      </div>

                  </div>
                
                   <div className=" card container-fluid shadow-5-strong d-flex">
                     <div>
                     <h5>sample@email.com</h5>
                    <p>message that was sent</p>
                    <p>time it was sent at</p>
                     </div>
                     <div className="float-left"> 
                       <button className="btn btn-primary btn-sm" type="button">View Details</button>
                     </div>
                     <br/>
                   </div>
                   <br/>
                   <div className=" card container-fluid shadow-5-strong d-flex">
                     <div>
                     <h5>sample@email.com</h5>
                    <p>message that was sent</p>
                    <p>time it was sent at</p>
                     </div>
                     <div className="float-left"> 
                       <button className="btn btn-primary btn-sm" type="button">View Details</button>
                     </div>
                     <br/>
                   </div>
                   <br/>
                   <div className=" card container-fluid shadow-5-strong d-flex">
                     <div>
                     <h5>sample@email.com</h5>
                    <p>message that was sent</p>
                    <p>time it was sent at</p>
                     </div>
                     <div className="float-left"> 
                       <button className="btn btn-primary btn-sm" type="button">View Details</button>
                     </div>
                     <br/>
                   </div>
                   <br/>
                   
                   
                 </div>
                  <br />
               </div> 
                 
             </div>
             <br/>
          </div>
        </div>
      </div>





    ) 
  }
}

export default History;
