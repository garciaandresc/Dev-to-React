export default function SideListingsRight() {
  return (
    <div className="bg-white flex-row w-80 border rounded-md h-auto justify-between m-3 pl-2 pr-2">
      <header className="flex align-middle justify-between pb-2 m-2 border-b-2">
        <h3 className="font-bold text-lg">discuss</h3>
        <div>
          <a href="" className="text-blue-700 font-semibold text-xs"></a>
        </div>
      </header>
      <div className="flex-row p-2">
        <div className="border-b">
          <a href="" className="">
            <div>Meme Monday</div>
            <div className="font-light text-sm m-1">17 comments</div>
          </a>
        </div>
        <div className="border-b">
          <a href="" className="">
            <div className="m-2">Music Monday - What are you listening</div>
            <div className="font-light text-sm m-1">7 comments</div>
          </a>
        </div>
        <div className="border-b flex justify-center align-middle p-1">
          <a href="" className="pt-1">
            <div>What you learning about this weekend?</div>
            <div className="font-light text-sm m-1">7 comments</div>
          </a>
        </div>
        <div className="border-b p-1 flex align-middle mt-4 mb-4">
          <a href="">
            <div>Coding Problem Interview</div>
            <div className="font-light text-sm m-1">6 comments</div>
          </a>
        </div>
        <div className="mb-3">
          <a href="">
            <div>#DevDiscuss: is Threads Truly decentralized?</div>
            <div className="font-light text-sm m-1">8 comments</div>
          </a>
        </div>
        <a
          href=""
          className="flex align-middle justify-center font-semibold text-sm pt-2 border-t-2"
        >
          Create a Listing
        </a>
      </div>
    </div>
  );
}
