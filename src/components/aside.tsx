export default function Aside() {
  const token = localStorage.getItem("token");
  return (
    <aside className="mr-1">
      {token ? (
        <>
          <div></div>
        </>
      ) : (
        <div className="bg-white flex-row w-60 border rounded-md h-auto justify-between m-3 pl-4 pr-4 pt-2 pb-2">
          <h2 className="font-bold text-xl pb-4">
            DEV Community is a community of 1,096,367 amazing developers
          </h2>
          <p className="pb-4">
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </p>
          <div className="flex flex-col justify-center items-center w-full">
            <a
              className="flex justify-center border-blue-500 border rounded-md w-full pb-2 pt-2 font-semibold text-blue-700 hover:text-white hover:bg-blue-700 hover:underline"
              href="http://localhost:5173/signin"
            >
              Create account
            </a>
            <a
              className="flex justify-center rounded-md w-full pb-2 pt-2  hover:text-blue-700  hover:bg-blue-700/10 m-1 hover:underline"
              href="http://localhost:5173/login"
            >
              Log in
            </a>
          </div>
        </div>
      )}

      <div className="flex w-60 p-4">
        <ul className="flex flex-col gap-1 w-full">
          <li className="flex hover:bg-blue-700/10 p-1 pb-2 rounded-md items-center">
            <a href="" className="flex items-baseline">
              <span className="text-2xl ">🏡</span>
              <p className="hover:underline hover:text-blue-800">Home</p>
            </a>
          </li>
          <li className=" hover:bg-blue-700/10 pb-1 pl-1 rounded-md">
            <a href="" className="flex items-baseline">
              <span className="text-2xl">📜</span>
              <p className="hover:underline hover:text-blue-800">Listings</p>
            </a>
          </li>
          <li className=" hover:bg-blue-700/10 pb-1 pl-1 rounded-md">
            <a href="" className="flex items-baseline">
              <span className="text-2xl">🎙️</span> Podcasts
            </a>
          </li>
          <li className=" hover:bg-blue-700/10 pb-1 pl-1 rounded-md">
            <a href="" className="flex items-baseline">
              <span className="text-2xl">📽️</span> Videos
            </a>
          </li>
          <li className=" hover:bg-blue-700/10 pb-1 pl-1 rounded-md">
            <a href="" className="flex items-baseline">
              <span className="text-2xl">🏷️</span> Tags
            </a>
          </li>
          <li className=" hover:bg-blue-700/10 pb-1 pl-1 rounded-md">
            <a href="" className="flex items-baseline">
              <span className="text-2xl">💡</span> FAQ
            </a>
          </li>
          <li className=" hover:bg-blue-700/10 pb-1 pl-1 rounded-md">
            <a href="" className="flex items-baseline">
              <span className="text-2xl">🛍️</span> Forem Shop
            </a>
          </li>
          <li className=" hover:bg-blue-700/10 pb-1 pl-1 rounded-md">
            <a href="" className="flex items-baseline">
              <span className="text-2xl">❤️</span> Sponsors
            </a>
          </li>
          <li className=" hover:bg-blue-700/10 pb-1 pl-1 rounded-md">
            <a href="" className="flex items-baseline">
              <span className="text-2xl">🏳️‍🌈</span> About
            </a>
          </li>
          <li className=" hover:bg-blue-700/10 pb-1 pl-1 rounded-md">
            <a className=" flex items-center" href="">
              <span className="text-2xl">
                <svg
                  className="w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 44 44"
                >
                  <g className="nc-icon-wrapper">
                    <path
                      fill="#FFAC33"
                      d="M38.724 33.656c-1.239-.01-1.241 1.205-1.241 1.205H22.5c-5.246 0-9.5-4.254-9.5-9.5s4.254-9.5 9.5-9.5 9.5 4.254 9.5 9.5c0 3.062-1.6 5.897-3.852 7.633h5.434C35.022 30.849 36 28.139 36 25.361c0-7.456-6.045-13.5-13.5-13.5-7.456 0-13.5 6.044-13.5 13.5 0 7.455 6.044 13.5 13.5 13.5h14.982s-.003 1.127 1.241 1.139c1.238.012 1.228-1.245 1.228-1.245l.014-3.821s.001-1.267-1.241-1.278zM9 18.26a16.047 16.047 0 014-4.739V13c0-5 5-7 5-8s-1-1-1-1H5C4 4 4 5 4 5c0 1 5 3.333 5 7.69v5.57z"
                    ></path>
                    <path
                      fill="#BE1931"
                      d="M17.091 33.166a9.487 9.487 0 01-4.045-8.72l-3.977-.461c-.046.452-.069.911-.069 1.376 0 4.573 2.28 8.608 5.76 11.051l2.331-3.246z"
                    ></path>
                    <path
                      fill="#BE1931"
                      d="M10 29.924s-5.188-.812-5 1 5-1 5-1zm0 .312s-4.125 2.688-2.938 3.75S10 30.236 10 30.236z"
                    ></path>
                  </g>
                </svg>
              </span>{" "}
              Contacts
            </a>
          </li>
          <li className=" hover:bg-blue-700/10 pb-1 pl-1 rounded-md">
            <a href="" className="flex items-baseline">
              <span className="text-2xl">📖</span> Guides
            </a>
          </li>
          <li className=" hover:bg-blue-700/10 pb-1 pl-1 rounded-md">
            <a href="" className="flex items-baseline">
              <span className="text-2xl">🤔</span> Software Comparison
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-60 p-4">
        <h2 className="mb-3 font-bold">Other</h2>
        <ul className="flex flex-col gap-2">
          <li className=" hover:bg-blue-700/10 pb-1 pl-1 rounded-md">
            <a href="" className="flex items-baseline">
              <span className="text-2xl">👍🏾</span> Code of Conduct
            </a>
          </li>
          <li className=" hover:bg-blue-700/10 pb-1 pl-1 rounded-md">
            <a href="" className="flex items-baseline">
              <span className="text-2xl">😎</span> Privacy Policy
            </a>
          </li>
          <li className=" hover:bg-blue-700/10 pb-1 pl-1 rounded-md">
            <a href="" className="flex items-baseline">
              <span className="text-2xl">👀</span> Terms of use
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row w-full m-0 fill-gray-500 items-center">
        <a
          href=""
          className="text-gray-500 p-2 m-0 rounded-md hover:bg-blue-700/10 "
        >
          <svg
            className="fill-gray-700 hover:fill-blue-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z" />
          </svg>
        </a>
        <a
          href=""
          className="text-gray-500 p-2 rounded-md hover:bg-blue-700/10 "
        >
          <svg
            className="fill-gray-700 hover:fill-blue-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            {" "}
            <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
          </svg>
        </a>
        <a
          href=""
          className="text-gray-500 p-2 rounded-md hover:bg-blue-700/10 "
        >
          <svg
            className="fill-gray-700 hover:fill-blue-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            {" "}
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
          </svg>
        </a>
        <a
          href=""
          className="text-gray-500 p-2 rounded-md hover:bg-blue-700/10 "
        >
          <svg
            className="fill-gray-700 hover:fill-blue-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            {" "}
            <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
          </svg>
        </a>
        <a
          href=""
          className="text-gray-500 p-2 rounded-md hover:bg-blue-700/10 "
        >
          <svg
            className="fill-gray-700 hover:fill-blue-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M 13.300781 2.003906 C 13.085938 1.988281 12.84375 2.027344 12.628906 2.101563 C 11.757813 2.390625 11.304688 3.320313 11.59375 4.1875 L 12.289063 6.226563 L 8.355469 7.546875 L 7.707031 5.578125 C 7.417969 4.710938 6.488281 4.257813 5.621094 4.546875 C 4.753906 4.835938 4.273438 5.765625 4.566406 6.632813 L 5.214844 8.578125 L 3.171875 9.273438 C 2.304688 9.5625 1.851563 10.519531 2.140625 11.386719 C 2.429688 12.253906 3.359375 12.707031 4.226563 12.417969 L 6.265625 11.746094 L 7.585938 15.65625 L 5.617188 16.304688 C 4.75 16.59375 4.296875 17.523438 4.585938 18.390625 C 4.878906 19.257813 5.808594 19.738281 6.675781 19.445313 L 8.621094 18.800781 L 9.316406 20.839844 C 9.605469 21.707031 10.558594 22.160156 11.425781 21.871094 C 12.296875 21.582031 12.746094 20.652344 12.460938 19.785156 L 11.785156 17.746094 L 15.699219 16.425781 L 16.347656 18.394531 C 16.636719 19.261719 17.566406 19.714844 18.433594 19.425781 C 19.300781 19.136719 19.777344 18.203125 19.488281 17.339844 L 18.839844 15.394531 L 20.878906 14.699219 C 21.746094 14.40625 22.203125 13.453125 21.910156 12.585938 C 21.621094 11.71875 20.691406 11.265625 19.824219 11.554688 L 17.785156 12.226563 L 16.464844 8.316406 L 18.433594 7.667969 C 19.300781 7.378906 19.757813 6.449219 19.464844 5.582031 C 19.175781 4.714844 18.246094 4.234375 17.378906 4.523438 L 15.433594 5.171875 L 14.738281 3.132813 C 14.519531 2.480469 13.941406 2.054688 13.300781 2.003906 Z M 13.324219 9.371094 L 14.644531 13.28125 L 10.730469 14.601563 L 9.410156 10.691406 Z" />
          </svg>
        </a>
        <a
          href=""
          className="text-gray-500 p-2 rounded-md hover:bg-blue-700/10 "
        >
          <svg
            className="fill-gray-700 hover:fill-blue-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            {" "}
            <path d="M19.952,5.672c-1.904-1.531-4.916-1.79-5.044-1.801c-0.201-0.017-0.392,0.097-0.474,0.281 c-0.006,0.012-0.072,0.163-0.145,0.398c1.259,0.212,2.806,0.64,4.206,1.509c0.224,0.139,0.293,0.434,0.154,0.659 c-0.09,0.146-0.247,0.226-0.407,0.226c-0.086,0-0.173-0.023-0.252-0.072C15.584,5.38,12.578,5.305,12,5.305S8.415,5.38,6.011,6.872 c-0.225,0.14-0.519,0.07-0.659-0.154c-0.14-0.225-0.07-0.519,0.154-0.659c1.4-0.868,2.946-1.297,4.206-1.509 c-0.074-0.236-0.14-0.386-0.145-0.398C9.484,3.968,9.294,3.852,9.092,3.872c-0.127,0.01-3.139,0.269-5.069,1.822 C3.015,6.625,1,12.073,1,16.783c0,0.083,0.022,0.165,0.063,0.237c1.391,2.443,5.185,3.083,6.05,3.111c0.005,0,0.01,0,0.015,0 c0.153,0,0.297-0.073,0.387-0.197l0.875-1.202c-2.359-0.61-3.564-1.645-3.634-1.706c-0.198-0.175-0.217-0.477-0.042-0.675 c0.175-0.198,0.476-0.217,0.674-0.043c0.029,0.026,2.248,1.909,6.612,1.909c4.372,0,6.591-1.891,6.613-1.91 c0.198-0.172,0.5-0.154,0.674,0.045c0.174,0.198,0.155,0.499-0.042,0.673c-0.07,0.062-1.275,1.096-3.634,1.706l0.875,1.202 c0.09,0.124,0.234,0.197,0.387,0.197c0.005,0,0.01,0,0.015,0c0.865-0.027,4.659-0.667,6.05-3.111 C22.978,16.947,23,16.866,23,16.783C23,12.073,20.985,6.625,19.952,5.672z M8.891,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913s1.674,0.857,1.674,1.913S9.816,14.87,8.891,14.87z M15.109,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913c0.924,0,1.674,0.857,1.674,1.913S16.033,14.87,15.109,14.87z" />
          </svg>
        </a>
      </div>
      <div className="flex flex-col mt-4">
        <h3 className="font-bold m-2">Popular tags</h3>
        <div className="flex">
          <p className="pl-6">#tag</p>
        </div>
      </div>
      <div className="bg-white flex-row w-60 border rounded-md h-auto justify-between m-3 pl-4 pr-4 pt-4 pb-2">
        <div className="flex w-full justify-between items-center mb-4">
          <h2 className="text-sm">DEV Community</h2>
          <span>
            <button className="p-1 hover:bg-gray-200 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="a5dvesoe7aqzaq3fft2f8ptzdog3uv8c"
                className="crayons-icon pointer-events-none"
              >
                <title id="a5dvesoe7aqzaq3fft2f8ptzdog3uv8c">
                  Dropdown menu
                </title>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                ></path>
              </svg>
            </button>
          </span>
        </div>
        <img
          className="mb-9"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--KfYhPrXu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gxatl8njvv45ht30hcx9.png"
          alt=""
        />
        <p className="pb-4 font-bold">
          <a className="text-blue-700 font-bold mr-1 underline" href="">
            Fill out this survey
          </a>
          and help us moderate our community by becoming a tag moderator here at
          DEV.
        </p>
      </div>
      <div className="bg-white flex-row w-60 border rounded-md h-auto justify-between m-3 pl-4 pr-4 pt-4 pb-2">
        <div className="flex w-full justify-between items-center mb-4">
          <h2 className="text-sm">DEV Community</h2>
          <span>
            <button className="p-1 hover:bg-gray-200 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="a5dvesoe7aqzaq3fft2f8ptzdog3uv8c"
                className="crayons-icon pointer-events-none"
              >
                <title id="a5dvesoe7aqzaq3fft2f8ptzdog3uv8c">
                  Dropdown menu
                </title>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                ></path>
              </svg>
            </button>
          </span>
        </div>
        <img
          className="mb-1"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--zezDNDfF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8nuyrw43yfedpbj2iieb.jpg"
          alt=""
        />
        <p className="text-gray-700 pb-4 font-bold text-3xl">
          It's time to change it up.
        </p>
        <p className="mb-2">
          You can change your feed and see more relevant posts by adding a
          rating to different tags on DEV.
          <a
            href=""
            className="underline text-blue-500 hover:text-blue-700 ml-1"
          >
            Head here
          </a>{" "}
          to adjust your weights.
        </p>
      </div>
    </aside>
  );
}
