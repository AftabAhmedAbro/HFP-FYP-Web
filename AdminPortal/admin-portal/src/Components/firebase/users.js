import {
    collection,
    doc,
    setDoc,
    getDocs,
    addDoc,
    getFirestore,
    Timestamp,
} from 'firebase/firestore';
import { app, db, storage } from '../firebaseAuth';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

export const saveProfile = async (data, email, setLoading) => {
    setLoading(true);
    console.log(email);
    const imageRef = ref(storage, `images/profiles/${email}`);
    const uploadTask = uploadBytesResumable(imageRef, data.image);
    uploadTask.on(
        'state_changed',
        function (snapshot) {
            console.log('snapshot');
        },
        function (err) {
            console.log(err);
        },
        async function () {
            // download url
            await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                data.image = url;

                (async function () {
                    const document = doc(db, 'users', email);
                    await setDoc(document, data).then((res) => {
                        alert('Data is updated');
                        setLoading(false);
                    });
                })();
            });
        },
    );
};

export const getOrders = async (setOrders) => {
    const ordersRef = collection(db, 'appointments');
    const querySnapshot = await getDocs(ordersRef);
    const ordersList = [];
    querySnapshot.forEach((doc) => {
        var data = doc.data();
        
        // Convert Firestore Timestamps to a suitable format
        if (data.timestampField instanceof Timestamp) {
            data.timestampField = data.timestampField.toDate(); // Convert to JavaScript Date
        }

        ordersList.push(data);
    });
    setOrders(ordersList);
};

export const setApprovedRecord = async (approved) => {
    const docRef = await addDoc(collection(db, 'approved'), approved);
    console.log('Record Approved');
    console.log('Document written with ID: ', docRef.id);
};

export const getApprovedRecords = async (setApprovedRecords) => {
    const appColRef = collection(db, 'approved');
    const querySnapshot = await getDocs(appColRef);
    const appList = [];
    querySnapshot.forEach((doc) => {
        var data = doc.data();
        appList.push(data);
    });
    setApprovedRecords(appList);
};
