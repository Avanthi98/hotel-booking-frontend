import {useState} from "react"
import uploadMedia from "../../Utils/mediaUpload.js"
export default function TestComponent(){
    const [file,setFile]=useState(null)
    return(
      
        <div className="w-full h-[100vh] bg-blue-300 flex items-center justify-center"> 
        <input type="file" defaultValue={file} onChange={(e)=>{
            setFile(e.target.files[0])
        }}></input>
        <button onClick={()=>{
            uploadMedia(file)
        }}>Submit</button>
        </div>
    )
}
