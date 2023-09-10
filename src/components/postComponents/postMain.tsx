import React from "react";
import { IPostInfo } from "@/types/IPostInfo";
import PostHead from "./postHead";
import { Box } from "@mui/material";
import PostBody from "./postBodyMain";
import Style from "./post.module.css";

const Post: React.FC<IPostInfo> = (props) => {
  return (
    <div className={Style.post}>
      <PostHead
        profileImageURL={props.profileImageURL}
        username={props.username}
        location={props?.location}
      />
      <Box
        component="img"
        src={props.postImageURL}
        sx={{ width: "100%", height: "100%" }}
      />
      <PostBody username={props.username} text={props.text} />
    </div>
  );
};

export default Post;
