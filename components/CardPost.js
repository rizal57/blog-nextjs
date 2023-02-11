import InfoPost from "./InfoPost";

const CardPost = ({...post}) => {
  return (
    <article className="mb-10">
      <img
        src={post.thumbnail}
        className={'w-full object-cover'}
        alt="Main Blog"
      />
      <InfoPost {...post} />
    </article>
  );
};

export default CardPost;
