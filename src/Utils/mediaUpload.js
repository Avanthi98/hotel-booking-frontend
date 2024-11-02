import app from "../Config/firebase.js";
import { getStorage,ref, uploadBytes } from "firebase/storage";
const storage = getStorage(app, "gs://my-custom-bucket")

export default function uploadMedia(file){
    if(file==null){
        return;
    }
    //Create a refference
    const fileRef=ref(storage,file.name);

    uploadBytes(fileRef,file).then((snapshot)=>{
        console.log("Uploaded the blob or file!");
    })
}
