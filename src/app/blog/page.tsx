import React from "react";
import BlogPage from "../Components/blogpost";
import { Header } from "../Components/Header";
import { SparklesCore } from "../Components/UI/sparkles";


export default function Blog() {
    return (
    <div>
        <div>
                <Header/>
            </div>
        <div className="h-[60rem] relative w-full bg-black flex flex-col justify-center overflow-hidden rounded-md">
             <div className="w-full absolute inset-0 h-screen">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.2}
                maxSize={0.9}
                particleDensity={20}
                className="h-full w-full"
                particleColor="#FFFFFF"
                 />
             </div>
            
            <BlogPage />

             
        </div>
    </div>
    )
}
