import axios from "axios";
import { createContext, useLayoutEffect, useState } from "react";

// creating context object
export const DataContext = createContext({});

// creating the context provider component for passing the data
export const DataProvider = ({ children }) => {
  
  const [userData, setUserData] = useState();

  // Calling api crypto data
  const getTableData = async () => {
    try {
      const response = await axios.get(
        `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`
      );
        // console.log("users data =>", response.data);
        setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };



  useLayoutEffect(() => {
    getTableData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        userData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

