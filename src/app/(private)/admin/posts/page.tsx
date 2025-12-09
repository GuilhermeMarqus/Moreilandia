"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios"; // Importar axios
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

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
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false); // Estado do diálogo de confirmação
  const [postToDelete, setPostToDelete] = useState<PostData | null>(null); // Post a ser deletado
  const [deleting, setDeleting] = useState(false); // Estado de carregamento da exclusão

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem("token");

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

  const handleDeleteClick = (post: PostData) => {
    setPostToDelete(post);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!postToDelete) return;

    setDeleting(true);
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Token de autenticação não encontrado.");
      setDeleting(false);
      return;
    }

    try {
      await axios.delete(
        `https://extensao-8-semestre-si-2025-2.onrender.com/api/admin/postagem/${postToDelete.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Remove o post da lista
      setPosts(posts.filter((p) => p.id !== postToDelete.id));
      setDeleteDialogOpen(false);
      setPostToDelete(null);
    } catch (err) {
      console.error("Erro ao deletar post:", err);
      alert("Erro ao deletar o post. Tente novamente.");
    } finally {
      setDeleting(false);
    }
  };

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
              <button onClick={() => handleDeleteClick(post)} className="hover:text-red-600">
                <Trash2 className="w-5 h-5 text-gray-700 hover:text-red-600 cursor-pointer" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Botões inferiores */}
      <div className="flex justify-center mt-10 space-x-4">
        <Button variant="outline" onClick={() => router.push(`/admin/posts/cadastrarpost`)}>Cadastrar</Button>
      </div>

      {/* Diálogo de confirmação de exclusão */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar exclusão</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja deletar o post "{postToDelete?.titulo}"? Esta ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-3 justify-end">
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
              disabled={deleting}
            >
              Cancelar
            </Button>
            <Button
              variant="destructive"
              onClick={handleConfirmDelete}
              disabled={deleting}
            >
              {deleting ? "Deletando..." : "Deletar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}