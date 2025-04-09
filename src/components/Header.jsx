import React from 'react';
import { assets } from '../assets/assets';

const Header = () =>{
  return(
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* Left Side */}
      <div>
       
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>Remove the <br className='max-md:hidden'/><span className ='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>Background </span>from <br className='max-md:hidden'/>your image for free</h1>
        
        <p className='my-6 text-{15px} text-gray-500'> Background removal made easy with our AI-powered tool.<br className='max-sm:hidden'/> Upload your image and get a clean background in just a few clicks. 
        </p>
      <div>
        <input type="file" name ="" id="Upload1" hidden/>
        <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer hover:scale-105 m-auto bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-all duration-600'htmlFor="Upload1">
        <img width = {17} src={assets.upload_btn_icon} alt="" />
          <p className='text-white text-sm'>Upload Your Image</p>
        </label>
      </div>
      </div>
      {/* Right Side */}
      <div className='w-full max-w-md'>
      <img src={assets.header_img} alt="header" />
      </div>
    </div>
    )
}
export default Header;