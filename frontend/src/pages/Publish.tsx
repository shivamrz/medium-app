import { ChangeEvent, useState } from "react"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Publish=()=>{
    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("");
    const Navigate=useNavigate();
    return <div>
        <Appbar/>
        <div className="flex justify-center pt-8 w-full">
            <div className="max-w-screen-lg w-full">
                <input type="text" onChange={(e)=>{
                    setTitle(e.target.value)
                }} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title"/>
                
                <TextEditor onChange={(e)=>{
                    setDescription(e.target.value)
                }}/>

                <div className="flex justify-center pt-4">
                    <button onClick={async ()=>{
                        const response=await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                            title,
                            content : description
                        },{
                            headers:{
                                Authorization:localStorage.getItem("token")
                            }
                        })
                        Navigate(`/blog/${response.data.id}`)
                    }} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-white-200 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                        Publish Post
                    </button>        
                </div>
            </div>
        </div>
    </div>
}

function TextEditor({ onChange }:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}){
    return <div>
        <textarea onChange={onChange} className="description w-full mt-8 bg-gray-100 sec p-3 h-60 border border-gray-300  focus:ring-blue-500 focus:border-blue-500"  placeholder="Describe everything about this post here"></textarea>    
    </div>
}