"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios"; // Importar axios

interface PostData {
  id: number;
  titulo: string;
  conteudo: string;
  banner: string; // Nome do arquivo do banner
  autorId: number;
  data_publicacao: string;
  createdAt: string;
  updatedAt: string;
}

export default function PostsPage() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [posts, setPosts] = useState<PostData[]>([]); // Estado para armazenar os posts
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState<string | null>(null); // Estado para erros

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem("moreilandia.token");

      if (!token) {
        setError("Token de autenticação não encontrado.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "https://extensao-8-semestre-si-2025-2.onrender.com/api/postagem",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPosts(response.data);
      } catch (err) {
        console.error("Erro ao buscar posts:", err);
        setError("Erro ao carregar os posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-8">Todos os posts</h1>

      {/* Barra de busca */}
      <div className="flex justify-end mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-full pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>

      {loading && <p className="text-center text-gray-600">Carregando posts...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && filteredPosts.length === 0 && (
        <p className="text-center text-gray-600">Nenhum post encontrado.</p>
      )}

      {/* Cards dos posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {!loading && !error && filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-100 w-64 h-80 rounded-xl shadow-md flex flex-col items-center justify-between p-4 relative hover:shadow-lg transition"
          >
            {/* Imagem */}
            <div className="relative w-32 h-32 mb-3">
              <Image
                src={`https://extensao-8-semestre-si-2025-2.onrender.com/api/files/${post.banner}`}
                alt={post.titulo}
                fill
                className="object-cover rounded-md"
              />
            </div>

            {/* Conteúdo */}
            <div className="text-center">
              <h2 className="font-semibold">{post.titulo}</h2>
              <p className="text-sm text-gray-700 mt-1">{post.conteudo}</p>
            </div>

            {/* Ações */}
            <div className="flex space-x-4 mt-3">
              <Link href={`/admin/posts/${post.id}`}>
                <Pencil className="w-5 h-5 text-gray-700 hover:text-yellow-600 cursor-pointer" />
              </Link>
              <Trash2 className="w-5 h-5 text-gray-700 hover:text-red-600 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* Botões inferiores */}
      <div className="flex justify-center mt-10 space-x-4">
        <Button variant="outline" onClick={() => router.push(`/admin/posts/cadastrarpost`)}>Cadastrar</Button>
      </div>
       <style>{`
        /* Oculta a Navbar */
        .fixed {
          display: none !important;
        }
        /* Oculta o Footer */
        footer {
          display: none !important;
        }
      `}</style>
    </div>
  );
}