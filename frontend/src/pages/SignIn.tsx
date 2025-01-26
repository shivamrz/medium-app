import { useState } from "react"
import { CreateAccHeader } from "../components/CreateAccHeader"
import { Inputs } from "../components/Inputs"
import { Quotes } from "../components/Quotes"
import { SigninInput } from "@shivamrz/medium-common"
import { Button } from "../components/Button"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const SignIn= ()=>{

    const Navigate=useNavigate();
    const [postInputs, setPostInputs]=useState<SigninInput>({
        email:"",
        password:"",
    })

    async function sendRequest(){
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs);
            const jwt=response.data.jwt;
            localStorage.setItem("token", jwt);
            Navigate("/blogs");
        } catch (e) {
            alert("Error while Signing In!")
        }
    }

    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-screen flex justify-center flex-col">
                <div>
                    <div className="flex justify-center">
                        <CreateAccHeader type="signin"/>             
                    </div>
                    <div className="grid grid-rows-2 pt-10 flex justify-center">
                        <Inputs label="Email" placeholder="Enter your Email" onChange={(e)=>{
                            setPostInputs({
                                ...postInputs,
                                email: e.target.value
                            })
                        }}/>

                        <Inputs type="password" label="Password" placeholder="Enter your Password" onChange={(e)=>{
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value
                            })
                        }}/>
                    </div>
                </div>
                <div>
                    <Button onClick={sendRequest} label="Sign In"/>
                </div>
            </div>
            <Quotes/>
        </div>
    </div>
}