import Navbar from "../components/navbar";

import PostCard from "../components/postCard";
import FooterDev from "../components/footer";
import AsidePost from "../components/asidePost";
import UserDetails from "../components/userDetails";

import { useState, useEffect } from "react";

export default function Post() {
  const [posts, setPosts] = useState<any>([]);
  const postId = new URL(window.location.href).search.slice(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`http://localhost:8080/post/${postId}`)
      .then((response) => response.json())
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <main className="bg-[#f5f5f5]">
      <Navbar />
      <section className="flex justify-center">
        <AsidePost />
        {loading ? <p>Loading</p> : <PostCard post={posts} />}

        <UserDetails />
      </section>
      <FooterDev />
    </main>
  );
}
