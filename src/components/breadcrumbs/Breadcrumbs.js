import React from "react";

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <div
        className="page-header d-flex align-items-center"
        style="background-image: url('');"
      >
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Sample Inner Page</h2>
              <p>
                Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                quaerat ipsum dolorem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="container">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>Sample Inner Page</li>
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
