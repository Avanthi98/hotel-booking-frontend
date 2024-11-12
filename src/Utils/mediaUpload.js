import app from "../Config/firebase.js";
import { getDownloadURL, getStorage,ref, uploadBytes } from "firebase/storage";

const storage = getStorage(app, "gs://hotel-management-41-ceda8.firebasestorage.app")

export default function uploadMedia(file){
    if(file==null){
        console.log("No file selected!");
        return;
    }
    //Create a reference
    const fileRef=ref(storage,file.name);

    uploadBytes(fileRef,file).then((snapshot)=>{
        console.log("Uploaded a blob or file!");
        getDownloadURL(snapshot.ref).then((url)=>{
            console.log(url);
        })
    })
    return uploadBytes(fileRef,file)
}
