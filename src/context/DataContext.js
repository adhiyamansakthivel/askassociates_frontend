import React from "react";
import APIEndPoints from "../utils/APIEndPoints";
import { useAPIGet } from "../services/APIService";

export const DataContext = React.createContext({
  pageTitle: "Home",
  setPageTitle: () => {},
  activeNavbar: "Home",
  setActiveNavbar: () => {},
  businessContants: "",
  setBusinessContants: () => {},
  whatsappUs: "",
  setWhatsappUs: () => {},
});


console.log(`business: ${DataContext.PageTitle}`);


export const DataProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = React.useState("");
  const [activeNavbar, setActiveNavbar] = React.useState("");
  const [businessContants, setBusinessContants] = React.useState("");
  const [whatsappUs, setWhatsappUs] = React.useState("");

  const apiBusinessDet = useAPIGet(
    "businessDetails",
    "businessDetails",
    `${APIEndPoints.GetBusiness.url}`,
    {
      enabled: !!APIEndPoints?.GetBusiness?.url,
      refetchOnWindowFocus: false,
      staleTime: 0,
    }
  );



  React.useEffect(() => {


    if (!apiBusinessDet.isError && apiBusinessDet.isSuccess) {
      const ourBusinessList = apiBusinessDet?.data?.data?.data
      const ourWhatsapp = {
        whatsappUrl: `https://wa.me/+91${apiBusinessDet?.data?.data?.data?.whatsapp}/?text=Hi, Ask Associates! %0a`,
        whatsappnumber: apiBusinessDet?.data?.data?.data?.whatsapp,
      };
    
      
      setBusinessContants(ourBusinessList);
      setWhatsappUs(ourWhatsapp);
    }
  }, [apiBusinessDet.isSuccess])





  return (
    <DataContext.Provider
      value={{
        pageTitle,
        setPageTitle,
        activeNavbar,
        setActiveNavbar,
        businessContants,
        setBusinessContants,
        whatsappUs,
        setWhatsappUs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
