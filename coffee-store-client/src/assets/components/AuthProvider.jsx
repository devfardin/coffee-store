// import React, { useState } from 'react'
// import { createContext } from 'react'
// import App from '../../App';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// export const providerContext=createContext(null)


// const AuthProvider = ({children}) => {
//     const [user,setUser]=useState(null)
//     const auth = getAuth(App);


// const createNewUser=(email, password)=>{
// return createUserWithEmailAndPassword(auth, email, password)
// }



//  const authInfo={user,createNewUser} 

//   return (
//     <providerContext.Provider value={authInfo}>
//         {children}
//     </providerContext.Provider>
//   )
// }

// export default AuthProvider