import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog=({ blog, Published_date }:{blog : Blog, Published_date:string})=>{
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2xl pt-12">
                <div className=" col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="pt-2 text-slate-500">
                        Posted on {Published_date}
                    </div>
                    <div className="pt-4 ">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-500 text-lg">Author</div>
                    
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar size="big" Name={blog.author.name || "Anonymous"}/>
                        </div>
                        <div>
                            <div className="text-xl font-bold ">
                                {blog.author.name }
                            </div>
                            <div className="pt-2 text-slate-500">
                                Master of mirth, purveyor of puns, and the
                                funniest person in the kingdom.
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
}