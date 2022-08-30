import React, { useEffect, useState, useMemo, useRef } from "react";
import P, { func } from "prop-types";

const Post = ({ post, handleGetTitle }) => {
  console.log("render componente filho");
  return (
    <div key={post.id} className="post">
      <h1 onClick={() => handleGetTitle(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleGetTitle: func,
};

export default function Ref() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");
  const input = useRef(null);
  const contador = useRef(0);
  console.log("componente renderizou");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  useEffect(() => {
    input.current.focus();
  }, [value]);

  useEffect(() => {
    contador.current++;
  }, []);

  const handleGetTitle = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h4>Render: {contador.current}</h4>
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>

      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => (
            <Post key={post.id} post={post} handleGetTitle={handleGetTitle} />
          ))
        );
      }, [posts])}

      {posts.length <= 0 && <p>Carregando...</p>}
    </div>
  );
}
