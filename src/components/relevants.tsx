export default function Relevants() {
  return (
    <header className="pt-2 px-3 m:p-0 m:px-0 m:mb-2 fs-l">
      <nav className="flex w-full items-center h-14">
        <ul className="flex gap-2 text-lg">
          <li className="font-bold p-2.5 rounded-md hover:bg-white hover:text-blue-600">
            <a href="">Relevant</a>
          </li>
          <li className=" p-2.5 rounded-md hover:bg-white hover:text-blue-600 text-gray-500">
            <a href="">Latest</a>
          </li>
          <li className=" p-2.5 rounded-md hover:bg-white hover:text-blue-600 text-gray-500">
            <a href="">Top</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
