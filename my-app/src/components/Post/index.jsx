import React from "react";
import PostLogo from "./atoms/PostLogo";
import post_img from "../../images/post_image.jpg";
import styles from "./Post.module.css";

const Post = ({ title, description }) => {
  return (
    <div className={styles.post}>
      <img src={post_img} alt="Post_image" title="Post_image" />
      <div>
        <div className={styles.post__text}>
          <h2>{title}</h2>
          {description.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <div className={styles.post__logo}>
          <PostLogo />
          <div>
            <p>SincereSystems</p>
            <p>2020-02-13</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
