import firebaseConfig from "../Components/firebaseAuth";
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

firestore.collection("requests").get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      // Access individual documents
      var requestData = doc.data();
      
      // Process the request data
      // ...
    });
  })
  .catch(function(error) {
    console.log("Error getting requests data: ", error);
  });

export default requestData;
