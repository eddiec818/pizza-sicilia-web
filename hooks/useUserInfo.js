import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../firebase";

const useUserInfo = (email) => {
  const [userInfo, setUserInfo] = useState({});

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const getUserInfo = () => {
      firebase.db.collection("usersInfo")
      .where('email', '==', email).get()
      .then(snapshot =>{
        if (snapshot.empty) {
          console.log('No coincide con ningun documento')
          return ;
        }
          snapshot.forEach(doc => {
            setUserInfo({...doc.data(), id: doc.id});
          });
      })
      .catch(error => {
        console.log('Error obteniendo el documento', error);
      });
    };
    getUserInfo();
  }, [email]);

  return {
    userInfo,
  };
};

export default useUserInfo;
