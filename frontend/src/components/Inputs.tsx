import { ChangeEvent } from "react";

interface LabelledInputType{
    label:string;
    placeholder:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
    type?:string;
}

export const Inputs=({label, placeholder, onChange, type}:LabelledInputType)=>{
    return <div>
        <div className="w-96">
            <label className=" block mt-4 font-black text-md">{label}</label>
            <input type={type} onChange={onChange} className="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder={placeholder}></input>
        </div>
        
    </div>
}