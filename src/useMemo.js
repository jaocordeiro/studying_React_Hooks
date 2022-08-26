import React, { useEffect, useState } from "react";

export default function Memo() {
  const [posts, setPosts] = useState([]);
  console.log("componente renderizou");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts");
    .then((res) => res.json());
    .then((res) => setPosts(res));
  }, []);

  return <div className="App">{posts}</div>;
}
