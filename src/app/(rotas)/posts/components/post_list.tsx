"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  id: number;
  titulo: string;
  conteudo: string;
  data_publicacao: string;
  banner: string;
  autorId: number;
  createdAt: string;
  updatedAt: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://extensao-8-semestre-si-2025-2.onrender.com/api/postagem"
        );
        setPosts(response.data);
      } catch (err) {
        setError("Erro ao carregar as postagens.");
        console.error("Erro ao buscar postagens:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center text-amber-600">Carregando postagens...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-8 justify-items-center mb-10">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg border border-[#FACA7A] overflow-hidden max-w-sm w-full">
          <img
            src={`https://extensao-8-semestre-si-2025-2.onrender.com/uploads/${post.banner}`}
            alt={post.titulo}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.titulo}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.conteudo}</p>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">Publicado em {new Date(post.createdAt).toLocaleDateString()} {new Date(post.createdAt).toLocaleTimeString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
