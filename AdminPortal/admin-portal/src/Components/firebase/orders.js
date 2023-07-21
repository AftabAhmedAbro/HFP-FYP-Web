// ../firebase/orders.js
import firebaseConfig from '../firebaseAuth';
import { initializeApp } from '@firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export function retrieveOrderData() {
    return new Promise((resolve, reject) => {
        getDocs(collection(firestore, 'orders'))
            .then((querySnapshot) => {
                const orderData = [];
                querySnapshot.forEach((doc) => {
                    orderData.push(doc.data());
                });
                resolve(orderData);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export default retrieveOrderData;
