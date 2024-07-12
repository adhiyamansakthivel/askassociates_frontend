import React from "react";
import ReactDOM from 'react-dom/client'
import GLightbox from "glightbox";

import App from "./App";

// We are using below line to pull web.config file into dist folder.
const webpack = require('./assets/static/web.config')

//Bootstrap Imports
import 'bootstrap/dist/js/bootstrap.bundle.js';

// //Template Main CSS File
import "./assets/css/main.css";

GLightbox({
  touchNavigation: true,
  loop: true,
  autoplayVideos: true,
  selector: ".glightbox"
});

const root = ReactDOM.createRoot(
  document.getElementById("root")
);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

