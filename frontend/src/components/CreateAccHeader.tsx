import { Link } from "react-router-dom"

export const CreateAccHeader=({type}:{type:"signup" | "signin"})=>{
    return <div>
        <div className="flex justify-center">            
            <div className="text-black font-black text-4xl"	>
                {type==="signup"?"Create an Account":"Sign In"}
            </div>
        </div>
        <div className="flex justify-center">
            <div className="pt-4 text-slate-500 text-md ">
                {type==="signup"?"Already have an account?":"Don't have an account?"}
                <Link to={type==="signup"?"/signin":"/signup"} className="pl-2 underline text-blue-600">{type==="signup"?"Sign In":"Sign Up"}</Link>
            </div>
        </div>
    </div>
}