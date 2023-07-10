import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import FooterDev from "../components/footer";
import SideListings from "../components/sideListings";
import Aside from "../components/aside";
import PostCard from "../components/postCard";
import Relevants from "../components/relevants";

export default function Home() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen">
      <header>
        <Navbar />
      </header>
      <section className="flex w-full justify-center">
        <div className="flex justify-between w-[1250px] self-center">
          <div>
            <Aside />
          </div>
          <div>
            <Relevants />
            <PostCard />
            <PostCard />
          </div>
          <div>
            <SideListings />
          </div>
        </div>
      </section>
      <FooterDev />
    </main>
  );
}
