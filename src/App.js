import React, { useEffect, Suspense } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import {  HelmetProvider } from 'react-helmet-async';
// import { ReactQueryDevtools } from '@tanstack/react-query/devtools'
import AOS from "aos";
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';

import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import { DataProvider } from "./context/DataContext";
import Spinner from "./baseComponent/spinner/Spinner";
import Router from "./routes/Router";

import "swiper/css/bundle";
import "./App.scss";

const helmetContext = {};


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  useEffect(() => {
    /**
     * Preloader
     */
    // const preloader = document.querySelector("#preloader");
    // if (preloader) {
    //     preloader.remove();
    // }

    /**
     * Animation on scroll function and init
     */
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }
    aos_init();
  }, []);

  return (
    <>
      <HelmetProvider context={helmetContext}>
        <ErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Spinner />}>
              <DataProvider>
                <Router />
                <ToastContainer />
              </DataProvider>
            </Suspense>
            {/* <ReactQueryDevtools position="bottom-right" /> */}
          </QueryClientProvider>
        </ErrorBoundary>
      </HelmetProvider>
    </>
  );
};

export default App;
