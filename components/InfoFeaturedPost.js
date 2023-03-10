import Image from 'next/image';
import Link from 'next/link';

const InfoPost = (props) => {
  const {
    imgUrl,
    author,
    postedAt,
    title,
    sortDescription,
    category
  } = props;
  return (
    <>
      <div className='w-full rounded-xl h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden relative'>
        <Link href={`/posts/${title}`}>
          <Image src={imgUrl} className={'w-full object-cover rounded-md'} alt="Main Blog" />
        </Link>
        <div className='absolute bottom-2 left-2 right-2 bg-gray-800/70 p-3 lg:p-4 rounded-xl'>
          <span className='text-xs lg:text-sm text-gray-400'>{author} - {postedAt}</span>
          <Link href={`/posts/${title}`}>
            <h1 className='font-bold text-lg lg:text-2xl capitalize'>{title}</h1>
          </Link>
          <p className='text-base text-gray-300 leading-relaxed'>{sortDescription.slice(0, 100)}</p>
          <div className='flex gap-3 items-center mt-4'>
            <a href='#' className='py-1 px-4 rounded-full border border-gray-200 text-xs'>{category}</a>
          </div>
        </div>
        </div>
    </>
  );
};

export default InfoPost;
