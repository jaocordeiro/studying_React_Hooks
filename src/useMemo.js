import React, { useEffect, useState, useMemo } from "react";
import P from "prop-types";
// import Posts from "./Components/posts";
const Post = ({ post }) => {
  console.log("render componente filho");
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
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
};

export default function Memo() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");
  console.log("componente renderizou");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {/* Vamos envolver o componente todo utilizando o useMemo para ele memomizar todo o mesmo.
          Pois dessa forma o componente não é atualizado/ renderizado toda vez que alguma coisa se altera
          na tela do nossa page, com é o caso do input, pq sem o useMemo toda vez que alteramos algo no a
          tela renderiza e atualuiza o componente todo e não é preciso, isso é uma forma de otimização.
      */}
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => <Post key={post.id} post={post} />)
        );
      }, [posts])}

      {posts.length <= 0 && <p>Carregando...</p>}
    </div>
  );
}
