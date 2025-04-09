import React from 'react';
import { assets } from '../assets/assets';

const Upload = () =>{
  return(
    <div className='pb-16'>
    <h1 className='mb-10 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-6 md:py-16'> See the Magic, Try Now</h1>

      <div className='text-center mb-24'>
        <input type="file" name ="" id="Upload2" hidden/>
        <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer hover:scale-105 m-auto bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-all duration-600'htmlFor="Upload2">
        <img width = {17} src={assets.upload_btn_icon} alt="" />
          <p className='text-white text-sm'>Upload Your Image</p>
        </label>
      </div>
      
      
    </div>
    )
  }
export default Upload;