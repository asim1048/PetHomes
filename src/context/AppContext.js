import {createContext, useState,useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const CatageoryContext=createContext(null);

const AppContext=({children})=>{
    const [userLogedIn,setuserLogedIn]=useState(false);
    
    const [forgetPasswordEmail,setForgetPasswordEmail]=useState();

    useEffect(() => {
        const fetchData = async () => {
    
          const value = await AsyncStorage.getItem('isUserLoggedIn')
            var v=false;
            if(value=="true"){
                v=true;
                setuserLogedIn(true);
            console.log('IsUserLoggedIn value is',value)
            }
            else if(value=="false"){
                setuserLogedIn(false);
                console.log('IsUserLoggedIn is',value)
            }  
        };
        fetchData();
      }, []);
    

    return(
        <CatageoryContext.Provider value={{
            userLogedIn,
            setuserLogedIn,
            forgetPasswordEmail,
            setForgetPasswordEmail
        }}>
           {children}
        </CatageoryContext.Provider>
    )
}
export default AppContext;
