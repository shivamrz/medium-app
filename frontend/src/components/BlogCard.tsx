import { Link } from "react-router-dom"

interface BlogCardType{
    authorName:string,
    publishedDate:string,
    title:string,
    content:string,
    id:string
}


export const BlogCard=({id,authorName, publishedDate, title, content}:BlogCardType)=>{
    return <Link to={`/blog/${id}`}>
        <div className="pt-6 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <div className="flex justify-center flex-col">
                    <Avatar Name={authorName}/>
                </div>
                <div className="flex justify-center flex-col text-sm font-extralight pl-2">{authorName}</div>
                <div className="flex justify-center flex-col pl-2">
                    <Circle/>
                </div>
                <div className="pl-2 text-sm flex justify-center flex-col font-thin text-slate-600">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold">
                {title}
            </div>
            <div className="pt-2 text-md font-thin">
                {content=content.length>100?content.slice(0,100)+"...":content}
            </div>
            <div className="pt-4 text-sm text-slate-400">
                {`${Math.ceil(content.length/100)} min read`}
            </div>
        </div>
    </Link>
}

export function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-500"/>
}

export function Avatar({ Name, size = "small" }: { Name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
        {Name[0]}
    </span>
</div>
}