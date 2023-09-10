import React from "react";
import Style from "./post.module.css";

const PostBody: React.FC<{ username: string; text: string }> = (props) => {
  return (
    <div className={Style.postBody}>
      <b>{props.username}</b>
      <p>{props.text}</p>
    </div>
  );
};

export default PostBody;
