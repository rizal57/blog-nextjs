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
          <div className='flex flex-col items-center py-8'>
            <MetaPostTitle
              className={`text-4xl font-extrabold mb-4 w-6/12`}
              title={'Title of blog detail'}
              authorName={'M. Fahrur Rizal'}
              date={'10 Feb 2023'}
              center
            />
            <div className='relative h-screen w-full lg:w-10/12 mb-8'>
              <Image
                src={'/featured-thumbnail.png'}
                alt='image'
                fill
                sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                className='rounded-lg'
              />
            </div>
            <div className='w-full lg:w-10/12'>
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
