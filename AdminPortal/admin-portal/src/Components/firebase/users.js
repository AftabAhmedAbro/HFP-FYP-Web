import { doc, setDoc} from 'firebase/firestore';
import {db, storage} from '../firebaseAuth';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';

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