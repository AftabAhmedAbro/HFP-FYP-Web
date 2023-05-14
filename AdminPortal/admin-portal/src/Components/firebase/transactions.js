import firebaseConfig from '../firebaseAuth';
import firebase from 'firebase/app';
import 'firebase/firestore';
firebase.initializeApp(firebaseConfig);

// Reference the Firestore database
var firestore = firebase.firestore();

// Retrieve the transaction table data
firestore
    .collection('transactions')
    .get()
    .then(function (querySnapshot) {
        var transactionData = [];

        querySnapshot.forEach(function (doc) {
            var transaction = doc.data();
            transactionData.push(transaction);
            console.log(transaction);
        });

        // Process the transaction table data
        // ...
    })
    .catch(function (error) {
        console.log('Error getting transaction data: ', error);
    });
export default transactionData;
