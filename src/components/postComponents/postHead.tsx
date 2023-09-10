import Image from "next/image";
import Box from "@mui/material/Box";
import React from "react";

import Style from "./post.module.css";

interface PostHeadProps {
  profileImageURL?: string | null;
  username: string;
  location?: string | null;
}

const PostHead: React.FC<PostHeadProps> = ({
  profileImageURL,
  username,
  location,
}) => {
  return (
    <div className={Style.postHead}>
      <Box
        component="img"
        src={profileImageURL ? profileImageURL : "/logo.svg"}
        // className={Style.imageBox}
        sx={{ width: "24px", height: "24px", margin: "0 8px 0 0px" }}
      />
      <div className={Style.postHeadText}>
        <h4 style={{ margin: "16px 8px 16px 0px" }}>{username}</h4>
        {location ? (
          <i style={{ margin: "16px 8px 16px 0px", fontSize: "8px" }}>
            {location}
          </i>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PostHead;
