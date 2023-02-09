import React from 'react';
import FeaturedThumbnail from '../public/featured-thumbnail.png'
import InfoFeaturedPost from './InfoFeaturedPost';

const FeaturedPost = () => {
  return (
    <article>
      <div className="flex flex-col py-8">
        <div className='flex flex-col justify-center items-center mb-16'>
          <h2 className='text-lg lg:text-xl font-semibold'>The Blog</h2>
          <h1 className='text-2xl lg:text-6xl font-semibold capitalize'>Writings from our team</h1>
        </div>

        <InfoFeaturedPost
          imgUrl={FeaturedThumbnail}
          author="M. Fahrur Rizal"
          postedAt="8 Februari 2023"
          title="Title of Blog"
          sortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nihil dicta velit fuga quia. Maxime labore architecto cumque et nisi nesciunt. Veniam itaque vitae accusantium dignissimos rem ullam dolorum illum."
          category="UI Design"
        />
      </div>

    </article>
  );
};

export default FeaturedPost;
