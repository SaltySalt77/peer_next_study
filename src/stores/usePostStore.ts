import { create } from "zustand";
import { IPostInfo } from "@/types/IPostInfo";

interface PostsState {
  posts: Array<IPostInfo>;
  addPost: (posts: Array<IPostInfo>) => void;
  clearPost: () => void;
}

const usePostsStore = create<PostsState>((set) => ({
  posts: [] as Array<IPostInfo>,
  addPost: (posts: Array<IPostInfo>) =>
    set((state: { posts: Array<IPostInfo> }) => ({
      posts: [...state.posts, ...posts],
    })),
  clearPost: () => set(() => ({ posts: [] as Array<IPostInfo> })),
}));

export default usePostsStore;
