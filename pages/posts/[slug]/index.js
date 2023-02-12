/* eslint-disable @next/next/no-img-element */
import Container from '@/components/Container';
import RootLayout from '@/components/layouts/RootLayout';
import MetaPostTitle from '@/components/MetaPostTitle';
import PostParagraph from '@/components/PostParagraph';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

const index = () => {
  const router = useRouter();
  const {slug} = router.query;

  return (
    <>
      <Head>
        <title>Post | {slug}</title>
      </Head>
      <RootLayout>
        <Container>
          <div className='flex flex-col items-center lg:py-8'>
            <MetaPostTitle
              className={`md:text-4xl text-2xl font-extrabold lg:mb-8 mb-4 md:w-6/12 w-full`}
              title={'Title of blog detail'}
              authorName={'M. Fahrur Rizal'}
              date={'10 Feb 2023'}
              center
            />
            <div className='relative h-auto w-full md:w-10/12 lg:mb-8 mb-4 overflow-hidden rounded-lg'>
              <img
                src={'/featured-thumbnail.png'}
                alt='image'
                className='rounded-lg w-full object-cover'
              />
            </div>
            <div className='w-full md:w-10/12'>
              <PostParagraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium itaque voluptates possimus reprehenderit nemo, sapiente porro ratione magnam illo quisquam?
              </PostParagraph>
              <PostParagraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium itaque voluptates possimus reprehenderit nemo, sapiente porro ratione magnam illo quisquam?
              </PostParagraph>
              <PostParagraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium itaque voluptates possimus reprehenderit nemo, sapiente porro ratione magnam illo quisquam?
              </PostParagraph>
            </div>
          </div>
        </Container>
      </RootLayout>
    </>
  );
};

export default index;
