import React, { useEffect,useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import Link from 'next/link';

const slug = () => {

    const [blog, setBlog] = useState();
    const router = useRouter();

    useEffect(()=>{

      async function getBlog(){

        if(!router.isReady) return;
        const {slug}=router.query;
        const response=await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
        const json=await response.json();
        //console.log(json);

        if (!ignore) {
          setBlog(json);
        }
      }
      let ignore = false;
      getBlog();
      return () => {
        ignore = true;
      }
      
    },[router.isReady]);



  return (
    <div className='w-screen flex flex-col justify-center items-center' >


      
      <div className='w-full h-24 flex  justify-center items-center p-2'>
      <h1 className="mt-3 text-4xl font-bold leading-6 text-gray-900 group-hover:text-gray-600 text-center">{blog && blog.title}</h1>
      </div>

      <div className="h-80 w-1/2 relative">
          <Image  src={blog ? blog.image:"/assets/dsa.jpg"} layout='fill' ></Image>
      </div>
    
      <div className="w-4/5">
        <p className="mt-5 line-clamp-3 text-lg leading-6 text-gray-600">{blog && blog.content}</p>
      </div>

      {/* <div className="flex items-center gap-x-4 text-xs mt-2">
        <time datetime="2020-03-16" className="text-gray-500">{blog && blog.date}</time>
        <span>{blog && blog.category}</span>
      </div>

      <div className="relative mt-8 flex items-center gap-x-4">
        <Image src="/assets/self_photo.jpeg" layout='fill'/>
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
              <span className="absolute inset-0">{blog && blog.author}</span>
          </p>
        </div>
      </div> */}

      

    </div>

    
  )
}

export default slug