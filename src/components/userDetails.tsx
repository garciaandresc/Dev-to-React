export default function UserDetails() {
  return (
    <aside>
      <div>
        <div className="bg-white flex-row border-t-black border-t-[35px] w-72 border rounded-md h-auto justify-between m-3 pl-4 pr-4 pt-2 pb-2">
          <div className="flex flex-row items-center justify-start">
            <a className="relative bottom-6 flex flex-row posi" href="">
              <img
                className="rounded-full w-12 border mr-2"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--Mt1kIJ3L--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/901175/d1a551cd-f5ae-4d4f-8dea-e5edec30b8d1.jpeg"
                alt=""
              />
              <h2 className="font-bold text-xl pt-4">User Name</h2>
            </a>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <a
              className=" flex justify-center bg-blue-700 border-blue-500 border rounded-md w-full mb-2 pb-2 pt-2 font-semibold text-white hover:bg-blue-700"
              href=""
            >
              Follow
            </a>
          </div>
          <div>
            <p>The best programmer in the country</p>
          </div>
          <div>
            <div className="mt-4">
              <h2 className="font-semibold text-gray-600">Location</h2>
              <p>Mexico</p>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold text-gray-600">Joined</h2>
              <p>Jun 18, 2020</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
