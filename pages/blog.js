import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const blog = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    
    return async ()=>{
      const response=await fetch("http://localhost:3000/api/getallblogs");
      const json=await response.json();
      console.log(json);
      setBlogs(json);
    }

  },[]);

  return (

    <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
    </div>
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

    
    {
    blogs.map((blogitem)=>

    <Link href={`/blogpost/${blogitem.slug}`} key={blogitem.slug}>
    <article className="flex max-w-xl flex-col items-start justify-between border border-solid border-slate-300 p-6 rounded-lg cursor-pointer" style={{ height: '450px' }}>

      <div className="h-1/2 w-full relative">
      <Image  src={blogitem.image} layout='fill' ></Image>
      </div>

      <div className="h-1/2">

     
      <div className="group">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href="/">
           {blogitem.title}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{blogitem.content}</p>
      </div>

      <div className="flex items-center gap-x-4 text-xs mt-2">
        <time datetime="2020-03-16" className="text-gray-500">{blogitem.date}</time>
        <Link href="/" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{blogitem.category}</Link>
      </div>

      <div className="relative mt-8 flex items-center gap-x-4">
        <Image src="/assets/self_photo.jpeg" layout='fill'/>
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <Link href="/">
              <span className="absolute inset-0">{blogitem.author}</span>
             
            </Link>
          </p>
        </div>
      </div>

      </div>

    </article>
    </Link>


      )
    }

      

      

      
    </div>
  </div>
    </div>

  )
}

export default blog