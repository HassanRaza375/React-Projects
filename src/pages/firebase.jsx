import React, { useState, useEffect, useRef } from "react";
import { initializeApp } from "firebase/app";
import AppName from "../components/appname";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const firebase = () => {
  const [inputValues, setInputValues] = useState([]);
  const handlefirebase = async () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDjn9V5NmkdprBh9rNtNUOZCIjR1CRa5o0",
      authDomain: "js-firebase-integration.firebaseapp.com",
      projectId: "js-firebase-integration",
      storageBucket: "js-firebase-integration.appspot.com",
      messagingSenderId: "870915685412",
      appId: "1:870915685412:web:251e98a270a020d68cacb1",
      measurementId: "G-Q4WEKK085V",
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "Recepies"));
    let dataarrayrecipies = [];
    querySnapshot.forEach((doc) => {
      const dataurl = doc.data();
      dataurl.id = doc.id;
      dataarrayrecipies.push(dataurl);
    });
    setInputValues(dataarrayrecipies);
  };
  useEffect(() => {
    console.log(inputValues);
  }, [inputValues]);

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <AppName />
            <button className="btn btn-primary" onClick={handlefirebase}>
              Click Init
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul className="list-group">
              lists
              {inputValues.map((e) => (
                <li className="list-group-item" key={e.id}>
                  {e.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default firebase;
