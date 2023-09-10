"use client";
// import usePostsStore from "@/stores/usePostStore";
import InfiniteScroll from "react-infinite-scroll-component";
import { IPostInfo } from "@/types/IPostInfo";
import { useEffect } from "react";
// import PostHead from "@/components/main/postHead";
import Post from "@/components/postComponents/postMain";
import TabBar from "./tabBar";

const MainThread: React.FC = () => {
  const demoPost: IPostInfo = {
    profileImageURL: "https://picsum.photos/100",
    username: "hyna",
    postImageURL: "https://picsum.photos/200",
    text: "The pain itself is important, the education of the elitist will be followed, but it is the same time that they happen as a lot of work and pain. Ultricies leo whole malesuada now or laughter is good. Urna now that course is a fear some eleifend mi in. Life sapiens pellentesque inhabitant morbi tristique old age and grandchildren and. Now is the time for my football players.",
    postID: "",
    location: "Gangnam",
  };

  const postList: Array<IPostInfo> = [];
  for (let i = 0; i < 15; i++) {
    postList.push({ ...demoPost, postID: `${new Date().toISOString()}_${i}` });
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
        }}
      >
        {postList.map((post) => (
          <Post key={post.postID} {...post} />
        ))}
      </div>
      <TabBar defaultTab={0} />
    </div>
  );
};

export default MainThread;
