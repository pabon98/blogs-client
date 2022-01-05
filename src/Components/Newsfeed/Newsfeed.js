import React, { useEffect, useState } from "react";
import News from "../News/News";

const Newsfeed = () => {
  const { totalblogs, setTotalBlogs } = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setTotalBlogs(data));
  }, []);
  return (
    <div>
      <h1>Our all blogs</h1>
      <div className="row">
      {
                  totalblogs.map(blogs=>
                  <div className="col-md-4">
                      <News
                  key={blogs.id}
                  blogs={blogs}
                  ></News>
                  
                  </div>
                )
            }
      </div>
    </div>
  );
};

export default Newsfeed;
