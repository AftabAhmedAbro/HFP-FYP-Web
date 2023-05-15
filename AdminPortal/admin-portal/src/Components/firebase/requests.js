import firebaseConfig from '../firebaseAuth';
import { initializeApp } from '@firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

const requestData = [];

getDocs(collection(firestore, 'requests'))
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            var request = doc.data();
            requestData.push(request);

            // Process the request data
            // ...
        });

        console.log(requestData);
    })
    .catch(function (error) {
        console.log('Error getting requests data:', error);
    });

export default requestData;

// Avoid exporting requestData, as it will be undefined when this file is imported
// export default requestData;

// import firebaseConfig from "../Components/firebaseAuth";
// import firebase from "firebase/app";
// import "firebase/firestore";

// firebase.initializeApp(firebaseConfig);
// var firestore = firebase.firestore();

// firestore.collection("requests").get()
//   .then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//       // Access individual documents
//       var requestData = doc.data();

//       // Process the request data
//       // ...
//     });
//   })
//   .catch(function(error) {
//     console.log("Error getting requests data: ", error);
//   });

// export default requestData;
