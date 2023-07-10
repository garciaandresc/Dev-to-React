interface PostProps {
  post: {
    content: string;
    date: string;
    heartReactions: string;
    image: string;
    marks: string;
    tags: [string];
    time: number;
    title: string;
    userCreatorId: {
      name: string;
      profilePicture: string;
      _id: string;
    };
    _id: string;
  };
}

export default function PostCard(post: PostProps) {
  /* const isTag = post.tags; */
  console.log("este es el post", post.post.image);
  return (
    <section className="flex flex-row full-card  rounded-lg bg-dev-to-card-color">
      <a
        className="ancor-card border-[1px] rounded-lg mt-4 w-[700px]"
        href="http://localhost:5173/post"
      >
        <div className="img-top">
          <a href="http://localhost:5173/post">
            <img
              src={post.post.image}
              alt="img del post"
              className="rounded-t-lg"
            ></img>
          </a>
        </div>
        <div className="card-content p-5 bg-white rounded-lg">
          <div className="flex flex-wrap h-3/6">
            <div className="w-[3rem]  profile-picture">
              <div>
                <a>
                  {/* <img
                    src={post.post.userCreatorId.profilePicture}
                    alt="imagen de usuario"
                    className="rounded-full w-full"
                  ></img> */}
                </a>
              </div>
            </div>
            <div className=" gap-1 ps-2 mt-1 items-center user-creator">
              <div className="flex">
                {/* <p className="font-semibold text-sm ">
                  {post.post.userCreatorId.name}
                </p> */}
                <p className="font-semibold text-sm "></p>
              </div>
              <a>{`${post.post.time} days ago`}</a>
            </div>
          </div>
          <div className="reactions-container">
            <h5 className="font-bold text-3xl mx-9  pb-3 ">
              {post.post.title}
            </h5>
            <div className="flex gap-5 ms-10 py-2 post-tags text-sm">
              //isTag
              <a>
                <span className="text-amber-400">#</span>tag1
              </a>
              <a>
                <span className="text-green-800">#</span>tag2
              </a>
              <a>
                <span className="text-violet-700">#</span>tag3
              </a>
            </div>
            <div className="flex ms-10 py-4 justify-between emojis-comments text-sm">
              <div className="flex gap-5">
                <a href="#" className="emojis-comments__colection">
                  <div className="emojis-comments__colection--emojis">
                    <span className="bg-slate-300  rounded-full">❤</span>
                    <span className="bg-slate-300  rounded-full">🙌</span>
                    <span className="bg-slate-300  rounded-full">🔥</span>
                    <span className="ps-3">{post.post.heartReactions}</span>
                  </div>
                </a>
                <a className="emojis-comments__comments">
                  <div className="flex">
                    <span>💭</span>
                    <p className="ps-2">23 comments</p>
                  </div>
                </a>
              </div>
              <div>
                <small>{`${post.post.time} 11 min read`}</small>
                <a href="#">📒</a>
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}
