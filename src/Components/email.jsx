import React from "react";

const email = () =>{
    return(
        <div className="for_email">
          <div className="gradient-custom shadow-2-strong">
              <div className="container py-5  w-100 mt-1">
                  <div className="card shadow-2-strong">
                      <div className="row justify-content-center h-100">
                       <div className="col-8 col-lg-9 col-xl-5 mt-3 ">
                       <div> 
         <div className="container">
             <div>
                 <h3>Compose Email</h3>
             </div>
          <form>
               <div className="row pt-5 mx-auto">
                   
                   <div className="col-8 form-group pt-2 mx-auto">
                       <input type="email" className="form-control" placeholder="From_Email_ID" name="From_email" />
                   </div>
                   <div className="col-8 form-group pt-2 mx-auto">
                       <input type="text" className="form-control" placeholder="To_Email_ID" name="email" />
                   </div>
                   <div className="col-8 form-group pt-2 mx-auto">
                       <input type="email" className="form-control" placeholder="bcc" name="bcc" />
                   </div>
                   <div className="col-8 form-group pt-2 mx-auto">
                       <input type="email" className="form-control" placeholder="cc" name="cc" />
                   </div>
                   <div className="col-8 form-group pt-2 mx-auto">
                       <input type="text" className="form-control" placeholder="subject" name="subject" />
                   </div>
                   <div className="col-8 form-group pt-2 mx-auto">
                       <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" ></textarea>
                   </div>
                   <div className="col-8 pt-3 mx-auto">
                       <input type="submit" className="btn btn-primary" value="send"></input>
                   </div>
                   
               </div>
          </form>
        </div>
     </div>

                       </div>
                      </div>
                  </div>

              </div>
          </div>


        </div>
    )
}

export default email;