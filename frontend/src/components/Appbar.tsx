import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
import img from '../assets/download.png';

export const Appbar=()=>{
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer text-xl font-extrabold">
            <div className=" flex text-xl">
                <img className="h-10 w-44"
                src={img}
                alt="Medium" />
            </div>
        </Link>
        
        <div className="">
            <Link to={'/publish'}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                    Publish
                </button>
            </Link>
            <Avatar size="big" Name={"Unknown"}/>
        </div>
    </div>
}

// Thank You