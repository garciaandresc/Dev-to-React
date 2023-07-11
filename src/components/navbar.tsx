export default function Navbar() {
  const token = localStorage.getItem("token");
  return (
    <div className="flex flex-row w-auto bg-white justify-between pb-1 shadow-sm ">
      <div className="flex pl-80">
        <a href="http://localhost:5173">
          <img
            className="w-[50px] m-2"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt=""
          />
        </a>
        <div className="flex items-center border border-gray-300 hover:border-gray-500 rounded-md m-2 w-[407px] flex-wrap">
          <form className="" action="">
            <div className="flex flex-row justify-between mr-2">
              <div className="flex justify-center items-center">
                <input
                  className="ml-1 pl-2 h-8 w-[363px] appearance-none border-none ring-0 items-center"
                  placeholder="Search..."
                  type="text"
                />
              </div>
              <button className=" rounded-md p-2 pr-2 hover:bg-blue-700/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="crayons-icon c-btn__icon"
                  focusable="false"
                >
                  <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-row w-60 items-center mr-80 justify-center gap-4">
        {token ? (
          <>
            <div className="rounded-md m-[1px] flex  justify-center items-center hover:bg-[#3b49df]">
              <span className="border-blue-600 border-[1px] rounded-md p-1.5 pl-4 pr-4 text-blue-600 font-semibold hover:text-white hover:bg-blue-500">
                <a href="http://localhost:5173/newPost">Create Post</a>
              </span>
            </div>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="aixln89tw520kux6cfmkkv36dj13xz3g"
              >
                <title id="aixln89tw520kux6cfmkkv36dj13xz3g">
                  Notifications
                </title>
                <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
              </svg>
            </a>
            <div className="flex items-center">
              <button className="">
                <span>
                  <img
                    className="w-8 rounded-full"
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--mSjwiJrM--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1059775/68925140-4c78-4619-aae4-61c2cf1d8307.jpeg"
                    alt=""
                  />
                </span>
              </button>
            </div>
          </>
        ) : (
          <div className="flex gap-5 justify-center items-center  w-[400px] h-full">
            <span className=" rounded-md p-1.5 pr-4 hover:bg-blue-700/10 ">
              <a href="http://localhost:5173/login">Log in</a>
            </span>
            <span className="border-blue-600 border-[1px] rounded-md p-1.5 pl-4 pr-4 text-blue-600 font-semibold hover:text-white hover:bg-blue-500">
              <a href="http://localhost:5173/login">Create account</a>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
