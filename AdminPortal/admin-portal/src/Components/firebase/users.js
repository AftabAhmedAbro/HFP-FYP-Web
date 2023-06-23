import { collection, doc, setDoc, getDocs} from 'firebase/firestore';
import {db, storage} from '../firebaseAuth';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

export const saveProfile = async(data, email, setLoading)=>{
    setLoading(true);
    console.log(email);
    const imageRef = ref(storage, `images/profiles/${email}`);
    const uploadTask = uploadBytesResumable(imageRef, data.image);
    uploadTask.on('state_changed', function(snapshot){
        console.log("snapshot");
    },function(err){
        console.log(err);
    }, async function(){
         // download url
         await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            data.image = url;

            (async function(){
                const document = doc(db, 'users', email);
                await setDoc(document, data).then((res)=>{
                    alert('Data is updated');
                    setLoading(false);
                });
            })();
            
        });
    });
}

export const getOrders = async (setOrders)=>{
    const ordersRef = collection(db, "orders");
    const querySnapshot = await getDocs(ordersRef);
    const ordersList = [];
    querySnapshot.forEach((doc) => {
        var data = doc.data();
        ordersList.push(data);
    });
    setOrders(ordersList);
}