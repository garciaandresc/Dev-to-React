export default function PostCard() {
  return (
    <section className="flex flex-row full-card  rounded-lg bg-dev-to-card-color">
      <a className="ancor-card border-[1px] rounded-lg mt-4 w-[700px]" href="#">
        <div className="img-top">
          <a href="#">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--EwpDTF_Y--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yd6aq31hp8zzt8jb9dii.png"
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
                  <img
                    src="https://randomuser.me/api/portraits/women/60.jpg"
                    alt="imagen de usuario"
                    className="rounded-full w-full"
                  ></img>
                </a>
              </div>
            </div>
            <div className=" gap-1 ps-2 mt-1 items-center user-creator">
              <div className="flex">
                <p className="font-semibold text-sm ">Thomas Alger for</p>
                <p className="font-semibold text-sm ">AWS Community Services</p>
              </div>
              <a>7 days ago</a>
            </div>
          </div>
          <div className="reactions-container">
            <h5 className="font-bold text-3xl mx-9  pb-3 ">
              🦄 Building a pricing page with NextJS 🤯 🤯
            </h5>
            <div className="flex gap-5 ms-10 py-2 post-tags text-sm">
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
                    <span className="ps-3">15 reactions</span>
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
                <small>11 min read</small>
                <a href="#">📒</a>
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}
