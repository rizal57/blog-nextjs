import Image from 'next/image';
import React from 'react';
import FeaturedThumbnail from '../public/featured-thumbnail.png'

const FeaturedPost = () => {
  return (
    <article>
      <div className="flex flex-col py-8">
        <div className='flex flex-col justify-center items-center mb-16'>
          <h2 className='text-xl font-semibold'>The Blog</h2>
          <h1 className='text-6xl font-semibold'>Writings from our team</h1>
        </div>
        <div className='w-full rounded-xl h-[600px] overflow-hidden relative'>
          <Image src={FeaturedThumbnail} className={'w-full object-cover'} alt="Main Blog" />
          <div className='absolute bottom-2 left-2 right-2 bg-gray-800/60 p-4 rounded-xl'>
            <span className='text-sm text-gray-400'>M. Fahrur Rizal - 8 February 2023</span>
            <h1 className='font-bold text-2xl'>Title of Blog</h1>
            <p className='text-base text-gray-300 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ipsum dolorum consequuntur debitis numquam, laborum explicabo deserunt amet tempore molestiae delectus ea consequatur at magni id optio repudiandae laboriosam accusantium? Debitis, vel! Eveniet a ipsum reprehenderit enim quidem, minima minus!</p>
            <div className='flex gap-3 items-center mt-4'>
              <a href='#' className='py-1 px-4 rounded-full border border-gray-200 text-xs'>UI Design</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;
