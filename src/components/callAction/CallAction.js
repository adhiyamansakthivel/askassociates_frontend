import { call } from "file-loader";
import React from "react";

const CallAction =()=>{

    return(
        <section id="call-to-action" className="call-to-action">
        <div className="container text-center" data-aos="zoom-out">
          <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
          <h3>Call To Action</h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a className="cta-btn" href="javascript:void(0)">Call To Action</a>
        </div>
      </section>
    )
}

export default CallAction;