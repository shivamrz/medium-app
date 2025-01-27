import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { Appbar } from "../components/Appbar";


export const Blog= ()=>{
    const { id }= useParams();
    const {loading, blog}=useBlog({
        id:id || ""
    });
    if(!blog || loading){
        return <div> 
            
            <div className="h-screen flex flex-col justify-center">
                <div className="flex justify-center">
                    <Spinner/>
                </div>
            </div>
        </div>
    }
    return <div>
        <FullBlog blog={blog} Published_date="January 24, 2025"/>
    </div>
}