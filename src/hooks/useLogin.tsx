
"use client";
import { useEffect, useState } from 'react';
import { getToken} from '@/helper/SessionHelper';

const useLogin = (): boolean => {
   const [ login, setLogin] = useState<boolean>(false);

   useEffect(() => {
    const checkAuth = () => {
       if(getToken()){
         setLogin(true)
       }
    }

    checkAuth();
     
   }, []);

   return login;
};

export default useLogin;