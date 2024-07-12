import React from "react";
import { useNavigate } from "react-router-dom";

import "./notFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/`);
    window.location.reload();
  };

  return (
    <>
      <section className="notFound-page">
        <div className="container" data-aos="fade-up">
          <div className="not-found-container">
            <div className="circle-icon"></div>
            <h3 className="error-title">404 Page not found</h3>
            <button onClick={onClickHandler}>Reload</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
