import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import FooterDev from "../components/footer";
import SideListings from "../components/sideListings";
import Aside from "../components/aside";
import PostCard from "../components/postCard";
import Relevants from "../components/relevants";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    fetch("http://localhost:8080/post")
      .then((response) => response.json())
      .then((response) => setPosts(response.data))
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  console.log(posts);
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
            {posts.map((post, index) => (
              <PostCard key={`index${index}`} post={post} />
            ))}
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
