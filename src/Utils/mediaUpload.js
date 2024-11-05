import app from "../Config/firebase.js";
import { getStorage,ref, uploadBytes } from "firebase/storage";

const storage = getStorage(app, "gs://my-custom-bucket")

export default function uploadMedia(file){
    if(file==null){
        console.log("No file selected!");
        return;
    }
    //Create a refference
    const fileRef=ref(storage,file.name);

    return uploadBytes(fileRef,file)
}
