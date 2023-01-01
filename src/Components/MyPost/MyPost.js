import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import MyPostDetail from "../MyPostDetail/MyPostDetail";
import styles from "./MyPost.module.css";

const MyPost = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://blogserver-1d02.onrender.com/userposts/${user.email}`)
      .then((res) => res.json)
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <div
        style={{ marginBottom: "300px" }}
        className="container border p-2 rounded-3 mt-5"
      >
        <div id={`${styles.tableContainer}`}>
          <table>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
            {posts.length > 0 &&
              posts?.map((post) => <MyPostDetail key={post._id} post={post} />)}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
