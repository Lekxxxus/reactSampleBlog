import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const [name, setName] = useState("mario");
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}

      <button onClick={() => setName("luigi")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
