import Navbar from "../components/navbar";
import PostDetails from "../components/postDetails";
import PostCard from "../components/postCard";
import FooterDev from "../components/footer";
import AsidePost from "../components/asidePost";
import UserDetails from "../components/userDetails";

export default function Post() {
  return (
    <main className="bg-[#f5f5f5]">
      <Navbar />
      <section className="flex justify-center">
        <AsidePost />
        <PostCard />
        <UserDetails />
      </section>
      <FooterDev />
    </main>
  );
}
