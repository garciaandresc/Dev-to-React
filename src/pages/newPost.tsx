import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

/* interface PostData {
  username: string;
  password: string;
} */

export default function NewPost() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen flex flex-col items-center">
      <section className="flex w-[900px] items-center">
        <nav className="flex w-full items-center justify-between">
          <a href="http://localhost:5173">
            <img
              className="w-[50px] m-2"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt=""
            />
          </a>
          <div className="flex flex-grow">
            <span className="font-semibold text-sm">Create Post</span>
          </div>
          <div>
            <ul className="flex text-sm">
              <li className="font-semibold p-2 pr-4 pl-4 rounded-md text-sm hover:bg-blue-700/10 hover:text-blue-700 ">
                Edit
              </li>
              <li className="p-2 pr-4 pl-4 rounded-md text-sm hover:bg-blue-700/10 hover:text-blue-700">
                Preview
              </li>
            </ul>
          </div>
        </nav>
        <div className="absolute right-64">
          <button>
            <a href="http://localhost:5173/">
              <svg
                className=""
                aria-hidden="true"
                focusable="false"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path>
              </svg>
            </a>
          </button>
        </div>
      </section>
      <section className="w-[850px] h-full border rounded-md border-gray-200 mt-[1px]">
        <div className="w-full h-[750px] bg-white rounded-md gap-4">
          <div className="grid grid-cols-3 grid-rows-2 items-end">
            <div className="p-4 pt-6">
              <h1 className="font-semibold text-3xl">Post Title</h1>
              <label htmlFor="">
                <input
                  className="border rounded-md mt-2 p-2 hover:border-gray-500"
                  type="text"
                  placeholder="Title"
                />
              </label>
            </div>
            <div className="p-4">
              <h2 className="font-semibold p-1">Add an image</h2>
              <label htmlFor="">
                <input
                  className="border rounded-md p-2 hover:border-gray-500"
                  type="text"
                  placeholder="Your image link here!"
                />
              </label>
            </div>
            <div className="p-4">
              <h2 className="font-semibold p-1">Lecture Time</h2>
              <label htmlFor="">
                <input
                  className="border rounded-md p-2 hover:border-gray-500"
                  type="text"
                  placeholder="Ex 5min..."
                />
              </label>
            </div>
            <div className="p-4">
              <h2 className="font-semibold p-1">Tags</h2>
              <label htmlFor="">
                <input
                  className="border rounded-md p-2 hover:border-gray-500"
                  type="text"
                  placeholder="#Tag"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center w-full h-16 mb-4 bg-[#f9f9f9]">
            <div className="pl-9 pr-9">
              <button className="mr-1 p-2 rounded-md hover:bg-blue-100 hover:fill-blue-700">
                <svg
                  className=""
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 11h4.5a2.5 2.5 0 0 0 0-5H8v5Zm10 4.5a4.501 4.501 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.5 4.5 0 0 1 18 15.5ZM8 13v5h5.5a2.5 2.5 0 0 0 0-5H8Z"></path>
                </svg>
              </button>
              <button className="mr-1 p-2 rounded-md hover:bg-blue-100 hover:fill-blue-700">
                <svg
                  className=""
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15v2Z"></path>
                </svg>
              </button>
              <button className="mr-1 p-2 rounded-md hover:bg-blue-100 hover:fill-blue-700">
                <svg
                  className=""
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.364 15.536 16.95 14.12l1.414-1.414a5.001 5.001 0 0 0-3.531-8.551 5 5 0 0 0-3.54 1.48L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 1 1 9.9 9.9l-1.415 1.414zm-2.828 2.828-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607 1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"></path>
                </svg>
              </button>
              <button className="mr-1 p-2 rounded-md hover:bg-blue-100 hover:fill-blue-700">
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 4h13v2H8zM5 3v3h1v1H3V6h1V4H3V3zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2zM8 11h13v2H8zm0 7h13v2H8z"></path>
                </svg>
              </button>
              <button className="mr-1 p-2 rounded-md hover:bg-blue-100 hover:fill-blue-700">
                <svg
                  className=""
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 4h13v2H8zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8zm0 7h13v2H8z"></path>
                </svg>
              </button>
              <button className="mr-1 p-2 rounded-md hover:bg-blue-100 hover:fill-blue-700">
                <svg
                  className=""
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z"></path>
                </svg>
              </button>
              <button className="mr-1 p-2 rounded-md hover:bg-blue-100 hover:fill-blue-700">
                <svg
                  className=""
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179z"></path>
                </svg>
              </button>
              <button className="mr-1 p-2 rounded-md hover:bg-blue-100 hover:fill-blue-700">
                <svg
                  className=""
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m23 12-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414z"></path>
                </svg>
              </button>
              <button className="mr-1 p-2 rounded-md hover:bg-blue-100 hover:fill-blue-700">
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5zm15 7-3.536 3.536-1.414-1.415L16.172 12 14.05 9.879l1.414-1.415zM7.828 12l2.122 2.121-1.414 1.415L5 12l3.536-3.536L9.95 9.88z"></path>
                </svg>
              </button>
              <button className="mr-1 p-2 rounded-md hover:bg-blue-100 hover:fill-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 9h8L11 24v-9H4l9-15v9Zm-2 2V7.22L7.532 13H13v4.394L17.263 11H11Z"></path>
                </svg>
              </button>
              <button className="mr-1 p-2 rounded-md hover:bg-blue-100 hover:fill-blue-700">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 5H4v14l9.292-9.294a1 1 0 0 1 1.414 0L20 15.01V5zM2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                </svg>
              </button>
            </div>
            <div>
              <button className="mr-1 p-2 mr-9 rounded-md hover:bg-blue-100 hover:fill-blue-700">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm2-5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <textarea
              className="pl-4 mt-1 rounded-md font-mono"
              name=""
              id=""
              cols="110"
              rows="10"
              placeholder="Write your post content here"
            ></textarea>
          </div>
        </div>
      </section>
      <div className="w-[850px] flex gap-2 m-4 items-center">
        <button className="bg-blue-700 p-2 pr-4 pl-4 rounded-md text-sm hover:bg-blue-800 text-white font-semibold">
          Publish
        </button>
        <button className="p-2 pr-4 pl-4 rounded-md text-sm hover:bg-blue-700/10 hover:text-blue-700">
          Save Draft{" "}
        </button>
        <div className="">
          <button className="p-2 pr-4 pl-4 rounded-md text-sm hover:bg-blue-700/10 hover:fill-blue-700">
            <svg
              aria-hidden="true"
              focusable="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
            </svg>
          </button>
        </div>
        <button className="p-2 pr-4 pl-4 rounded-md text-sm hover:bg-blue-700/10 hover:text-blue-700">
          Revert new Changes
        </button>
      </div>
    </main>
  );
}
