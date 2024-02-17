import React, { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import app from "./assets/confige.firebage";
export const ProviderContext=createContext(null)
const auth=getAuth(app)

const AppContext = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)

    const haldelCreateUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const haldelGooglepop=(provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const loginWithEmailPass=(email, password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

 
    const authInfo={user,loading,loginWithEmailPass, haldelCreateUser, haldelGooglepop}
  return (
    <ProviderContext.Provider value={authInfo}>
        {children}
    </ProviderContext.Provider>
  )
}

export default AppContext