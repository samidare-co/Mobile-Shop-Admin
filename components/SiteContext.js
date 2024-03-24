import { createContext, use, useState, useEffect } from 'react'

export const SiteContext = createContext({})

export function SiteContextProvider({ children }) {
  const [selectedSite, setSelectedSite] = useState('MobileStore')

  function changeSite(newSite) {
    setSelectedSite(newSite)
  }

  return (
    <SiteContext.Provider value={{ selectedSite, setSelectedSite, changeSite }}>
      {children}
    </SiteContext.Provider>
  )
}
