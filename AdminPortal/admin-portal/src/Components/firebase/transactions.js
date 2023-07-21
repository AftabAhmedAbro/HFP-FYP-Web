import firebaseConfig from '../firebaseAuth';
import { initializeApp } from '@firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
export const transactionData = [];
export const retrieveTransactionData = async () => {
    try {
        const querySnapshot = await getDocs(
            collection(firestore, 'transactions'),
        );

        querySnapshot.forEach((doc) => {
            const transaction = doc.data();
            transactionData.push(transaction);
            console.log(transaction);
        });

        // Process the transaction table data
        // ...

        return transactionData;
    } catch (error) {
        console.log('Error getting transaction data:', error);
        return [];
    }
};

// export default retrieveTransactionData;

// import firebaseConfig from '../firebaseAuth';
// // import firebase from '@firebase/app';
// import { initializeApp } from '@firebase/app';
// import { getFirestore } from 'firebase/firestore';

// import 'firebase/firestore';
// const firebaseApp = initializeApp(firebaseConfig);

// // Reference the Firestore database
// const firestore = getFirestore(firebaseApp);

// // Retrieve the transaction table data
// firestore
//     .collection('transactions')
//     .get()
//     .then(function (querySnapshot) {
//         var transactionData = [];

//         querySnapshot.forEach(function (doc) {
//             var transaction = doc.data();
//             transactionData.push(transaction);
//             console.log(transaction);
//         });

//         // Process the transaction table data
//         // ...
//     })
//     .catch(function (error) {
//         console.log('Error getting transaction data: ', error);
//     });
// export default transactionData;
