import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
function TestComponent(){
    const [num,setNum]=useState(0);
    
    return(
        <div className="w-full h-[100vh] bg-blue-700 flex items-center justify-center">
            <div className="w-[250px] h-[250px] flex items-center justify-center bg-blue-400 gap-3">
            <button onClick={
                ()=>{
                    const newNum=num+1;
                    setNum(newNum)
                }
            }  ><FiPlusCircle className="w-[40px] h-[40px] bg-purple-500 rounded-full" />
                </button>

            <span className="text-[40px]">{num}</span>

            <button onClick={
                ()=>{
                    const newNum=num-1;
                    setNum(newNum)
                }
            } ><FiMinusCircle className="w-[40px] h-[40px] bg-pink-600 rounded-full"/>
            </button>
        </div>
        </div>
    )
}
export default TestComponent;