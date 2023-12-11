import { useEffect, useState } from "react";
import { PostsContext } from "./PostsContext";
import axios from "axios";

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [postsLoaded, setPostsLoaded] = useState(false);

  // Efeito para recuperar os posts do localStorage ao iniciar a aplicação
  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
      setPostsLoaded(true);
    } else {
      fetchData(); // Se não houver posts no localStorage, busca da API
    }
  }, []);

  // Efeito para salvar os posts no localStorage sempre que o estado for alterado
  useEffect(() => {
    if (postsLoaded) {
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  }, [posts, postsLoaded]);

  // Função para buscar os posts da API
  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);
      setPostsLoaded(true);
    } catch (err) {
      console.log("ERROR:", err);
    }
  };

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};
