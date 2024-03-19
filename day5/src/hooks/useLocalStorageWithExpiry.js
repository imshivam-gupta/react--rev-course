import { useEffect, useState } from "react";

export default function useLocalStorageWithExpiry(key, intialValue, expiryInMinutres) {
    // const [value,setValue] = useState(localStorage.getItem(key) || intialValue);


    // function getValue(key){
    //     const data = localStorage.getItem(key);
    //     return data;
    // }


    // function changeValue(newVal){
    //     setValue(newVal);
    //     localStorage.setItem(key,newVal)
    // }

    // return [value,changeValue];

    const storedValueJSON = localStorage.getItem(key);
    let intialStoredValue = intialValue;
    const now = new Date().getTime();

    // 18 march
    // 21 march ->expiry

    if (storedValueJSON) {
        const { value, expiry } = JSON.parse(storedValueJSON);
        if (now < expiry) {
            intialStoredValue = value;
        }
    }

    const [storedValue, setStoredValue] = useState(intialStoredValue);

    useEffect(() => { 
        if(storedValue===null){
            localStorage.removeItem(key);
        } else{
            const expiry = new Date().getTime() + expiryInMinutres*60*1000;
            localStorage.setItem(key,JSON.stringify({value:storedValue,expiry}));
        }
    }, [key, storedValue, expiryInMinutres]);

    return [storedValue,setStoredValue];
}

/*
- const dipatch = useDispath()
- useEffect()-> dirach(getUser)
- I will try to read the vlaue from my redux store
- if user is there -> we will proceed else redirect
useAuth
useUserState
- D.R.Y. -> Dont Repeat Yourself
authentication

- Authentication Token Stored in Local Storage 
- JWT Token

*/