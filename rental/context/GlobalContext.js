"use client";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [unreadcount, setUnreadCount] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        unreadcount,
        setUnreadCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
