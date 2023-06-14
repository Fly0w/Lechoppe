import { useState, useEffect } from 'react';

export function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

// Get client's storage info to know whether the user is connected or not, and updates
// the state accordingly
    useEffect(() => {
        const getIsLoggedIn = localStorage.getItem('isLoggedIn');
        const getUser = JSON.parse(localStorage.getItem('userInfo'));

        if (getIsLoggedIn && getUser) {
        setIsLoggedIn(true);
        setUser(getUser);
        }
    }, []);

    useEffect(() => {
        console.log(user, isLoggedIn)
    }, [user,isLoggedIn])
  
// Function to verify the credentials. Returns the server's response for
// informational display client side 
    async function checkCredentials(userInfo) {
        const check = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({
                email: userInfo.email,
                password: userInfo.password
            })
        });
        return check
    }

// Function to get the UserInfo from the db. Returns the user's info object
    async function getUserInfo(userInfo) {
        const info = await fetch("/api/users/info", {
            method: "POST",
            body: JSON.stringify({
                email: userInfo.email,
            })
        });
        return info
    }


// Function that will first check the credentials, then, if the credentials are
// correct, will fetch the user's info from the database, and store them in the
// state and also in the client's localStorage
    async function login(userInfo) {
    try {
        //Send the info to the db to check user's credentials
        const responseCred = await checkCredentials(userInfo) ;
        const dataCred= await responseCred.json()
        if(dataCred){
            //get the user's info
            const responseInfo = await getUserInfo(userInfo) ;
            const info= await responseInfo.json()
            
            setIsLoggedIn(true);
            setUser(info);
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('userInfo', JSON.stringify(info));
    }
    // return the answer from the server, for informational display for the user
    return dataCred

    } catch (error) {
        console.log(error)
    }
  }


// Function that will erase the client's localStorage, as well as reseting the state
// of this component
    function logout() {
        const validation = confirm("Are you sure you want to Logout ?")
        if(validation){
            setIsLoggedIn(false);
            setUser(null);
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userInfo');
        }
        return
    }




  return {
    isLoggedIn,
    user,
    login,
    logout,
  };
}
