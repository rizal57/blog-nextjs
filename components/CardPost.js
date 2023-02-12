import Link from "next/link";
import InfoPost from "./InfoPost";

const CardPost = ({...post}) => {
  return (
      <article className="mb-10">
        <Link href={`/posts/${post.title}`} >
          <img
            src={post.thumbnail}
            className={'w-full object-cover'}
            alt="Main Blog"
          />
        </Link>
        <InfoPost {...post} />
      </article>
  );
};

export default CardPost;
