import React from "react";
import APIEndPoints from "../utils/APIEndPoints";
import { useAPIGet } from "../services/APIService";




export const apiheaderBusinessDet = useAPIGet(
    "headerBusinessDet",
    "headerBusinessDet",
    `${APIEndPoints.GetBusiness.url}`,
    {
      enabled: !!APIEndPoints?.GetBusiness?.url,
      refetchOnWindowFocus: false,
      staleTime: 0,
    }
);





   


