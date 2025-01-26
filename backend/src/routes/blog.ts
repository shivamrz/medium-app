import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@shivamrz/medium-common";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter=new Hono<{
    Bindings: {
    DATABASE_URL: string
    JWT_SECRET:string
	}
    Variables:{
        userId:string
    }
}>();

blogRouter.use("/*", async(c, next)=>{
  const header=c.req.header("authorization") || "";

  const user=await verify(header, c.env.JWT_SECRET)
  if(user){
    c.set('userId', user.id as string);
    await next();
  } else{
    c.status(403)
    return c.json({error:"unauthorized"})
  }
})

blogRouter.post('/', async(c) => {
    const body=await c.req.json();
    const {success}= createBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
        msg:"Incorrect Input"
        })
    }
    const authorId=c.get("userId")
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const post=await prisma.post.create({
        data:{
            title:body.title,
            content: body.content,
            authorId:authorId
        }
    })
    return c.json({
        id:post.id
    })
})

blogRouter.put('/', async (c) => {
    const body=await c.req.json();
    const {success}= updateBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
        msg:"Incorrect Input"
        })
    }
    const authorId=c.get("userId")
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const post=await prisma.post.update({
        where:{
            id:body.id,
            authorId:authorId
        },
        data:{
            title:body.title,
            content: body.content,
        }
    })
    return c.json({
        id:post.id
    })
})


blogRouter.get('/bulk', async (c) => {
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const posts=await prisma.post.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    })
    return c.json({
        posts
    })
})


blogRouter.get('/:id', async (c) => {
    const id=c.req.param('id');
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const post=await prisma.post.findFirst({
        where:{
            id:id
        },
        select: {
            id:true,
            title:true,
            content:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    })
    return c.json({
        post
    })
})


